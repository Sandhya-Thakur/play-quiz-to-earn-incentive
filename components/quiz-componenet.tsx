"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

export function Quiz() {
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.9,
  });

  const memory = new BufferMemory();
  const chain = new ConversationChain({ llm: model, memory: memory });

  const categories = [
    { label: "Sports", value: "sports" },
    { label: "Science", value: "science" },
    { label: "History", value: "history" },
    { label: "Geography", value: "geography" },
    { label: "Music", value: "music" },
    { label: "Movies", value: "movies" },
    { label: "Literature", value: "literature" },
    { label: "Food and Cooking", value: "food_cooking" },
    { label: "Technology", value: "technology" },
    { label: "Art and Artists", value: "art_artists" },
  ];

  const [input, setInput] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [category, setCategory] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showCorrectAnswersModal, setShowCorrectAnswersModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [attemptedQuestions, setAttemptedQuestions] = useState(0); // Track the number of attempted questions
  const [showTotalAttemptedQuestions, setShowTotalAttemptedQuestions] =
    useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSelectedCategory(selectedCategory); // Update the selected category
  };

  const askFirstQuestion = async () => {
    if (category !== "") {
      const firstQuestion = await run(
        `Ask a trivia question in the category ${category}.do not generate the answer and generate one question at a time`
      );
      setQuestion(firstQuestion); // Set the question as the response
    }
  };

  const askNextQuestion = async () => {
    if (selectedCategory !== "") {
      const nextQuestion = await run(
        `Ask a trivia question in the category ${selectedCategory}.do not generate the answer and generate one question at a time`
      );
      setQuestion(nextQuestion); // Set the question as the response
      setInput(""); // Clear the input field
      setResponse(""); // Clear the response field
    }
  };

  const run = async (input: string) => {
    const response = await chain.call({ input: input });
    return response.response;
  };

  useEffect(() => {
    askFirstQuestion();
  }, [category]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Add a check to prevent multiple increments
    if (!response) {
      const result = await run(
        `AI: ${response}\nYou: ${input}\nAI: Evaluate the answer and give result strictly in the form of "Its Correct" or "Its not Correct".`
      );

      // Check if the response contains "Its Correct" (modify this check according to your actual response format)
      if (
        result.match(/(\bthat's correct\b)|(\bit's correct\b)|(\bcorrect\b)/i)
      ) {
        // If the answer is correct, increment the count of correct answers
        setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      }

      setResponse(result); // Update the question with the new trivia question
      setInput(""); // Clear the input field

      // Increment the count of attempted questions
      setAttemptedQuestions(
        (prevAttemptedQuestions) => prevAttemptedQuestions + 1
      );
    }
  };

  const toggleCorrectAnswersModal = () => {
    setShowCorrectAnswersModal(!showCorrectAnswersModal);
  };

  const toggleTotalAttemptedQuestions = () => {
    setShowTotalAttemptedQuestions(!showTotalAttemptedQuestions);
  };

  const handleNextQuestion = () => {
    askNextQuestion();
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="w-full p-6 border-solid border-2 border-grey-800 shadow-2xl  shadow-blue-500/40 resize-y rounded-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Quiz-Bot</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2.5">
                <Label htmlFor="name" className="font-medium">
                  Your Answer
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your answer"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <div className="space-y-2.5">
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="bg-blend-lighten md:bg-blend-darken opacity-50 hover:opacity-100 p-4 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mix-blend-multiply md:mix-blend-overlay"
                 
                >
                  <option  value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-4 divide-y divide-teal-400 md:divide-pink-400 ">
              <Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-2xl  shadow-blue-500/40">
                Submit Answer
              </Button>
              <Button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-2xl  shadow-blue-500/40"
              >
                Next Question
              </Button>
              <Button
                onClick={toggleCorrectAnswersModal}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 shadow-2xl  shadow-blue-500/40"
              >
                Correct Answers
              </Button>
              <Button
                onClick={toggleTotalAttemptedQuestions}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 shadow-2xl  shadow-blue-500/40"
              >
                Attempted Questions
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          {question && (
            <div >
              <p className="" >{question}</p>
            </div>
          )}
          {response && (
            <div>
              <p className="" >{response}</p>
            </div>
          )}

          {showCorrectAnswersModal && (
            <div className="font-sans roundedoutline outline-offset-2 outline-1  hover:outline-2">
              <h2>Your Correct Answers</h2>
              <p>Correct Answers: {correctAnswers}</p>
              <p>Questions Attempted: {attemptedQuestions}</p>{" "}
              {/* Display the number of attempted questions */}
              <button
                onClick={toggleCorrectAnswersModal}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 shadow-2xl  shadow-blue-500/40"
              >
                Close
              </button>
            </div>
          )}

          {showTotalAttemptedQuestions && (
            <div className="font-sans rounded outline outline-offset-2 outline-1  hover:outline-2">
              <h2>Total Attempted Questions</h2>
              <p>Total Questions Attempted: {attemptedQuestions}</p>{" "}
              {/* Display the total number of attempted questions */}
              <button
                onClick={toggleTotalAttemptedQuestions}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 shadow-2xl  shadow-blue-500/40"
              >
                Close
              </button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
