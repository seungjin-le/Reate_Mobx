import React, { useContext } from 'react';
import PersonContext from './contexts/PersonContext';
import { observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { computed } from 'mobx';

function App() {
  const personStore = useContext(PersonContext);
  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10;
  }).get();
  const click = () => {
    personStore.age = 40;
    personStore.name = 'LeeSeung';
  };
  console.log('render');
  return (
    <div className="App">
      <div>
        <button onClick={click}>click</button>
      </div>
      <p>
        {personStore.age}, {personStore.name}
      </p>
    </div>
  );
}

//@observer
// class App extends React.Component {
//   //const personStore = useContext( PersonContext );
//   static contextType = PersonContext;
//   render() {
//     const personStore = this.context;
//     console.log(personStore.age);
//     return (
//       <div className="App">
//         <div>
//           <button onClick={this.click}>click</button>
//         </div>
//         <p>{personStore.age10}</p>
//       </div>
//     );
//   }
//
//   @autobind
//   click() {
//     const personStore = this.context;
//     personStore.plus();
//   }
// }

export default observer(App);
