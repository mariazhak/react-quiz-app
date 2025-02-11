import { Typography } from '@mui/material';
import { FC, memo, useEffect} from 'react';

import { CustomBox } from 'src/UI/CustomBox';

import { useUserStore } from 'src/modules/Login/store/useUserStore';

import { styles } from './styles';
import { useProfileData } from '../../hooks/useProfileData';

export interface ProfileSectionProps {}

export const ProfileSection: FC<ProfileSectionProps> = memo(() => {
    const { user } = useUserStore();
    const { photo, getLogo, loading } = useProfileData();

    useEffect(() => {
        void getLogo(Number(user.id));
    }, [user.id]);

    if (loading) {
        return <Typography variant="h1">Loading...</Typography>;
    }

  return (
        <CustomBox style={styles.root}>
            {photo !== "" && <img src={photo} alt="profile" />}
        
            <Typography variant="h1">{`${user.first_name} ${user.second_name}`}</Typography>

            <Typography variant="h4">{user.email}</Typography>
        </CustomBox>
  );
});