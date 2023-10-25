import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useTheme from '@mui/system/useTheme';
import { Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

export interface UserCardProps {
  avatar:string|undefined;
  fullName: string | undefined;
  professionalRole?: string | undefined;
  LinkedIn?: string | undefined | null;
  Facebook?: string | undefined | null;
  Youtube?: string | undefined | null;
  Twitter?: string | undefined | null;
}

export default function UserCard({avatar, fullName, professionalRole, LinkedIn, Facebook, Youtube, Twitter }: UserCardProps) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', gap: 1, alignItems: 'left' }}>
      
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Avatar src={avatar} alt='avatar' sx={{height:'13vh', width:'13vh'}}/>
          </Grid>
          <Grid item xs={6}>
          <Stack spacing={2.5}>
          <Typography variant="h3" style={{ color: theme.palette.primary.darker, whiteSpace:'nowrap' }}>
            {fullName}
          </Typography>
          <Typography variant="h4">{professionalRole}</Typography>
          <Stack direction={'row'} gap={2}>
            <Link to={LinkedIn ? LinkedIn : ''}>{LinkedIn && <LinkedInIcon />} </Link>
            <Link to={Twitter ? Twitter : ''}>{Twitter && <TwitterIcon />}</Link>
            {Facebook && <FacebookIcon />}
            {Youtube && <YouTubeIcon />}
          </Stack>
        </Stack>
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>
  );
}
