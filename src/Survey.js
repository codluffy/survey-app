import React, { useState, useRef } from 'react';
import Results from './Results';

const questions = [
  'What is your favorite color?',
  'What is your favorite animal?',
  'Where do you live?',
  'What is your age?',
  'What is your gender?',
];

const Survey = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [surveyResponses, setSurveyResponses] = useState([]);
  const [viewResults, setViewResults] = useState(false);
  const inputRefs = useRef([]); // To store references to input elements

  const selectRandomQuestions = () => {
    const randomQuestions = [];
    while (randomQuestions.length < 5) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      if (!randomQuestions.includes(randomIndex)) {
        randomQuestions.push(randomIndex);
      }
    }
    setSelectedQuestions(randomQuestions);
  };

  const clearSurvey = () => {
    inputRefs.current.forEach((inputRef) => {
      inputRef.value = ''; // Clear input values
    });
  };

  const submitSurvey = (responses) => {
    setSurveyResponses([...surveyResponses, responses]);
    clearSurvey();
  };

  const toggleViewResults = () => {
    setViewResults(!viewResults);
  };

  return (
    <div>
      <h1>Survey Questions</h1>
      {!viewResults && (
        <div>
          <button onClick={selectRandomQuestions}>Select Random Questions</button>
          <ul>
            {selectedQuestions.map((index) => (
              <li key={index}>
                {questions[index]}
                <input type="text" placeholder="Your Answer" ref={(el) => (inputRefs.current[index] = el)} />
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              const answers = selectedQuestions.map((index) => inputRefs.current[index].value);
              submitSurvey(answers);
            }}
          >
            Submit
          </button>
        </div>
      )}

      <button onClick={toggleViewResults}>
        {viewResults ? 'Hide Results' : 'View Results'}
      </button>

      {viewResults && <Results surveyResponses={surveyResponses} />}
    </div>
  );
};

export default Survey;
