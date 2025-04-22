export default function Ready({ numQuestions, dispatch }) {
  return (
    <div className="text-center flex flex-col gap-[0.5rem] mt-[2rem] font-googleapis">
      <h1 className="font-bold text-[2rem]">Welcome to The React Quize!</h1>
      <p>{numQuestions} questions to test your React mastery</p>
      <button
        className="border-2 rounded-lg p-[5px] text-[1.2rem] cursor-pointer bg-blue-400 border-blue-500 hover:bg-sky-700 active:bg-sky-900"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
