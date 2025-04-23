export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="">
      <progress
        className="w-full h-2 [&::-webkit-progress-bar]:bg-gray-200 
         [&::-webkit-progress-value]:bg-blue-500 
         [&::-moz-progress-bar]:bg-blue-500 rounded overflow-hidden"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />

      <div className="flex justify-between ml-[10px] mr-[10px]">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}
