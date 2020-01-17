import React from 'react';
export { HomeOrAway, Goals, Appearances, Pos, GoodPlayer };

function HomeOrAway(props) {
    // if (props.match === 'home') {
    //     return <h3>Home Match</h3>
    // } else {
    //     return <h3>Away Match</h3>
    // }
    return props.match === 'home' ? 
        <h3>Home Match</h3> : 
            <h3>Away Match</h3>;
}

function Goals(props) {
    return props.goal > 25 ? 
        <label>Great Season</label> : 
        props.goal > 20 ? 
                <label>Keep Going!</label> : 
                <label>Need to work harder</label>
}

function Appearances(props) {
    function soMany() {
        return props.appearances > 18;
    }
    function often() {
        return props.appearances > 15;
    }
    return <label>{soMany() ? 
        'Very Often' : often() ? 
        'Quite Often' : 'A Bit Less'}</label>
}

function Pos(props){
    return( 
        <label>Season Rank : {
            props.rank == 2 ?
                '2nd' :
                props.rank == 3 ?
                    '3rd' :
                    props.rank > 3?
                        'Out of ranks. Comon Hotspurs!!' :
                        '1st, LEGEND'
        }</label>
    )
}

function GoodPlayer({ budweiserGoal, goals }){
    return(
        <label>{
            budweiserGoal === true || goals > 10 ?
                'Great Player' :
                'Work harder'
        }</label>
    )
}