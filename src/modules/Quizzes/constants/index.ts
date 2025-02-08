import { QuizType } from "src/types/quiz";
import { UserType } from "src/types/user";

export const dummyUser: UserType = {
    id: "1",
    first_name: "John",
    second_name: "Doe",
    email: "john.doe@example.com",
};

export const dummyQuizzes: QuizType[] = [
    {
        id: 1,
        title: "General Knowledge Quiz",
        description: "A quiz to test your general knowledge skills.",
        author: dummyUser,
        questions: [
            {
                id: 1,
                title: "What is the capital of France?",
                options: [
                    { id: 1, title: "Paris", is_correct: true },
                    { id: 2, title: "Berlin", is_correct: false },
                    { id: 3, title: "Madrid", is_correct: false },
                    { id: 4, title: "Rome", is_correct: false },
                ],
            },
            {
                id: 2,
                title: "Which of the following are programming languages?",
                options: [
                    { id: 5, title: "JavaScript", is_correct: true },
                    { id: 6, title: "Something", is_correct: false },
                    { id: 7, title: "HTML", is_correct: false },
                    { id: 8, title: "CSS", is_correct: false },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Science Trivia",
        description: "Test your knowledge of scientific facts.",
        author: dummyUser,
        questions: [
            {
                id: 3,
                title: "What is the chemical symbol for water?",
                options: [
                    { id: 9, title: "H2O", is_correct: true },
                    { id: 10, title: "O2", is_correct: false },
                    { id: 11, title: "CO2", is_correct: false },
                    { id: 12, title: "NaCl", is_correct: false },
                ],
            },
            {
                id: 4,
                title: "Which planets are gas giants?",
                options: [
                    { id: 13, title: "Earth", is_correct: false },
                    { id: 14, title: "Saturn", is_correct: true },
                    { id: 15, title: "Mars", is_correct: false },
                    { id: 16, title: "Venus", is_correct: false },
                ],
            },
        ],
    },
];

export default dummyQuizzes;
