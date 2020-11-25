import React from 'react';
import './App.css';
import Greetings from './components/greetings/greetings';
import IdCard from './components/idcard/IdCard';
import Random from './components/random/random';
import BoxColor from './components/BoxColor/BoxColor'

export default function App() {
  return (
    <div className="App">
    <div>
        <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <Greetings greeting = 'de'></Greetings>
        <Greetings greeting = 'en'></Greetings>
        <Greetings greeting = 'es'></Greetings>
        <Greetings greeting = 'fr'></Greetings>
        <Greetings greeting = 'aus'></Greetings>
      </div>
      <div>
        <Random min={1} max={50}/>
        <Random min={1} max={10}/>
      </div>
      <div>
        <BoxColor r={140} g={75} b={275} />
        <BoxColor r={128} g={255} b={137} />
      </div>
    </div>

  );
}
