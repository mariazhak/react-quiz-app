import { Box, Button, Typography } from '@mui/material';
import { FC, memo } from 'react';

import { styles } from './styles';
import { StyledButton } from 'src/UI/StyledButton';
import { CustomBox } from 'src/UI/CustomBox';

export interface QuizCardProps {}

export const QuizCard: FC<QuizCardProps> = memo(() => {
  return (
    <CustomBox style={{ width: 200}}>
        <img style={styles.image} src="https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg" alt="quiz" />
        <Box sx={styles.textContent}>
            <Box sx={styles.text}>
                <Typography variant="h3">Quiz Title</Typography>
                <Typography variant="h6">By Quiz Author</Typography>
            </Box>
            <StyledButton title="Go to Quiz" onClick={()=>{}} />
        </Box>
    </CustomBox>
  );
});