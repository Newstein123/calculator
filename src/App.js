import { useReducer} from "react"
import Buttons from "./components/Buttons"
import Input from "./components/Input"
import Output from "./components/Output"

const App = () => {

  const initialState = {
    input : 0,
    output : 0,
  }

  const reducer = (state, {type, payload}) => {
    switch (type) {
      case 'C': return {
        ...state, 
       input : 0,
       output : 0
      }
               
      case 'AC': return state.input.length === 1 ?  {
        ...state,
        input : 0}:  {
          ...state, 
         input : state.input.slice(0, state.input.length-1)
        }

      case '=' : try {
        return {
          ...state, 
          input : 0,
          output : eval(state.input),
        }
      } catch (error) {
       return {
        ...state, 
        output : error.message
       }
      }

      default: return state.input === 0 ? {
        ...state,
          input : payload
      } : {
        ...state,
        input : state.input + payload
      }
        
    }
  }

  const [state, dispatch]= useReducer(reducer, initialState)

  const calculate = (type,value) => {
    dispatch({type, payload : value})
  }
  return (
    <> 
       <div className="w-full h-screen bg-gray-700 flex flex-col items-center justify-center"> 
        <div className="md:w-1/3 mx-auto"> 
        <Output output={state.output} />
       <Input  input={state.input} />
       <Buttons calculate={calculate} /> 
        </div>
       </div>
    </>
  )
}

export default App
