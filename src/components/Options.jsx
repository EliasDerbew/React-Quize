export default function Options({ question }) {
  return (
    <div className="flex flex-col gap-[15px]">
      {question.options.map((option) => (
        <button
          className="bg-sky-800 w-full p-[10px] rounded-full cursor-pointer transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:bg-blue-100 hover:bg-sky-700 text-start pl-[2rem] "
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
