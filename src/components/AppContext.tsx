import {createContext , useState ,ReactNode} from 'react'
interface IncrementContext {
  stateVal: number;
  setStateVal: (param: number ) => void;
}

export const IncrementContext = createContext<IncrementContext>({

  stateVal: 0,
  setStateVal: (param: number) => {}
});
 const AppContextComponent:React.FC<{ children : ReactNode  }> = ({ children  })  =>{
  //useReducer use kore korte hobe          
  const [stateVal,setStateVal]  = useState<number>(0);
  return <IncrementContext.Provider value={{stateVal, setStateVal}}>

    {children}
  </IncrementContext.Provider>;

};

export default AppContextComponent;