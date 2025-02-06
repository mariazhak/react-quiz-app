import { Box, Button, TextField, Typography } from '@mui/material';
import { FC, memo } from 'react';

import { styles } from './styles';
import { useNavigate } from 'react-router-dom';

export interface LoginSectionProps {
    type: "login" | "signup";
}

export const LoginSection: FC<LoginSectionProps> = memo(({ type }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (type === "login") {
            navigate('/signup');
        } else {
            navigate('/login');
        }
    };

  return (
    <Box sx={styles.root}>
        <Box sx={styles.form}>
            <Typography variant="h1">{type === "login" ? "Login" : "Sign Up"}</Typography>

            <Box sx={styles.textFieldGroup}>
                <TextField label="Email" sx={styles.textField} />

                <TextField label="Password" type="password" sx={styles.textField} />

                {type === "signup" && (
                    <TextField label="Confirm Password" type="password" sx={styles.textField} />
                )}
            </Box>

            <Button variant="contained" sx={styles.button} size="large">Continue</Button>

            <Box sx={styles.link}>
                <Typography variant="body1">
                    {type === "login" ? "Don't have an account?" : "Already have an account?"}
                </Typography>

                <Button variant="text" sx={styles.linkButton} onClick={handleNavigation}>
                    {type === "login" ? "Sign Up" : "Login"}
                </Button>
            </Box>
        </Box>
    </Box>
  );
});
