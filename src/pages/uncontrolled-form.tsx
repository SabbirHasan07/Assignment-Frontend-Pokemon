import { FormEvent } from "react";
import React, { useState,useRef } from "react";


const uncontrolledForm = ()=>{
  const name = useRef<HTMLInputElement |null>(null);

    const age = useRef<HTMLInputElement |null>(null);
    
    const password = useRef<HTMLInputElement |null>(null);
  const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    
     console.log(name.current?.value, age.current?.value, password.current?.value);
    
  }
  return <div className="flex justify-center">
     
    
       <form className="p-5" onSubmit={submitHandler}>
       <div className="mb-3">
        <label>Name</label>
       <input name="name" ref={name} type="text"/>
        </div>
      
        <div className="mb-3">
        <label>age</label>
       <input name="age" type="text" ref={age}/>
        </div>
        <div className="mb-3">
        <label>Password</label>
       <input name="password" type="text" ref={password}/>
        </div>
        <button >submit</button>
       </form>
        
    
  </div>

}
export default uncontrolledForm;