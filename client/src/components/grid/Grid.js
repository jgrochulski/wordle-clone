// import Empties from "./Empties";
import Guesses from "./Guesses";
import Current from "./Current";
import Empty from "./Empty";

import '../../grid.css'

function Grid( { guesses, currentGuess } ) {

  let emptiesArr =  guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];

  return (
    <div className="grid">
      {guesses.map((guess, i) => (
        <Guesses key={i} guess={guess}/>
      ))
      }
      {guesses.length < 6 ? <Current currentGuess={currentGuess} /> : console.log("fin")}
      {emptiesArr.map((e, i) => (
        <Empty key={i} char=""/>
      ))}
    </div>
  );
}

export default Grid