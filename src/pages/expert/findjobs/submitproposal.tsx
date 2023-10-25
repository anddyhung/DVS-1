// project import
import {
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  Stack,
  Box,
  Chip,
  Card,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Dialog,
  DialogContent
} from '@mui/material';
import useTheme from '@mui/system/useTheme';
import MainCard from 'components/MainCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ==============================|| SAMPLE PAGE ||============================== //
const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '0.5rem', transform: 'scale(1.4)' }}>
    •
  </Box>
);
const handleAddClick = () => {
  alert('Fool');
};

const SubmitProposal = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (message.trim() === '') {
      setShowError(true);
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        navigate('/expert/findjobs');
      }, 3000);
      // close the dialog after 3 seconds
    }
  };

  const theme = useTheme();
  const [selectedRadioValue, setSelectedRadioValue] = useState('By Milestone');

  const handleRadioChange = (event: any) => {
    setSelectedRadioValue(event.target.value);
  };
  return (
    <>
      <Grid container rowGap={3}>
        <Grid item xs={12} lg={2.2}></Grid>
        <Grid item xs={12} lg={2.4}>
          <Typography variant="h1" whiteSpace={'nowrap'}>
            Submit a proposal
          </Typography>
        </Grid>
        <Grid item xs={12} lg={7.2}></Grid>
        <Grid item xs={12} lg={2}></Grid>
        <Grid item xs={12} lg={8}>
          <Card>
            <List>
              <ListItem sx={{ padding: '2rem' }}>
                <Grid container rowGap={2}>
                  <Grid item xs={12} lg={12}>
                    <Typography variant="h3">Job Details</Typography>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Typography variant="h3" style={{ color: theme.palette.primary.darker }}>
                      Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} lg={12}>
                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                      <Typography variant="h4">Fractional Services {bull} </Typography>
                      <Typography variant="body1" style={{ fontSize: '1rem' }}>
                        Posted 22 Hours ago
                      </Typography>
                      <Typography variant="h4"> {bull} </Typography>
                      <Typography variant="h5">Verified </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Chip label={'Jira'} sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }} />
                    <Chip label={'React Native'} sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }} />
                    <Chip label={'Software Development'} sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }} />
                  </Grid>
                  <Grid container item xs={12} lg={12} alignItems={'center'}>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Price</Typography>
                        <Typography variant="body1">$ 120/Hour</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Milestones</Typography>
                        <Typography variant="body1">To be discussed</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Duration</Typography>
                        <Typography variant="body1">3 Months</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Company Location</Typography>
                        <Typography variant="body1">UAE</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Industry of Expertise</Typography>
                        <Typography variant="body1">Insurance</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem sx={{ padding: '2rem' }}>
                <Grid container rowGap={2}>
                  <Grid container>
                    <FormControl fullWidth>
                      <Typography variant="h3" marginBottom={'1rem'}>
                        Terms of Payment
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        sx={{ flexDirection: 'row', display: 'flex' }}
                        defaultValue="By Milestone"
                        name="radio-buttons-group"
                        value={selectedRadioValue}
                        onChange={handleRadioChange}
                      >
                        <Grid container columnSpacing={2}>
                          <Grid item xs={12} lg={6}>
                            <MainCard
                              border={false}
                              boxShadow
                              sx={{
                                backgroundColor:
                                  selectedRadioValue === 'By Milestone' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
                              }}
                            >
                              <FormControlLabel
                                value="By Milestone"
                                control={<Radio />}
                                label={
                                  <Grid container alignItems={'center'}>
                                    <Typography variant="h4">By Milestone</Typography>
                                  </Grid>
                                }
                              />
                            </MainCard>
                          </Grid>
                          <Grid item xs={12} lg={6}>
                            <MainCard
                              border={false}
                              boxShadow
                              sx={{
                                backgroundColor:
                                  selectedRadioValue === 'By Project' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
                              }}
                            >
                              <FormControlLabel
                                value="By Project"
                                control={<Radio />}
                                label={
                                  <Grid container alignItems={'center'}>
                                    <Typography variant="h4">By Project</Typography>
                                  </Grid>
                                }
                              />
                            </MainCard>
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid container item xs={12} lg={12} alignItems={'center'}>
                    <Grid item xs={12} lg={12}>
                      <Stack spacing={1} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="h4">Proposed Hourly Rate</Typography>
                        <div onClick={handleAddClick} style={{ cursor: 'pointer', color: theme.palette.primary.dark, fontSize: '1rem' }}>
                          <Typography variant="h4">Add Milestone</Typography>
                        </div>
                      </Stack>
                    </Grid>
                    <Grid item container xs={12} lg={12}></Grid>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider style={{ width: '50%' }} />
              <ListItem sx={{ padding: '2rem' }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={12}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">Total Price of the Job</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                        $ 0.00
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="body1" style={{ fontSize: '1rem' }}>
                        Service Fee
                      </Typography>
                      <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                        $ 0.00
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="body1" style={{ fontSize: '1rem' }}>
                        Your Earnings
                      </Typography>
                      <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                        $ 0.00
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <MainCard
              border={false}
              boxShadow
              sx={{
                backgroundColor: theme.palette.primary.lighter
              }}
            >
              <Grid container rowGap={2}>
                <Grid item xs={12} lg={12}>
                  <Typography variant="h4">Coverletter</Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={7}
                    error={showError}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: showError ? 'red' : 'initial'
                        }
                      },
                      height: '100%',
                      bgcolor: 'white'
                    }}
                    placeholder="Write a Message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setShowError(false);
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Button variant="contained" style={{ width: '8rem' }} onClick={handleClickOpen}>
                    Send
                  </Button>
                  <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <Box sx={{ p: 1, py: 1.5 }}>
                      <DialogContent>
                        <Typography variant="h2">Your proposal was submitted successfully.</Typography>
                      </DialogContent>
                    </Box>
                  </Dialog>
                </Grid>
              </Grid>
            </MainCard>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SubmitProposal;
