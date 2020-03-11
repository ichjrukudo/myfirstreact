import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

function App() {
   // Declare a new state variable, which we'll call "count"
   const [count, setCount] = useState(0);
   const [count1, setCount1] = useState(0);
   const [data, setData] = useState();

   var updateState = (e) => {
      setData(e.target.value);
   }

   useEffect(() => {
      if (count % 2 == 0) setCount1(count1 + 2);
   }, [count]);

   useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count1} times`;
   }, [count1]);

   return (
      <div style={{ padding: 100 }}>
         <p>You clicked {count} times</p>
         <button style={{ color: "red" }} onClick={() => {
            setCount(count + 1);
         }}>
            Click me
         </button>
         <input type="text" value={data}
            onChange={(e) => setData(e.target.value)} />
         <hr />
         <Content myDataProp={data} updateStateProp={updateState}></Content>
         <hr />
         <Counter initialCount={1}></Counter>
      </div>
   );
}

// class App extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//          data: 'abc',
//          count: 0
//       }
//       this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
//    };
//    findDomNodeHandler() {
//       var myDiv = document.getElementById('myDiv');
//       ReactDOM.findDOMNode(myDiv).style.color = 'green';
//    }
//    updateState1 = (e) => {
//       this.setState({ data: e.target.value })
//    }
//    // btnClick = () => {
//    //    var text = this.refs.myInput.value;
//    //    alert(text);
//    //    console.log(this.state.data);
//    // }
//    // btnClear = () => {
//    //    this.setState({ data: '' });
//    //    ReactDOM.findDOMNode(this.refs.myInput1).focus();
//    // }
//    render() {
//       return (
//          <div>
//             <p>You clicked {this.state.count} times</p>
//             <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                Click me
//           </button>
//          </div>
//       );
//    }

//    // render() {
//    //    return (
//    //       <div className="App">
//    //          <input value = {this.state.data} onChange = {this.updateState1} ref = "myInput1"></input>
//    //          <button onClick={this.btnClear}>clear</button>
//    //          <hr/>
//    //          <input ref="myInput" type="text"/>
//    //          <button onClick={this.btnClick}>click</button>
//    //          <hr/>
//    //          <Content myDataProp={this.state.data} updateStateProp={this.updateState1}></Content>
//    //       </div>
//    //    );
//    // }
// }

// class Content extends React.Component {
//    btnClick = () => {
//       alert(this.props.myDataProp);
//    }
//    render() {
//       return (
//          <div>
//             <input type="text" value={this.props.myDataProp}
//                onChange={this.props.updateStateProp} />
//             <hr></hr>
//             <button onClick={this.btnClick}>click</button>
//             <h3>{this.props.myDataProp}</h3>
//          </div>
//       );
//    }
// }
function Content(props) {
   var btnClick = () => {
      alert(props.myDataProp);
   }
   return (
      <div>
         <input type="text" value={props.myDataProp}
            onChange={props.updateStateProp} />
         <hr />
         <button onClick={btnClick}>click</button>
         <h3>{props.myDataProp}</h3>
      </div>
   );
}
const initialState = {count: 0};
function reducer(state, action) {
   debugger;
   switch (action.type) {
      case 'increment':
         return { count: state.count + 1 };
      case 'decrement':
         return { count: state.count - 1 };
      default:
         throw new Error();
   }
}
function Counter() {
   // const [count, setCount] = useState(initialCount);
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <>
         Count: {state.count}
         {/* <button onClick={() => setCount(initialCount)}>Reset</button>
         <button onClick={() => setCount(count - 1)}>-</button>
         <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
         <button onClick={() => dispatch({type: 'decrement'})}>-</button>
         <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
   );
}
export default App;