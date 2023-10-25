// project import
import MainCard from 'components/MainCard';
import {
  Autocomplete,
  Select,
  MenuItem,
  Grid,
  Button,
  Stack,
  TextField,
  Typography,
  Box,
  Chip,
  FormControl,
  InputLabel
} from '@mui/material';
import useTheme from '@mui/system/useTheme';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CompanylogoCard from 'components/cards/companylogo';
import Sidebar from 'components/cards/sidebar';
import { Country, State, City } from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import { dispatch } from 'store';
import { setOrganizationSettings } from 'store/reducers/settings';
import { useSelector } from 'store';
import { loadAreasOfExpertise, loadIndustries } from 'store/reducers/jobs';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
// ==============================|| SAMPLE PAGE ||============================== //
const EditOrganizationProfile = () => {
  const theme = useTheme();
  const userContext = useContext(JWTContext);
  useEffect(() => {
    dispatch(loadIndustries());
    dispatch(loadAreasOfExpertise());
  }, []);

  const skillLists = useSelector((state) => state.jobs.areasOfExpertise);
  const industryList = useSelector((state) => state.jobs.industries);
  const revenueList = ['Insurance', 'Software Engineering', 'IT & Tech'];
  const fundingList = ['Insurance', 'Software Engineering', 'IT & Tech'];
  const teamSizeList = ['1-5', '5-10', '10-20', '20-50', '50-100', '100+'];
  const [logo, setLogo] = useState<string | any>(userContext?.user?.client?.organization?.logo);
  const [organizationName, setCompanyName] = useState(userContext?.user?.client?.organization?.organizationName);
  const [skills, setSkills] = useState<string[]>([]);
  const [dateOfRegisteration, setDateOfRegisteration] = useState(userContext?.user?.client?.organization?.dayOfRegistration);
  const [revenue, setRevenue] = useState(userContext?.user?.client?.organization?.revenue);
  const [stageOfFunding, setStageOfFunding] = useState(userContext?.user?.client?.organization?.fundingStage);
  const [teamSize, setTeamSize] = useState(userContext?.user?.client?.organization?.teamSize);
  const [briefOverview, setBriefOverview] = useState(userContext?.user?.client?.organization?.description);
  const [socialLink, setSocialLink] = useState(userContext?.user?.client?.organization?.socialLink);
  const [websiteLink, setWebsiteLink] = useState(userContext?.user?.client?.organization?.website);
  const [industry, setIndustry] = useState<string | undefined>(userContext?.user?.client?.organization?.industry);
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(userContext?.user?.client?.organization?.country);
  const [selectedState, setSelectedState] = useState<string | undefined>(userContext?.user?.client?.organization?.state);
  const [selectedCity, setSelectedCity] = useState<string | undefined>(userContext?.user?.client?.organization?.city);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const handleClick = () => {
    dispatch(
      setOrganizationSettings({
        organizationName: organizationName,
        specialities: skills,
        dayOfRegisteration: dateOfRegisteration,
        description: briefOverview,
        revenue: revenue,
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
        industry: industry,
        teamSize: teamSize,
        fundingStage: stageOfFunding,
        logo: logo,
        website: websiteLink,
        socialLink: socialLink
      })
    );
  };
  const handleDateChange = (newValue: Date | any) => {
    setDateOfRegisteration(newValue);
  };
  const onskillsDelete = (item: string) => () => {
    setSkills((skill) => skill.filter((v) => v !== item));
  };

  const getFileName = (newValue: string) => {
    setLogo(newValue);
  };

  useEffect(() => {
    try {
      const fetchedCountries = Country.getAllCountries();
      setCountries(fetchedCountries);
    } catch {
      setCountries([]);
    }
  }, []);
  useEffect(() => {
    try {
      const fetchedStates = State.getStatesOfCountry(selectedCountry);
      setStates(fetchedStates);
    } catch {
      setStates([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    try {
      const fetchedCities = City.getCitiesOfState(selectedCountry as string, selectedState as string);
      setCities(fetchedCities);
    } catch {
      setCities([]);
    }
  }, [selectedState]);
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} sm={0} xs={0}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} sm={12} xs={12}>
        <MainCard
          sx={{ p: 1.5 }}
          title={
            <Stack direction={'row'} alignItems={'center'} gap={2}>
              <Button onClick={handleBackClick}>
                <ArrowBackIcon sx={{ fontSize: '2rem', color: theme.palette.primary.darker }} />
              </Button>
              <Typography variant="h3">Edit Starup Details</Typography>
            </Stack>
          }
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">General Information</Typography>
            </Grid>
            <Grid container item xs={12} lg={6} sm={12} spacing={4}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Organization Name
                  </Typography>
                  <TextField fullWidth value={organizationName} onChange={(event: any) => setCompanyName(event.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Country</InputLabel>
                  <Select value={selectedCountry} onChange={(event) => setSelectedCountry(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel style={{ color: 'black' }}>State</InputLabel>
                  <Select value={selectedState} onChange={(event) => setSelectedState(event?.target.value)}>
                    {states?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel style={{ color: 'black' }}>City</InputLabel>
                  <Select value={selectedCity} onChange={(event) => setSelectedCity(event?.target.value)}>
                    {cities?.map((item: any) => (
                      <MenuItem key={item.name} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Industries
                  </Typography>
                  <Select value={industry} onChange={(event) => setIndustry(event?.target.value)}>
                    {industryList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Specialities
                  </Typography>
                  <FormControl sx={{ width: '100%' }}>
                    <Autocomplete
                      multiple
                      options={skillLists}
                      defaultValue={skillLists}
                      getOptionLabel={(option) => option}
                      value={skills}
                      onChange={(e, newValue) => setSkills(newValue as string[])}
                      renderTags={() => null}
                      sx={{ width: '100%' }}
                      renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas of Expertise" />}
                    />
                  </FormControl>
                  <Box
                    mt={3}
                    sx={{
                      '& > :not(:last-child)': { marginRight: 1 },
                      '& > *': { marginBottom: 1 }
                    }}
                  >
                    {skills.map((v) => (
                      <Chip key={v} label={v} onDelete={onskillsDelete(v)} />
                    ))}
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      Date of Registration
                    </Typography>
                    <DesktopDatePicker format="MM/dd/yyyy" value={dateOfRegisteration} onChange={handleDateChange} />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Select Revenue
                  </Typography>
                  <Select value={revenue} onChange={(event: any) => setRevenue(event.target.value)}>
                    {revenueList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Stage of Funding
                  </Typography>
                  <Select value={stageOfFunding} onChange={(event: any) => setStageOfFunding(event.target.value)}>
                    {fundingList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Team Size
                  </Typography>
                  <Select value={teamSize} onChange={(event: any) => setTeamSize(event.target.value)}>
                    {teamSizeList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Brief Overview
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    multiline
                    value={briefOverview}
                    rows={7}
                    onChange={(event: any) => setBriefOverview(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography variant="h3">Social Media</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    LinkedIn
                  </Typography>
                  <TextField
                    placeholder="Enter your link"
                    id="url-start-adornment"
                    value={socialLink}
                    onChange={(event: any) => setSocialLink(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Company Website
                  </Typography>
                  <TextField
                    placeholder="Enter Email"
                    id="url-start-adornment"
                    value={websiteLink}
                    onChange={(event: any) => setWebsiteLink(event.target.value)}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={0} sm={0} lg={6} justifyContent="center">
              <Grid item xs={12} lg={6}>
                <CompanylogoCard src={logo} getFileName={getFileName} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Stack spacing={1}>
                <Button onClick={handleClick} variant="contained" sx={{ width: '7rem' }}>
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditOrganizationProfile;
