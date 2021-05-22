import './App.css';
import FirstRow from './components/FirstRow';
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThirdRow";
import FourthRow from "./components/FourthRow";
import FifthRow from "./components/FifthRow";
import { getRandomList } from './components/utils'
import React, { useState, useEffect } from 'react';

function App() {
  const [typedContent, settypedContent] = useState('');
  const [capsLock, setcapsLock] = useState(false);
  const [shift, setshift] = useState(false);
  const [charRandomList, setcharRandomList] = useState([]);
  const handleChangeRandom = () => {
    setcharRandomList(getRandomList())
  }
  const handleChangeCaps =()=>{
    setcapsLock(!capsLock);
  }
  const handleChangeShift = ()=> {
    setshift(!shift);
  }
  useEffect(() => {
    setcharRandomList(getRandomList());
  }, [])
  return (
    <div className="App">
      <h1>My Virtual Keyboard</h1>
      <div className="displayArea">{typedContent}</div>
      <div className="keyboardContainer">
        <FirstRow
          settypedContent={settypedContent}
          capsLock={capsLock}
          shift={shift}
          charRandomList={charRandomList}
          handleChangeRandom={handleChangeRandom}
        ></FirstRow>
        <SecondRow
          settypedContent={settypedContent}
          capsLock={capsLock}
          shift={shift}
          charRandomList={charRandomList}
          handleChangeRandom={handleChangeRandom}
        ></SecondRow>
        <ThirdRow
          settypedContent={settypedContent}
          capsLock={capsLock}
          shift={shift}
          handleChangeCaps={handleChangeCaps}
          charRandomList={charRandomList}
          handleChangeRandom={handleChangeRandom}
        ></ThirdRow>
        <FourthRow
          settypedContent={settypedContent}
          capsLock={capsLock}
          shift={shift}
          handleChangeShift={handleChangeShift}
          charRandomList={charRandomList}
          handleChangeRandom={handleChangeRandom}
        ></FourthRow>
        <FifthRow
          settypedContent={settypedContent}
          capsLock={capsLock}
        ></FifthRow>
      </div>
    </div>
  );
}

export default App;
