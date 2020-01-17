import React from 'react';
import Spurs from './images/logo.png';
// import Liverpool from './liverpool.jpg';
// import Watford from './watford.jpg';
// import Sonny from './images/son.png';
// import Dele from './images/dele.png';
// import Harry from './images/harry.png';
// import Welcome from './tutorial/1render';
// import {  } from './tutorial/2props';
import { HomeOrAway, Goals, Appearances, Pos, GoodPlayer } from './tutorial/3conditional';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img className='logo' src={Spurs} alt='logo' />
        <h1 className='theTeam'>Tottenham Hotspurs</h1>
      </header>
      <body>
        <div>
          <div className='seasons container'>
            <h3>Season Results</h3>
            <div className='season'>
              <h4>-16/17, Goals : 23</h4>
              <Goals goal='23' /><br/>
              <Pos rank='2' />
            </div>
            <div className='season'>
              <h4>-17/18, Goals : 23</h4>
              <Goals goal='23' /><br/>
              <Pos rank='3' />
              </div>
            <div className='season'>
              <h4>-18/19, Goals : 26</h4>
              <Goals goal='26' /><br/>
              <Pos rank='4' />
            </div>
            <div className='season'>
              <h4>-19/20, Goals : 8</h4>
              <Goals goal='8' /><br/>
              <Pos rank='7' />
            </div>
          </div>
          <div className='squad container'>
            <h1>Squad</h1>
            <GoodPlayer budweiserGoal={true} goal='5' /> <br/>
            <Appearances appearances='16' />
          </div>
          
        </div>
        <div className='matches container'>
          <div className='match'>

            <HomeOrAway match='home'/>
            <HomeOrAway match='away'/>
          </div>
        </div>
      </body>
    </div>
  );
}


export default App;