export default function Finish({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div className="flex flex-col items-center gap-[10px]  font-googleapis">
      <p className="bg-sky-700 p-[10px] pl-[40px] pr-[40px] mt-[20px] rounded-lg">
        you scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>

      <p>(Highscore: {highscore} points)</p>

      <button
        className="bg-gray-400 text-black p-[10px] rounded-lg hover:bg-gray-700 cursor-pointer border-2 border-white hover:text-white"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quize
      </button>
    </div>
  );
}
