import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import useTheme from '@mui/system/useTheme';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
export default function ProfileCard(props: any) {
  const theme = useTheme();

  const userContext = useContext(JWTContext);
  const [avatar, setAvatar] = useState<string | undefined>(userContext?.user?.avatar);
  const [image, setImage] = useState<File | null>(null);
  const { getFileName } = props;
  useEffect(() => {
    if (image !== null) {
      const avatarUrl = URL.createObjectURL(image);
      setAvatar(avatarUrl);
      return () => URL.revokeObjectURL(avatarUrl);
      getFileName(URL.revokeObjectURL(avatarUrl));
    }
  }, [image]);
  const handleFileSelect = (event: any) => {
    setImage(event.target.files[0]);
  };
  const handleBrowseFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', handleFileSelect);
    fileInput.click();
  };
  return (
    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', gap: 5, alignItems: 'center' }}>
      <CardMedia component="img" sx={{ height: '100px', width: '100px', borderRadius: '50%' }} image={avatar} />
      <Stack columnGap={1} direction={'row'} alignItems={'center'} justifyContent={'center'}>
        <Button component="label" variant="outlined" onClick={handleBrowseFile} style={{ whiteSpace: 'nowrap' }}>
          Upload New Picture
        </Button>
        <Button variant="outlined" endIcon={<CloseIcon />} style={{ backgroundColor: theme.palette.primary.lighter }}>
          Delete
        </Button>
      </Stack>
    </Card>
  );
}
