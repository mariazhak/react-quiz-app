import { QuizType } from 'src/types/quiz';
import { create } from 'zustand'

interface CurrentQuizState {
  quiz: QuizType;
  setQuiz: (quiz: QuizType) => void;
  resetStore: () => void;
}

export const useCurrentQuizStore = create<CurrentQuizState>()((set) => ({
  quiz: {} as QuizType,
  setQuiz: (quiz) => set({ quiz }),
  resetStore: () => set({ quiz: {} as QuizType }),
}));