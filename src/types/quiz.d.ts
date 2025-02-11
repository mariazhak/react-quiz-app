export type QuizType = {
    id: number;
    title: string;
    description: string;
    authorId: number;
    questions: QuestionType[];
};

export type QuestionType = {
    title: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    correct_option: number;
};

export type QuizApiType = {
    author_id: number;
    title: string;
    description: string;
    slides: QuestionApiType[];
};

export type QuestionApiType = {
    id: number;
    answer_id: number;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
};

export type QuizShortInfoType = {
    quiz_id: number;
    author_id: number;
    quiz_author: string;
    quiz_title: string;
    quiz_description: string;
    quiz_ratings: number;
};