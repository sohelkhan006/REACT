import Lottery from "./Lottery";
import {sum} from './helper'

const App = () => {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
    // ticket[0] === 0;
    // ticket.every((num) => ticket[0]);
  }
  return (
    <div>
      <Lottery n={5} winCondition={winCondition} />
    </div>
  );
};

export default App;
