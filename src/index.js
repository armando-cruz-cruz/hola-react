import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = (props) => {
  const now = new Date
  return (
    <div>
      <p>Hellow {props.name}, it is {now.toString()}</p>
    </div>
  )
}

const App = () => {
  const a = 10
  const b = 20
  console.log('Hi from console')
  return (
    <div>
      <Hello name='Ana' />
      <Hello name='Pedro'/>
      <p>
        {a} + {b} = {a+b}
      </p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

