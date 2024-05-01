/*
export const  Header  = () => {
    return (
    
        <div className="w-100 bg-[#0a99af] text-center py-10">
          <h1 className="text-4xl title">Mini Book Project</h1>
          <span className="pcss">Hello World of Next and React Project </span>
        </div>
      
    );

};*/



import {useContext} from 'react'
import {IncrementContext} from './AppContextWithReducer'

const Header = () =>{
    console.log("header component");

    // let {stateVal, setStateVal} = useContext(IncrementContext);
    let {counter} = useContext(IncrementContext);
    return (
      <header>
         <div>
          <p>state variable {counter._count}</p>
         </div>
      </header>

    );
};
export default Header;
