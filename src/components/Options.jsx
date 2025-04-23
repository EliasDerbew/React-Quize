export default function Options({ question, dispatch, answer }) {
  return (
    <div className="flex flex-col gap-[15px]">
      {question.options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null} // Prevent clicking after selection
          className={`p-[10px] rounded-full cursor-pointer text-start pl-[2rem] transition-all duration-300
         ${
           answer === null
             ? "bg-sky-800 hover:translate-x-2 hover:shadow-lg hover:bg-sky-700"
             : index === question.correctOption
             ? "bg-green-600 text-white" // Show correct answer (even if not clicked)
             : index === answer
             ? "bg-red-600 text-white" // Show wrong answer if clicked
             : "bg-sky-800 opacity-50" // Dim other options
         }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
