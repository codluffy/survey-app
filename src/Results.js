import React from 'react';

const Results = ({ surveyResponses }) => {
  return (
    <div>
      <h1>Survey Results</h1>
      <ul>
        {surveyResponses.map((response, index) => (
          <li key={index}>
            <strong>Person {index + 1}:</strong>
            <ul>
              {response.map((answer, questionIndex) => (
                <li key={questionIndex}>
                  {`Question ${questionIndex + 1}: ${answer}`}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
