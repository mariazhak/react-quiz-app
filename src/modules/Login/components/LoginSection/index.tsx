import { Box, Button, TextField, Typography } from '@mui/material';
import { FC, memo, useState } from 'react';

import { styles } from './styles';
import { useNavigate } from 'react-router-dom';
import { useLoginData } from '../../hooks/useLoginData';
import { CustomTextField } from 'src/UI/CustomTextField';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSignUpSchema } from '../../constants';

export interface LoginSectionProps {
    type: "login" | "signup";
}

export const LoginSection: FC<LoginSectionProps> = memo(({ type }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { loading, apiError, postRegister, postLogin } = useLoginData();

    const {
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSignUpSchema),
      });

    const handleNavigation = () => {
        if (type === "login") {
            navigate('/signup');
        } else {
            navigate('/login');
        }
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const onSignUpContinue = async () => {
        const response = await postRegister(firstName, lastName, email, password);
        
        if (response) {
            navigate('/quizzes');
        }
    };

    const onLoginContinue =  async () => {
        const response = await postLogin(email, password);

        if (response) {
            navigate('/quizzes');
        }
    };


  return (
    <Box sx={styles.root}>
        <Box sx={styles.form}>
            <Typography variant="h1">{type === "login" ? "Login" : "Sign Up"}</Typography>

            <Box sx={styles.textFieldGroup}>
               {type === "signup" && (
                 <Box sx={styles.nameTextFieldGroup}>
                    <CustomTextField isHalf label="First Name" value={firstName} onChange={handleFirstNameChange} error={!!errors.firstName} errorText={errors.firstName?.message}/>

                    <CustomTextField isHalf label="Last Name" value={lastName} onChange={handleLastNameChange} error={!!errors.lastName} errorText={errors.lastName?.message}/>
                </Box>)}

                <CustomTextField label="Email" value={email} onChange={handleEmailChange} error={!!errors.email} errorText={errors.email?.message} />

                <CustomTextField label="Password" type="password" value={password} onChange={handlePasswordChange} error={!!errors.password} errorText={errors.password?.message} />

                {type === "signup" && (
                    <CustomTextField label="Confirm Password" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} error={!!errors.confirmPassword} errorText={errors.confirmPassword?.message} />
                )}
            </Box>

            <Button loading={loading} variant="contained" sx={styles.button} size="large" onClick={type === "signup" ? handleSubmit(onSignUpContinue) : handleSubmit(onLoginContinue)}>Continue</Button>

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
