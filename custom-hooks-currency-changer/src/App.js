
import './App.css';
import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencies = useCurrencyInfo(from);
  const currenciesArr = Object.keys(currencies);
  const convert = () => {
    setConvertedAmount(amount * currencies[to]);
  }


  return (
    <div className='w-full h-screen flex justify-center flex-wrap items-center py-5 px-5' style={{ backgroundImage: `url(https://images.pexels.com/photos/20230729/pexels-photo-20230729/free-photo-of-woman-walking-on-sunlit-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)` }}>
      <div className='w-80 h-75 mt-10 bg-blue-400'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={currenciesArr}
            onCurrencyChange={(from) => setFrom(from)}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}

          />
          <br />
          <InputBox
            label='To'
            amount={convertedAmount}
            currencyOptions={currenciesArr}
            onCurrencyChange={(to) => setTo(to)}
            selectCurrency={to}
            amountDisable={true}
          
          />
          <div className='m-5 text-xl text-white rounded-full bg-black flex justify-center'>
            <button >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
