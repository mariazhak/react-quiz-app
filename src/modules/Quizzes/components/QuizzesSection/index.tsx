import { Box, Typography } from '@mui/material';
import { FC, memo, useEffect } from 'react';
import { QuizCard } from '../../../../components/QuizCard';

import { styles } from './styles';
import { useQuizzesData } from '../../hooks/useQuizzesData';

export interface QuizzesSectionProps {}

export const QuizzesSection: FC<QuizzesSectionProps> = memo(() => {
  const { quizzes, fetchQuizzes } = useQuizzesData();

  useEffect(() => {
    void fetchQuizzes();
  }, []);

  if (quizzes.length === 0) {
    return (
      <Box sx={styles.root}>
        <Typography variant="h1">No quizzes here yet</Typography>
      </Box>
    )
  }

  return (
    <Box sx={styles.root}>
      {quizzes.map((quiz, index) => (
        <QuizCard key={index} quiz={quiz} />
      ))}
    </Box>
  );
});
