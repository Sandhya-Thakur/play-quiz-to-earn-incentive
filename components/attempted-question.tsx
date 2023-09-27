import React from 'react';

interface AttemptedQuestionsProps {
  attemptedQuestions: number;
  onClose: () => void;
}

function AttemptedQuestions({ attemptedQuestions, onClose }: AttemptedQuestionsProps) {
  return (
    <div className="font-sans rounded outline outline-offset-2 outline-1  hover:outline-2">
      <h2>Total Attempted Questions</h2>
      <p>Total Questions Attempted: {attemptedQuestions}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 shadow-2xl  shadow-blue-500/40"
      >
        Close
      </button>
    </div>
  );
}

export default AttemptedQuestions;