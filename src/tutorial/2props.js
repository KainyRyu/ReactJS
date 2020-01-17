import React from 'react';
import Stadium from '../images/stadium.png';
import { GoodPlayer, Appearances, HomeOrAway } from './3conditional';
import '../App.css';

export { Player, Match };

function Player({name, position, image, budweiserGoal, goals, appearances}) {
    return(
        <div className='player'>
            <img src={image} />
            <h1>{name}</h1>
            <p>
                Position : {position}<br/>
                <GoodPlayer budweiserGoal={budweiserGoal} goals={goals} /><br />
                <Appearances appearances={appearances} />
            </p>
            
        </div>
    )
}

function Match({ match, versus, date, time }) {
    return(
        <div className='match'>
            <img src={Stadium} />
            <h2>Tottenham VS {versus}</h2>
            <HomeOrAway match={match} />
            <h4>{date} {time}</h4>
        </div>
    )
}





/*
<Match>
14/01 tue vs middlesbrough   Home
18/01 sat vs Watford  12:30     Away
22/01 Wed vs Norwich City 19:30  Home
25/01 Sat vs Southampton 15:00  => FA Cup     Away
02/02 Man. City 16:30
16/02 Aston Villa 14:00

<Tottenham>
Wins 23, 23, 26 {16/17 : 4th, 17/18 : 3rd, 18/19 : 2nd}



<Players>

Son Heungmin (27)
- Forward
- Score : 5
- Appearances : 17

Dele (23)
- Midfield
- Score : 6
- Appearances : 15

Harry (26)
- Forward
- Score : 11
- Appearances : 20
*/
