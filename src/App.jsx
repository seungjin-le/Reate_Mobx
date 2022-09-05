import React from 'react';
import PersonContext from './contexts/PersonContext';
import { observer } from 'mobx-react';
import autobind from 'autobind-decorator';

//function App() {
//   const personStore = useContext(PersonContext);
//   console.log(personStore.age);
//   const click = () => {
//     personStore.plus();
//     console.log(personStore.age);
//   };
//   return (
//     <div className="App">
//       <div>
//         <button onClick={click}>click</button>
//       </div>
//       <p>{personStore.age}</p>
//     </div>
//   );
// }

@observer
class App extends React.Component {
  //const personStore = useContext( PersonContext );
  static contextType = PersonContext;
  render() {
    const personStore = this.context;
    return (
      <div className="App">
        <div>
          <button onClick={this.click}>click</button>
        </div>
        <p>{personStore.age}</p>
      </div>
    );
  }

  @autobind
  click() {
    const personStore = this.context;
    personStore.plus();
    console.log(personStore.age);
  }
}
export default App;
