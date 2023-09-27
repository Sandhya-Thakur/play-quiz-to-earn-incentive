import React from 'react';

interface CorrectAnswersProps {
  correctAnswers: number;
  attemptedQuestions: number;
  onClose: () => void;
}

function CorrectAnswers({ correctAnswers, attemptedQuestions, onClose }: CorrectAnswersProps) {
  return (
    <div className="font-sans roundedoutline outline-offset-2 outline-1  hover:outline-2">
      <h2>Your Correct Answers</h2>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Questions Attempted: {attemptedQuestions}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 shadow-2xl  shadow-blue-500/40"
      >
        Close
      </button>
    </div>
  );
}

export default CorrectAnswers;