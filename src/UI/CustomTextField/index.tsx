import { TextField } from '@mui/material';
import { FC, memo } from 'react';

import { styles } from './styles';

export interface CustomTextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isHalf?: boolean;
    isMultiline?: boolean;
    error?: boolean;
    errorText?: string;
}

export const CustomTextField: FC<CustomTextFieldProps> = memo(({ label, value, onChange, isMultiline, isHalf, error, errorText }) => {
  return (
    <TextField multiline={isMultiline} label={label} maxRows={3} error={error} helperText={errorText} sx={[styles.textField, isHalf ? styles.halfTextField : {}]} value={value} onChange={onChange} />
  );
});