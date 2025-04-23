export default function Nextbutton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <div>
      <button
        className="bg-blue-300 text-black pl-[2rem] pr-[2rem] rounded-lg pt-[5px] pb-[5px] font-googleapis hover:bg-blue-700 hover:text-white cursor-pointer m-[20px]"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    </div>
  );
}
