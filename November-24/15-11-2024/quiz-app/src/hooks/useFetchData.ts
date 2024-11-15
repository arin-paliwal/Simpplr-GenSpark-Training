import { useState, useEffect } from "react";
import { Question } from "../types";

const useFetchData = (category: string, difficulty: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        const shuffledQuestions = data.results.map((question: any) => ({
          ...question,
          answers: [
            ...question.incorrect_answers,
            question.correct_answer,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  return { questions, loading };
};

export default useFetchData;
