import { Box, Typography } from '@mui/material';
import { FC, memo } from 'react';

import { styles } from './styles';
import { StyledButton } from 'src/UI/StyledButton';
import { CustomBox } from 'src/UI/CustomBox';
import { QuizType } from 'src/types/quiz';

export interface QuizCardProps {
  quiz: QuizType;
}

export const QuizCard: FC<QuizCardProps> = memo(({quiz}) => {
  return (
    <CustomBox style={styles.root}>
        <Box sx={styles.textContent}>
            <Box sx={styles.text}>
                <Typography variant="h3" textAlign="center">{quiz.title}</Typography>
                <Typography variant="h6">{`${quiz.author.first_name} ${quiz.author.second_name}`}</Typography>
            </Box>
            <StyledButton title="Go to Quiz" onClick={()=>{}} />
        </Box>
    </CustomBox>
  );
});