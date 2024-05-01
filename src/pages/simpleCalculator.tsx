import React, { useReducer,Reducer } from "react";


const simpleCalculator = ()=>{

interface stateModel {
  _num: number;
}

interface actionModel  { 
  type: "increment"  |   "decrement"  |  "reset" ;
};



const profileReducer = (state: stateModel, action: actionModel) => {
  switch (action.type) {
    case "increment":
      return { _num: state._num + 1 };
    case "decrement":
      return { _num: state._num - 1 };
    case "reset":
      return { _num: 0 };
    default:
      return state;
  }
};


  
  const[profile,profileDispatch] = useReducer<Reducer<stateModel,actionModel>>(profileReducer,{
    _num: 0
   })

   return (
   <div className="calculatorContainer">
      <h1>CountValue: {profile._num}</h1>
      <button onClick={() => profileDispatch({ type: "increment" })}>
        Increase
      </button>
      <button onClick={() => profileDispatch({ type: "decrement" })}>
        Decrease
      </button>
      <button onClick={() => profileDispatch({ type: "reset" })}>Reset</button>
    </div>
      )
}

export default simpleCalculator;
