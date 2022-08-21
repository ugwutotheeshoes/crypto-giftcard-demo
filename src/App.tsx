import { FaBitcoin, FaBold } from "react-icons/fa";
import "./App.css";
import { Server } from "./Server";
import { Binance } from "./Binance";
import { Bitcoin } from "./Bitcoin";

const App: React.FC = () => {
  return (
    <main>
      <h2 className='title'>Buy Crypto Gift Card</h2>
      <p className='desc'>Buy crypto gift cards in an instant </p>
      <Server />
      <Binance /> 
      <Bitcoin />                      
    </main>
  );
};

export default App;
