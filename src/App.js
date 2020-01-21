import React from 'react';
import Spurs from './images/logo.png';
// import Liverpool from './liverpool.jpg';
// import Watford from './watford.jpg';
// import Welcome from './tutorial/1render';
import Son from './images/son.png';
import Dele from './images/dele.png';
import Harry from './images/harry.png';
import { Player, Match } from './tutorial/2props';
import { Goals, Pos } from './tutorial/3conditional';
import { Clubs, ClubResult, ThePlayer } from './tutorial/4loops';
import './App.css';

function App() {
  let dates = ['14/01', '18/01', '22/01', '25/01']
  let [middlesbrough, watford, norwich, southampton] = dates
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
          <div className='container'>
            <h1>Squad</h1>
            <div className='squad'>
            <Player name='Son' image={Son} position='Forward' budweiserGoal={true} goals='5' appearances='17'/>
            <Player name='Dele' image={Dele} position='Midfield' budweiserGoal={false} goals='6' appearances='15' />
            <Player name='Harry' image={Harry} position='Forward' budweiserGoal={false} goals='11' appearances='20' />
            </div>
          </div>
          
        </div>
        <div className='matches container'>
            <Match match='home' versus={'Middlesbrough'} date={middlesbrough} time='20:00' />
            <Match match='away' versus={'Watford'} date={watford} time='12:30' />
            <Match match='home' versus={'Norwich City'} date={norwich} time='19:30' />
            <Match match='away' versus={'Southampton'} date={southampton} time='15:00' />
        </div>
        <div className='table'>
          <h1>Season Table</h1>
          <Clubs />
          <ClubResult />
          <ThePlayer />
          <br/>
          <br/>
          {/* <ResultReverse /> */}
        </div>
      </body>
    </div>
  );
}


export default App;