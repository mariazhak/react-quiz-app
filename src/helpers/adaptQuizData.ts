import { QuestionApiType, QuestionType, QuizApiType, QuizType } from "src/types/quiz";

export const componentToApiQuiz = (quiz: QuizType) => {
    return {
        author_id: quiz.authorId,
        title: quiz.title,
        description: quiz.description,
        slides: quiz.questions.map((question, index) => componentToApiQuestion(question, index)),
    } as QuizApiType;
};

export const componentToApiQuestion = (question: QuestionType, index: number) => {
    return {
        id: Number(index) + 1,
        answer_id: question.correct_option,
        question1: question.option1,
        question2: question.option2,
        question3: question.option3,
        question4: question.option4,
    } as QuestionApiType;
};

export const apiToComponentQuiz = (quiz: QuizApiType) => {
    return {
        id: 0,
        title: quiz.title,
        description: quiz.description,
        authorId: quiz.author_id,
        questions: quiz.slides.map(apiToComponentQuestion),
    } as QuizType;
};

export const apiToComponentQuestion = (question: QuestionApiType) => {
    return {
        title: "",
        option1: question.question1,
        option2: question.question2,
        option3: question.question3,
        option4: question.question4, 
        correct_option: question.answer_id,
    } as QuestionType;
};
