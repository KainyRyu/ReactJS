import React from 'react';
// import Spurs from './spurs.jpg';
// import Liverpool from './liverpool.jpg';
// import Watford from './watford.jpg';
// import Sonny from './sonny.jpg';
// import Dele from './dele.jpg';
// import Harry from './harry.jpg';
import './App.css';

function App() {
  let results = ['4th', '3rd','2nd'];
  let wins = [23, 23, 26];
  return (
    <div className="App">
      <div className='matches'>
      <DirectAttribute team='Liverpool' date='Saturday 11 January' time ='17:30'/>
      <DirectAttribute team='Watford' date='Saturday 18 January' time ='12:30'/>
      </div>
      <div className='players'>
      <AddAttribute title='Sonny' position='Forward' score='5'  />
      <AddAttribute title='Dele' position='Midfield' score='6'  />
      <AddAttribute title='Harry' position='Forward' score='11' />
      </div>
      <Tottenham results={results} wins={wins} />
    </div>
  );
}

function AddAttribute(props) {
  return (
    <div className='player'>
      <h1>{props.title}</h1>
      <h3>Position : {props.position}</h3>
      <div>
        <div>Season Goals : {props.score}</div>
      </div>

    </div>
  );
}

function DirectAttribute({team, date, time}) {
  return(
    <div className='match'>
      <h1>Tottenham Hotspur vs {team}</h1>
      <h2>{date}</h2>
      <h5>{time}</h5>
    </div>
  )
}

function Tottenham ({results, wins}){

  let [fourth,third, second] = results;
  let totalWins = 0
  for (let i = 0; i < wins.length; i++) {
    totalWins += wins[i];
  }
  return (
    <div className='results'>
      <h4>2018/19 result : {fourth}, Wins : {wins[0]} </h4>
      <h4>2017/18 result : {third}, Wins : {wins[1]} </h4>
      <h4> 2016/17 result : {second}, Wins : {wins[2]} </h4>
      {/* <h3> Total : {wins[0] + wins[1]+ wins[2]}</h3> */}
      <h3>Total Wins : {totalWins}</h3>
    </div>
  )
}


export default App;