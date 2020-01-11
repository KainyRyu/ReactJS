import React from 'react';
// import Spurs from './spurs.jpg';
// import Liverpool from './liverpool.jpg';
// import Watford from './watford.jpg';
// import Sonny from './sonny.jpg';
// import Dele from './dele.jpg';
// import Harry from './harry.jpg';
import './App.css';

function App() {
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


export default App;