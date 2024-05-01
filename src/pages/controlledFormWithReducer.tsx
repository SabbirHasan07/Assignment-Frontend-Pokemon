
import React, { FormEvent,useReducer,Reducer } from "react";
const ControlledFormWithReducer = ()=>{

  interface stateModel{
    _name: string;
    _age: number;
    _password: string;
  }

  interface actionModel{
    type: "update-name" | "update-age" | "update-password";
    value: string | number;
  }

 const profileReducer = (state:stateModel, action: actionModel) =>{
  switch(action.type){
    case "update-name":
      return {...state, _name: action.value as string};
    case "update-age":
      return {
        ...state, _age: action.value as number
      };
    case "update-password":
      return {
        ...state, _password: action.value as string 
      };
    default:
      return state;
  };

 



 }

 const[profile,profileDispatch] = useReducer<Reducer<stateModel,actionModel>>(profileReducer,{
  _name: "",
  _age: 0,
  _password: "",
 })
 const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
  
   console.log( profile._age,profile._name, profile._password);
  
};
    


  return (<div className="flex justify-center">
     
    
       <form className="p-5" onSubmit={submitHandler}>
       <div className="mb-3">
        <label>Name</label>
       <input name="name" onKeyUp={(e)=>{
        profileDispatch({type: "update-name", value: e.currentTarget.value});
       }}/>
        </div>
      
        <div className="mb-3">
        <label>age</label>
       <input name="age" type="number" onKeyUp={(e)=>{
        profileDispatch({type: "update-age", value: +e.currentTarget.value});
       }}/>
        </div>
        <div className="mb-3">
        <label>Password</label>
       <input name="password" type="password" onKeyUp={(e)=>{
        profileDispatch({type: "update-password", value: e.currentTarget.value});
       }}/>
        </div>
        <button type="submit">submit</button>
       </form>
        
    
  </div>)

}
export default ControlledFormWithReducer;