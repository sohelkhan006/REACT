import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

const Lottery = ({ n = 3, winCondition }) => {
  const [ticket, setTicket] = useState(genTicket(n));

  const isWin = winCondition(ticket);

  const buyTicket = () => setTicket(genTicket(n));

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-purple-600 via-pink-500 to-red-500 p-5">
      <div className="flex flex-col justify-between bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">
          🎲 Lottery Game
        </h2>

        {/* Ticket Section */}
        <div className="border-4 border-purple-500 mt-5 rounded-2xl px-6 py-4 bg-gray-50 shadow-inner">
          <p className="text-lg font-semibold text-gray-700 mb-2">🎟️ Ticket</p>
          <Ticket ticket={ticket} />
        </div>

        {/* Button */}
        <button
          onClick={buyTicket}
          className="bg-linear-to-r from-green-400 to-blue-500 border-2 border-transparent rounded-full px-6 py-3 text-white font-bold mt-6 shadow-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Buy Ticket
        </button>

        {/* Result Message */}
        <h3 className="mt-6 px-5 text-xl font-semibold text-purple-700 animate-bounce">
          {isWin && "🎉 Congratulations, you won!"}
        </h3>
      </div>
    </div>
  );
};

export default Lottery;
