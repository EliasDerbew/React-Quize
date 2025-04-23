import Options from "./Options";

export default function Questions({ question, dispatch, answer }) {
  return (
    <div className="flex flex-col gap-[20px] mt-[40px] font-googleapis w-[32rem] text-center">
      <h2 className="text-[25px]">{question.question}</h2>

      <div className="flex flex-col gap-[10px] text-[20px]">
        <Options question={question} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
}
