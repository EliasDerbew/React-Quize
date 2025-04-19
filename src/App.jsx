import { useReducer, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initialState = {
  questions: [],

  // 'loading, error, ready, active, finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "Error",
      };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      const fetchingQuestions = async function () {
        try {
          const response = await fetch("http://localhost:5000/questions");

          if (!response.ok) {
            throw new Error(`Fetching Error: ${response.status}`);
          }
          const data = await response.json();
          dispatch({ type: "dataReceived", payload: data });
          console.log(data);
        } catch (err) {
          dispatch({type: "dataFailed"});
        }
      };
      fetchingQuestions();
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Main>
        <p>Questions</p>
        <p>1/15</p>
  
      </Main>
    </div>
  );
}
