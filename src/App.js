import User from './User';

import Counter from './Counter';
import Counter1 from './Counter1';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

import './App.css';

function App() {
  return (
    <div className="App">
      <User render={(isLoggedIn) => { return isLoggedIn ? "Authenticated user" : "Guest user" }} />
      {/* 
        In react we can pass a function to the child component to control what actually will be rendered in the chicld's render
      */}
      <br />
      <br />
      <hr />
      {/* Now let's see how we can share the same code to different components
        Suppose we need two components - 
        First component having a button which can increment it's own 'count' state on clicking the button
        Second component, which can increment it's own counter on hovering over a heading inside it

        As the counter and incrementCount logic is going to be same in both the components,
        So, We can share the 'counter' state and the incrementCount logic to these two components using render props
      */}

      {/* The first component - ClickCounter */}
      <Counter render={(count, incrementCount) => {
        return <ClickCounter count={count} incrementCounter={incrementCount} />
      }
      } />

      <br />
      <br />
      <hr />
      {/* The second component - HoverCounter */}
      <Counter render={(count, incrementCount) => {
        return <HoverCounter count={count} incrementCounter={incrementCount} />
      }
      } />
      

      <br />
      <br />
      <hr />
      
      {/* Note: We can pass any name prop in place of 'render' - 'render' is just a convention name
        e.g. below we have passed  it as a children prop      
      */}
      <Counter1>
      {
        (count, incrementCount) => {
          return <HoverCounter count={count} incrementCounter={incrementCount} />
        }
      }
      </Counter1>
    </div>
  );
}

export default App;
