import { FormEvent } from "react";
import React, { useState } from "react";
const ControlledForm = ()=>{
  const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [password, setPassword] = useState("");
  const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    
     console.log(name, age, password);
    
  }
  return <div className="flex justify-center">
     
    
       <form className="p-5" onSubmit={submitHandler}>
       <div className="mb-3">
        <label>Name</label>
       <input name="name" onKeyUp={(e)=>{
        setName(e.currentTarget.value)
       }}/>
        </div>
      
        <div className="mb-3">
        <label>age</label>
       <input name="age" type="number" onKeyUp={(e)=>{
        setAge(+e.currentTarget.value)
       }}/>
        </div>
        <div className="mb-3">
        <label>Password</label>
       <input name="pasword" type="password" onKeyUp={(e)=>{
        setPassword(e.currentTarget.value)
       }}/>
        </div>
        <button type="submit">submit</button>
       </form>
        
    
  </div>

}
export default ControlledForm;