import { Checkbox, InputAdornment, TextField } from '@mui/material';
import { FC, memo } from 'react';

import { styles } from './styles';

export interface QuestionOptionTextFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isSelected?: boolean;
    setIsSelected?: () => void;
    placeholder?: string;
}

export const QuestionOptionTextField: FC<QuestionOptionTextFieldProps> = memo(({ value, onChange, isSelected, setIsSelected = ()=>{}, placeholder }) => {
  return (
    <TextField
        placeholder={placeholder}
        sx={[value==="" ? styles.emptyTextField : styles.textField]}
        value={value}
        onChange={onChange}
        id="input-with-icon-textfield"
        label=""
        slotProps={{
        input: {
            startAdornment: (
            <InputAdornment position="start">
                <Checkbox sx={styles.checkbox} checked={isSelected} onChange={(event)=> setIsSelected()} disabled={value===""}/>
            </InputAdornment>
            ),
        },
        }}
        variant="outlined"
  />
  );
});