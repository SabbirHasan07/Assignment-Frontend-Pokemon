import { create } from "zustand";

type Store ={
    login : string;
    name : string;
    updateLogin:(value: string)=> void;
    updateUsername : (value: string) =>void;
    previousUsername:()=> void;
};

const useLogin = create<Store>((set)=>({
    login : "Login",
    name : "",
    updateLogin:(value: string)=> set((state)=>({login:value})),
    updateUsername : (value: string) =>set((state)=>({name:value})),
    previousUsername: ()=> set((name)=>({name:"Codecamp"})),
}))
export default useLogin;