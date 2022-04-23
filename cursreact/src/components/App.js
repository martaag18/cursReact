import './App.css';
import Header from './Header.js';
import FunctionalComponent from './FunctionalComponent.js';
import ClassComponent from './ClassComponent.js';
import FunctionalComponent1 from './FunctionalComponent1.js';
import {useState} from 'react';

function App() {

  const propFunc1 = "variable";
  const propsFuncObject = {
    nom: "Pere",
    edat: 23
  }

  //Const per fer un exemple de rebre dades de Fill a Pare
  const [data, setData] = useState("");

  const childToParent = (dataFromChild) => {
    console.log("child to parent", dataFromChild);
    setData(dataFromChild);
  }

  return (
    <>
    <div className='bg-primary card'>
      <Header/>
      </div>
      <div>
        <FunctionalComponent
        propsFunctional1 = { propFunc1 }
        propsFunctional2String = "cadenaDeTexte1"
        propsFunctionalNumber = { 3 }
        propsFunctionalObject = {propsFuncObject}
        />
      </div>
      <div>
        <ClassComponent
        propsFunctional1 = { propFunc1 }
        propsFunctional2String = "cadenaDeTexte1"
        propsFunctionalNumber = { 3 }
        propsFunctionalObject = {propsFuncObject}
        />
      </div>
      <div>
          {data}
          <FunctionalComponent1 childToParent = { childToParent }
          />
      </div>
    </>
  );
}

export default App;
