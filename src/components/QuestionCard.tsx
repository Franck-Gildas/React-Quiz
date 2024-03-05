interface Props {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}: Props) => {
  return (
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers &&
          Array.isArray(answers) &&
          answers.map((answer) => (
            <div key={answer}>
              <button disabled={userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuestionCard;
