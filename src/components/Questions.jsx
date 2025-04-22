import Options from "./Options";

export default function Questions({ question }) {
  return (
    <div className="flex flex-col gap-[20px] mt-[40px] font-googleapis">

      <h2 className="text-[25px]">{question.question}</h2>

      <div className="flex flex-col gap-[10px] text-[20px]">

        <Options question={question} />
        
      </div>
    </div>
  );
}
