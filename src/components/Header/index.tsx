import { Box, Typography } from '@mui/material';
import { FC, memo } from 'react';

import { styles } from './styles';
import { StyledButton } from 'src/UI/StyledButton';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = memo(() => {
  return (
    <Box sx={styles.root}>
        <Typography variant="h2"color="mainPalette.white">Quizzes App</Typography>

        <Box sx={styles.buttonGroup}>
            <StyledButton title="Create Quiz" onClick={() => {}} color="mainPalette.white" textColor="mainPalette.darkBlue"/>

            <StyledButton title="My Profile" onClick={() => {}} color="mainPalette.white" textColor="mainPalette.darkBlue"/>
        </Box>
    </Box>
  );
});