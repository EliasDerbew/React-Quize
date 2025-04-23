export default function Nextbutton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="bg-blue-300 text-black pl-[2rem] pr-[2rem] rounded-lg pt-[5px] pb-[5px] font-googleapis hover:bg-blue-700 hover:text-white cursor-pointer m-[20px]"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="bg-blue-300 text-black pl-[2rem] pr-[2rem] rounded-lg pt-[5px] pb-[5px] font-googleapis hover:bg-blue-700 hover:text-white cursor-pointer m-[20px]"
        onClick={() => dispatch({ type: "finish" })}
      >
        Next
      </button>
    );
}
