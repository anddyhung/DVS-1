import { Card, Typography, Grid, CardContent, Stack, Button } from '@mui/material';
import Congratulation from 'components/cards/congratulation';
import RecommendedExpert from 'components/cards/recommended-experts';
import { useEffect } from 'react';
import { useSelector, dispatch } from 'store';
import { getRecommendedExperts } from 'store/reducers/experts';
import { getActiveJobs } from 'store/reducers/jobs';

const JobPostInvitation = () => {
  useEffect(() => {
    dispatch(getActiveJobs());
    dispatch(getRecommendedExperts(job[job.length - 1]?._id));
  }, []);
  const job = useSelector((state) => state.jobs.allJobs);

  const recommededExperts = useSelector((state) => state.experts.recommendedExperts);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Congratulation job={job[job.length - 1]} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h3">Recommended Experts</Typography>
                  <Button style={{ border: 'none', outline: 'none' }}>View all</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                {recommededExperts?.map((item: any) => (
                  <RecommendedExpert expert={item} jobId={job[job.length - 1]?._id} />
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default JobPostInvitation;
