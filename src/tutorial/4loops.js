import React from "react";
import "../App.css";
export { Clubs, ClubResult, ThePlayer };

function Clubs() {
  return (
    <div>
      <Epl clubs={["1: Liverpool", "2: Man. City", "3: Leicester City"]} />
    </div>
  );
}

function Epl(props) {
  return (
    <div>
      {props.clubs.map(club => (
        <div key={club}>{club}</div>
      ))}
    </div>
  );
}

function ClubResult() {
  return (
    <div>
         {/* <Results */}
        <ResultReverse
            clubresults={[
                { name: "Liverpool", win: 21, lose: 0 },
                { name: "Man. City", win: 15, lose: 5 },
                { name: "Leicester City", win: 14, lose: 6 },
                { name: "Tottenham", win: 8, lose: 8 }
            ]} />
    </div>
  );
}

function ResultReverse(props) {
    return (
        <div>{
            props.clubresults
                .reverse()
                .map((result, index) => (
                <div key={result.name}>
                    Rank : {index + 1}, 
                    Club : {result.name}
                </div>
            ))
        }</div>
  );
}

// function Results(props) {
//   return (
//     <div>
//       {props.clubresults
//         .filter(result => result.win > 10)
//         .map(result => (
//           <div key={result.name}>
//             Club : {result.name}, Win : {result.win}, Lost : {result.lose}
//           </div>
//         ))}
//     </div>
//   );
// }

function ThePlayer() {
  return (
    <div>
      <BestPlayer details={{ club: "Tottenham", age: 27 }} />
    </div>
  );
}

function BestPlayer(props) {
  return (
    <div>
      {Object.keys(props.details).map(key => (
        <div key={key}>
          {key}: {props.details[key]}
        </div>
      ))}
    </div>
  );
}
