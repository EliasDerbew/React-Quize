import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="bg-gray-700 p-[10px] rounded-lg border-2 border-white mt-[10px] w-[4rem]">
     {mins < 10 && "0"}{mins}:{seconds < 10 && "0"}{seconds}
    </div>
  );
}
