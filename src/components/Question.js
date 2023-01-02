import React, { useState } from "react";

const Question = ({ question, onAnswerSelected }) => {
  return (
    <div >
      {question.answers.map((answer, index) => (
        <label key={index} style={{ display: "flex", alignItems: "center"}}>
          <input
            type="radio"
            name="answer"
            value={answer.text}
            onClick={() => onAnswerSelected(answer.correct)}
          />
          <span >{answer.text}</span>
        </label>
      ))}
    </div>
  );
};

const QuestionModel = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const civicsQuestions = [
    {
      question: "What is the capital of the United States?",
      answers: [
        { text: "New York", correct: false },
        { text: "Washington D.C.", correct: true },
        { text: "Los Angeles", correct: false },
      ],
    },
    {
      question: "What is the supreme law of the land?",
      answers: [
        { text: "The Constitution", correct: true },
        { text: "The Bill of Rights", correct: false },
        { text: "The Declaration of Independence", correct: false },
      ],
    },
    {
      question: "What does the Constitution do?",
      answers: [
        {
          text: "Sets up the government, defines the government, protects basic rights of Americans",
          correct: true,
        },
        { text: "Define legal terms", correct: false },
        { text: "Write laws", correct: false },
      ],
    },
    {
      question: "What are the two parts of the U.S. Congress?",
      answers: [
        { text: "The Senate and the House of Representatives", correct: true },
        { text: "The Senate and the Supreme Court", correct: false },
        {
          text: "The House of Representatives and the White House",
          correct: false,
        },
      ],
    },
    {
      question: "What is the highest court in the United States?",
      answers: [
        { text: "The Supreme Court", correct: true },
        { text: "The Court of Appeals", correct: false },
        { text: "The District Court", correct: false },
      ],
    },
    {
      question:
        "What are the two major political parties in the United States?",
      answers: [
        { text: "Democratic and Republican", correct: true },
        { text: "Liberal and Conservative", correct: false },
        { text: "Green and Libertarian", correct: false },
      ],
    },
    {
      question: "When do we celebrate Independence Day?",
      answers: [
        { text: "July 4th", correct: true },
        { text: "January 1st", correct: false },
        { text: "Thanksgiving Day", correct: false },
      ],
    },
    {
      question:
        "The idea of self-government is in the first three words of the Constitution. What are these words?",
      answers: [
        { text: "We the People", correct: true },
        { text: "Citizens of the United States", correct: false },
        { text: "Fellow Americans", correct: false },
      ],
    },
    {
      question: "What is an amendment?",
      answers: [
        { text: "Lawyers", correct: false },
        { text: "A change or addition to the Constitution", correct: true },
        { text: "Fellow Americans", correct: false },
      ],
    },
    {
      question: "Who is the Chief Justice of the United States?",
      answers: [
        { text: "John Roberts", correct: true },
        { text: "Ruth Bader Ginsburg", correct: false },
        { text: "Stephen Breyer", correct: false },
      ],
    },
    {
      question: "What is the capital of your state? (Michigan)",
      answers: [
        { text: "Grand Rapids", correct: false },
        { text: "Detroit", correct: false },
        { text: "Lansing", correct: true },
      ],
    },
    {
      question:
        "Who is the current President of the United States as of December 2022?",
      answers: [
        { text: "Joe Biden", correct: true },
        { text: "Donald Trump", correct: false },
        { text: "Kamala Harris", correct: false },
      ],
    },
    {
      question: "What are the two longest rivers in the United States?",
      answers: [
        { text: "Mississippi and Missouri", correct: true },
        { text: "Colorado and Snake", correct: false },
        { text: "Missouri and Yellowstone", correct: false },
      ],
    },
    {
      question: "Who was the first President of the United States?",
      answers: [
        { text: "George Washington", correct: true },
        { text: "John Adams", correct: false },
        { text: "Thomas Jefferson", correct: false },
      ],
    },
    {
      question: "Who is the Father of our Country?",
      answers: [
        { text: "George Washington", correct: true },
        { text: "John Adams", correct: false },
        { text: "Thomas Jefferson", correct: false },
      ],
    },
    {
      question: "Where is the Statue of Liberty?",
      answers: [
        { text: "California", correct: false },
        { text: "New York Harbor or Liberty Island", correct: true },
        { text: "Texas", correct: false },
      ],
    },
    {
      question: "Name one state that borders Mexico",
      answers: [
        { text: "Texas", correct: true },
        { text: "Minnesota", correct: false },
        { text: "Florida", correct: false },
      ],
    },
    {
      question: "How many ammendments does the constitution have?",
      answers: [
        { text: "30", correct: false },
        { text: "10", correct: false },
        { text: "27", correct: true },
      ],
    },
    {
      question: "What is one right or freedom from the first ammendment?",
      answers: [
        { text: "cheat and steal", correct: false },
        { text: "theft, robbery", correct: false },
        {
          text: "speech, religion, assembly, press, petition the government",
          correct: true,
        },
      ],
    },
    {
      question: "What is the national anthem of the United States?",
      answers: [
        { text: "The Star-Spangled Banner", correct: true },
        { text: "America the Beautiful", correct: false },
        { text: "My Country, 'Tis of Thee", correct: false },
      ],
    },
    {
      question: "How many stripes are on the American flag?",
      answers: [
        { text: "13", correct: true },
        { text: "50", correct: false },
        { text: "100", correct: false },
      ],
    },
    {
      question: "Who is the Vice President of the United States?",
      answers: [
        { text: "Joe Biden", correct: false },
        { text: "Kamala Harris", correct: true },
        { text: "Donald Trump", correct: false },
      ],
    },
    {
      question: "What are the three branches of the United States government?",
      answers: [
        { text: "Legislative, executive, judicial", correct: true },
        { text: "Military, diplomatic, economic", correct: false },
        { text: "Federal, state, local", correct: false },
      ],
    },
    {
      question:
        "What do we show loyalty to when we say the Pledge of Allegiance?",
      answers: [
        { text: "The United States and the flag", correct: true },
        { text: "The President", correct: false },
        { text: "The people", correct: false },
      ],
    },
    {
      question:
        " What do we call the first ten amendments to the Constitution?",
      answers: [
        { text: "The Bill of Rights", correct: true },
        { text: "The law", correct: false },
        {
          text: "The Declaration of Independence",
          correct: false,
        },
      ],
    },
    {
      question: " What did the Declaration of Independence do?",
      answers: [
        { text: "Wrote The Bill of Rights", correct: false },
        {
          text: "Announced and declared our independence from Great Britain and declared the US is free",
          correct: true,
        },
        {
          text: "Created 50 states",
          correct: false,
        },
      ],
    },
    {
      question:
        "Which of the following are rights in the Declaration of Independence? Must know 2 in the test",
      answers: [
        { text: "Freedom of speech and religion", correct: false },
        { text: "Life, Liberty, Pursuit of Happiness", correct: true },
        { text: "Freedom of press", correct: false },
      ],
    },
    {
      question: "What is freedom of religion?",
      answers: [
        { text: "You can do anything you want", correct: false },
        { text: "You have to practice religion", correct: false },
        {
          text: "You can practice any religion or not practice a religion",
          correct: true,
        },
      ],
    },
    {
      question: "What is the economic system in the United States?",
      answers: [
        { text: "Communism", correct: false },
        { text: "Socialism", correct: false },
        { text: "Capitalist or market economy", correct: true },
      ],
    },
    {
      question: "What is the rule of law?",
      answers: [
        { text: "Leaders do not have to obey the law", correct: false },
        {
          text: "Everyone must follow the law, Leaders must obey the law, Government must obey the law, No one is above the law",
          correct: true,
        },
        {
          text: "Government does not have to obey the law, some are above the law",
          correct: false,
        },
      ],
    },
    {
      question:
        "Branches or parts of the government, must name one on the test",
      answers: [
        { text: "Military", correct: false },
        {
          text: "Congress, legislative, president, executive, the courts, judicial",
          correct: true,
        },
        { text: "There are not multiple parts", correct: false },
      ],
    },
    {
      question: "What stops one branch from becoming too powerful?",
      answers: [
        { text: "Checks and balances, separation of powers", correct: true },
        { text: "The president", correct: false },
        { text: "Lawyers", correct: false },
      ],
    },
    {
      question: "Who is in charge of the executive branch?",
      answers: [
        { text: "The judge", correct: false },
        { text: "The President", correct: true },
        { text: "Lawyers", correct: false },
      ],
    },
    {
      question: "Who makes federal laws?",
      answers: [
        { text: "Vice President", correct: false },
        {
          text: "Congress, Senate and House of Representatives, US Legislature",
          correct: true,
        },
        { text: "Lawyers", correct: false },
      ],
    },
    {
      question: "What are the two parts of the U.S. Congress?",
      answers: [
        { text: "Vice President", correct: false },
        { text: "Senate and House of Representatives", correct: true },
        { text: "Lawyers", correct: false },
      ],
    },
    {
      question: "How many U.S. Senators are there?",
      answers: [
        { text: "50", correct: false },
        { text: "100", correct: true },
        { text: "250", correct: false },
      ],
    },
    {
      question: "We elect a Senator for how many years?",
      answers: [
        { text: "6", correct: true },
        { text: "5", correct: false },
        { text: "10", correct: false },
      ],
    },
    {
      question: "Who is one of your state's U.S. Senators now?",
      answers: [
        {
          text: "List of senators can be viewed on https://senate.michigan.gov/senatorinfo_list.html website",
          correct: true,
        },
        { text: "None", correct: false },
        { text: "Unsure", correct: false },
      ],
    },
    {
      question: "House of Representatives has how many voting members?",
      answers: [
        { text: "250", correct: false },
        { text: "150", correct: false },
        { text: "435", correct: true },
      ],
    },
    {
      question: "We elect a U.S. Rperesentative for how many years?",
      answers: [
        { text: "2", correct: true },
        { text: "5", correct: false },
        { text: "4", correct: false },
      ],
    },
    {
      question: "Name your U.S. Rperesentative for the state of Michigan?",
      answers: [
        {
          text: "List of all representatives can be viewed at https://ballotpedia.org/List_of_United_States_Representatives_from_Michigan",
          correct: true,
        },
        { text: "None", correct: false },
        { text: "Unsure", correct: false },
      ],
    },
    {
      question: "What does a U.S. Senator represent?",
      answers: [
        { text: "The president", correct: false },
        { text: "Does not represent any people", correct: false },
        { text: "All people of the state", correct: true },
      ],
    },
    {
      question: "Why do some states have more Representatives?",
      answers: [
        { text: "President decides", correct: false },
        { text: "Governor decides", correct: false },
        {
          text: "Because state population or having more people",
          correct: true,
        },
      ],
    },
    {
      question: "We elect a president for how many years?",
      answers: [
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "7", correct: false },
      ],
    },
    {
      question: "What month do we vote for President?",
      answers: [
        { text: "December", correct: false },
        { text: "April", correct: false },
        { text: "November", correct: true },
      ],
    },
    {
      question: "If the President can no longer serve, who becomes president?",
      answers: [
        { text: "Speaker of the House", correct: false },
        { text: "Governor", correct: false },
        { text: "Vice President", correct: true },
      ],
    },
    {
      question:
        "If both the President and Vice President can no longer serve, who becomes president?",
      answers: [
        { text: "Speaker of the House", correct: true },
        { text: "Governor", correct: false },
        { text: "Senator", correct: false },
      ],
    },
    {
      question: "Who is the Commander in Chief of the Military?",
      answers: [
        { text: "The President", correct: true },
        { text: "Vice President", correct: false },
        { text: "Speaker of the House", correct: false },
      ],
    },
    {
      question: "Who signs bills to become laws?",
      answers: [
        { text: "The Vice President", correct: false },
        { text: "The President", correct: true },
        { text: "Speaker of the House", correct: false },
      ],
    },
    {
      question: "Who vetoes bills?",
      answers: [
        { text: "The Vice President", correct: false },
        { text: "The President", correct: true },
        { text: "Speaker of the House", correct: false },
      ],
    },
    {
      question: "What does the President's Cabinet do?",
      answers: [
        { text: "Advises the President", correct: true },
        { text: "Control governors", correct: false },
        { text: "Control the Speaker of the House", correct: false },
      ],
    },
    {
      question: "What are two Cabinet-level positions? Must know 2",
      answers: [
        { text: "President and Speaker of the House", correct: false },
        {
          text: "Secretary of Agriculture, Commerce, Defense, Education, Energy, Attorney General, Vice President",
          correct: true,
        },
        { text: "Speaker of the House and Senator", correct: false },
      ],
    },
    {
      question: "What does the judicial branch do?",
      answers: [
        {
          text: "Review and explain laws, resolve dispites, decide if law goes against Constitution",
          correct: true,
        },
        {
          text: "Decide Vice President",
          correct: false,
        },
        { text: "Elect President", correct: false },
      ],
    },
    {
      question: "How many justices are currently on the Supreme Court?",
      answers: [
        { text: "4", correct: false },
        { text: "9", correct: true },
        { text: "50", correct: false },
      ],
    },
    {
      question:
        "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
      answers: [
        {
          text: "Print money, declare war, create army, make treaties",
          correct: true,
        },
        { text: "Providing public education", correct: false },
        { text: "Decide a president", correct: false },
      ],
    },
    {
      question:
        "Under our Constitution, some powers belong to the states. What is one power of the states?",
      answers: [
        {
          text: "Provide schooling, education, protection, safety, approve zoning and land use, and give driver's licenses",
          correct: true,
        },
        { text: "Declare war and create armies", correct: false },
        { text: "Print money and make treaties", correct: false },
      ],
    },
    {
      question: "Who is the current Governor of Michigan?",
      answers: [
        { text: "Kamala Harris", correct: false },
        { text: "Gretchen Whitmer", correct: true },
        { text: "Tudor Dixon", correct: false },
      ],
    },
    {
      question: "What are the two major political parties in the US?",
      answers: [
        { text: "Capitalist and Communist", correct: false },
        { text: "Democratic and Republican", correct: true },
        { text: "There are no political parties in the US", correct: false },
      ],
    },
    {
      question: "Who is the current Speaker of The House of Representatives?",
      answers: [
        { text: "Kamala Harris", correct: false },
        { text: "Nancy Pelosi", correct: true },
        { text: "Hillary Clinton", correct: false },
      ],
    },
  ];

  const handleAnswerSelected = (answer) => {
    setSelectedAnswer(answer);
  };


  return (
    <div className="civicsquizquestions">
      {showResult ? (
        <div>
          {selectedAnswer === true ? (
            <label className="right">Correct!</label>
            
          ) : (
            <label className="wrong">Sorry, try again!</label>
          )}
          <br/>
          {currentQuestionIndex < civicsQuestions.length - 1 && selectedAnswer === true ? (
            <button
            className="button-legal-quiz"
              onClick={() => {
                setShowResult(false);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
               
                setSelectedAnswer(null);
            
              }}
            >
              Next
            </button>
          ) : (
            <button
            className="button-legal-quiz"
              onClick={() => {
                setShowResult(false);
                setCurrentQuestionIndex(currentQuestionIndex);
                setSelectedAnswer(null);
              }}
            >
              Retry
            </button>
          )}
        </div>
      ) : (
        <div>
          <h3>{civicsQuestions[currentQuestionIndex].question}</h3>
          <Question
            question={civicsQuestions[currentQuestionIndex]}
            onAnswerSelected={handleAnswerSelected}
          />
          <div className="clearBoth">
          <button className="button-legal-quiz" onClick={() => setShowResult(true)}>Check answer</button>
          <button className="button-legal-quiz" onClick={()=> setCurrentQuestionIndex(0)}>Restart</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default QuestionModel;

