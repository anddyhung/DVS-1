// project import
import MainCard from 'components/MainCard';
import { Select, MenuItem, Grid, Button, Stack, TextField, Typography, Box, Chip, InputLabel, Card, CardMedia } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';
import { CloseOutlined } from '@material-ui/icons';
import Sidebar from 'components/cards/sidebar';
import { Country } from 'country-state-city';
import { ICountry } from 'country-state-city';
import { useContext } from 'react';
import { dispatch } from 'store';
import JWTContext from 'contexts/JWTContext';
import { createClientProfile } from 'store/reducers/clients';
import { LanguagesProps } from 'types/clients-profile';
import { useTheme } from '@mui/system';
import CloseIcon from '@material-ui/icons/Close';
// const avatarImage = require.context('assets/images/users', true);
// ==============================|| SAMPLE PAGE ||============================== //
const EditClientProfile = () => {
  const userContext = useContext(JWTContext);
  const languages = ISO6391.getAllNames();
  const proficiencies = ['Native', 'Fluent', 'Conversational'];
  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [languageInfo, setLanguageInfo] = useState<LanguagesProps[]>(userContext?.user?.client !== null ? (userContext?.user?.client?.languages as LanguagesProps[]) : []);
  const [selectedCountry, setSelectedCountry] = useState<string | any>(userContext?.user?.client?.country);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null | undefined>(new Date());
  const [linkEdin, setLinkedinURL] = useState<string | undefined>(userContext?.user?.client?.socialMedia?.[0]?.url);
  const [personalWebsite, setPersonalWebsite] = useState<string | undefined>(userContext?.user?.client?.socialMedia?.[1]?.url);
  const [phoneNumber, setPhoneNumber] = useState<string | any>(userContext?.user?.phoneNumber);
  const [avatar, setAvatar] = useState<string | undefined>(userContext?.user?.avatar);
  const [image, setImage] = useState<File | null>(null);
  const theme = useTheme();

  useEffect(() => {
    try {
      const fetchedCountries = Country.getAllCountries();
      setCountries(fetchedCountries);
    } catch {
      setCountries([]);
    }
  }, []);

  useEffect(() => {
    if (image !== null) {
      const avatarUrl = URL.createObjectURL(image);
      setAvatar(avatarUrl);
    }
  }, [image]);

  const handleAddClick = () => {
    const newLanguageInfo = { language: language, proficiency: proficiency };
    if (newLanguageInfo) {
      setLanguageInfo([...languageInfo, newLanguageInfo]);
    }
  };

  const onLanguageInfoDelete = (languageinfo: string) => () => {
    setLanguageInfo((languageInfo: LanguagesProps[]) => languageInfo.filter((v: { language: string }) => v.language !== languageinfo));
  };

  const handleDateChange = (newDate: Date | any) => {
    setDateOfBirth(newDate);
  };

  const handlePhoneChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  const handleFileSelect = (event: any) => {
    setImage(event.target.files[0]);
  };
  const handleBrowseFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', handleFileSelect);
    fileInput.click();
  };

  const handleSave = () => {
    dispatch(
      createClientProfile({
        email: userContext?.user?.email,
        phoneNumber: phoneNumber,
        birthday: dateOfBirth,
        country: selectedCountry,
        languages: languageInfo,
        socialMedia: [
          { type: 'Linkedin', url: linkEdin },
          { type: '', url: personalWebsite }
        ],
        organization: null,
        profileCompleteness: userContext?.user?.profileCompleteness
      })
    );
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={<Typography variant="h2">Edit Profile</Typography>}
          secondary={
            <Stack spacing={2} direction="row">
              <Button variant="contained" sx={{ width: '9rem' }} onClick={handleSave}>
                Save changes
              </Button>
            </Stack>
          }
        >
          <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">General Information</Typography>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={3}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                    Full Name
                  </Typography>
                  <TextField fullWidth placeholder="Jane Doe" value={userContext?.user?.fullName} disabled />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Country of Residence</InputLabel>
                  <Select value={selectedCountry} onChange={(event) => setSelectedCountry(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      D.O.B
                    </Typography>
                    <DesktopDatePicker format="MM/dd/yyyy" value={dateOfBirth} onChange={handleDateChange} />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                    Contact Info
                  </Typography>
                  <TextField fullWidth placeholder="+1 908 514 4288" value={phoneNumber} onChange={handlePhoneChange} />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} sx={{ marginTop: '1rem' }}>
                <Typography sx={{ mb: 1, fontSize: '1rem' }} variant="body1">
                  Language Preference
                </Typography>
                <Stack spacing={2}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={4.5}>
                      <Select value={language} fullWidth onChange={(event) => setLanguage(event.target.value)}>
                        {languages?.map((item: string | null) =>
                          item !== null ? (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          ) : null
                        )}
                      </Select>
                    </Grid>
                    <Grid item xs={4.5}>
                      <Select value={proficiency} onChange={(event) => setProficiency(event.target.value)} style={{ width: '100%' }}>
                        {proficiencies?.map((item: string) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="outlined" onClick={handleAddClick} fullWidth style={{ marginTop: '%' }}>
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <Stack spacing={2}>
                    {languageInfo?.map((v: any) => (
                      <Box>
                        <Chip
                          variant="combined"
                          key={String(v.language)}
                          label={
                            <Stack justifyContent="space-between" direction="row">
                              <Typography>{v.language}</Typography>
                              <Typography>{v.proficiency}</Typography>
                            </Stack>
                          }
                          deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                          onDelete={onLanguageInfoDelete(String(v.language))}
                          sx={{
                            color: 'text.primary',
                            width: '100%',
                            '& .MuiChip-label': {
                              width: '100%'
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={6}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Profile Picture
                  </Typography>
                  <MainCard sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', gap: 5, alignItems: 'center' }}>
                      <CardMedia component="img" sx={{ height: '100px', width: '100px', borderRadius: '50%' }} image={avatar} />
                      <Stack columnGap={1} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        <Button component="label" variant="outlined" onClick={handleBrowseFile}>
                          Upload New Picture
                        </Button>
                        <Button variant="outlined" endIcon={<CloseIcon />} style={{ backgroundColor: theme.palette.primary.lighter }}>
                          Delete
                        </Button>
                      </Stack>
                    </Card>
                  </MainCard>
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h3">Social Media</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  LinkedIn
                </Typography>
                <TextField
                  placeholder="Enter your link"
                  id="url-start-adornment"
                  value={linkEdin}
                  onChange={(event: any) => setLinkedinURL(event?.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}></Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Personal Website
                </Typography>
                <TextField
                  placeholder="Enter your link"
                  id="url-start-adornment"
                  value={personalWebsite}
                  onChange={(event: any) => setPersonalWebsite(event.target.value)}
                />
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditClientProfile;
