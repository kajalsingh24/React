
import { useReducer, useState } from 'react'
import './App.css';
function App() {

  const myReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "Delete":
        return state.filter((d, index) => {
          return index != action.payload;
        });
      case "Save":
       return state.map((d, myundex) => {
          if (myundex == action.index) {
            return action.payload;
          }
          else {
            return d;
          }

        });
      default:
        return state;
    }
  }
  const myChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }
  const mySave = (e) => {
    if (index >= 0) {
      setData({ type: "Save", payload: input, index: index});
      setIndex(-1);
    }
    else {
      setData({ type: "ADD", payload: input });
    }
  }
  const [data, setData] = useReducer(myReducer, []);
  const [input, setInput] = useState({
    firstname:"",
    lastname:"",
    categrie:""
  })  
  const [index, setIndex] = useState(-1);
  const myDelete = (index) => {
    setData({ type: "Delete", payload: index, });
  }
  const edit = (index) => {
    setInput(data[index]);
    setIndex(index);
  }
  return (
    <div>
      <input type="text" name='firstname' value={input.firstname} onChange={myChange}  placeholder="firstname"/>
      <input type="text" name='lastname' value={input.lastname} onChange={myChange} placeholder="lastname" />
      <select name='categrie' onChange={myChange} value={input.categrie}>
        <option value="abcd">ABCD</option>
        <option value="abcd">ABCD</option>
        <option>ABCD</option>
        <option>ABCD</option>
      </select>
      <button onClick={mySave}>Save</button>
      {
        data.map((element, index) => {
          return (<div>{element.firstname}{" "}{element.lastname}{" "}{element.categrie}
            <button onClick={() => { myDelete(index)}}>Delete</button>

            <button onClick={() => {
              edit(index)
            }}>Edit</button>
          </div>)
        })
      }
    </div>
  )
}
export default App;
