import {useContext} from "react"
import {IncrementContext} from "./AppContextWithReducer"

const Footer = () =>{
console.log("footer component");


// let {setStateVal, stateVal} = useContext(IncrementContext);
let {counter, setCounter} = useContext(IncrementContext);

return (


  // <footer>
  //   <button
  //   onClick={() => {
  //     setStateVal(stateVal + 1);
  //   }

  //   }
    
  //   >
  //     Increment
  //   </button>
  // </footer>
  <footer>
   

    <div className="counterDiv">

    <button
    onClick={() => {
      setCounter({
        type: "decrement",
        value:counter._count
      })
    }

    }
    
    >
      decrement
    </button>

    <button
    onClick={() => {
      setCounter({
        type: "increment",
        value:counter._count
      })
    }

    }
    
    >
      Increment
    </button>

    <button
    onClick={() => {
      setCounter({
        type: "reset",
        value:counter._count
      })
    }

    }
    
    >
      reset
    </button>
    </div>
  </footer>
);

}
export default Footer;