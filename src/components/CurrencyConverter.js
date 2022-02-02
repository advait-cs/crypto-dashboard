/* we need to use tbody tag in table tag in jsx*/
import ExchangeRate from "./ExchangeRate";
import {useState} from "react";
import axios from "axios";


function CurrencyConverter() { 
  const currencies=['BTC','ETH','USD','XRP','LTC','ADA'];
  const [chosenPrimaryCurrency,setChosenPrimaryCurrency]=useState('BTC');
  const [chosenSecondaryCurrency,setChosenSecondaryCurrency]=useState('BTC');
  const [amount,setAmount]=useState(1);
  // const [exchangeRate, setExchangeRate]=useState(0);
  const [result,setResult]=useState(0);
  const [primaryCurrencyExchanged,setPrimaryCurrencyExchanged]=useState('BTC');
  const [secondaryCurrencyExchanged,setSecondaryCurrencyExchanged]=useState('BTC');

  // console.log(chosenPrimaryCurrency);
  // console.log(chosenSecondaryCurrency);

  function convert(){
      const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };
    
    
    axios.request(options).then(function (response) {
      // console.log(response.data);
      // setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]*amount);
      setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
      setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
    
    }).catch(function (error) {
      console.error(error);
    });

  }

  console.log(result);
  return (
    <div className="currency-converter">
     <h2>Currency Converter</h2>
     <div className="input-box">
     <table>
       <tbody>
       <tr>
         <td>Primary Currency:</td>
         <td>
           <input 
           className="back-color"
           type="number" 
           name="currency-amount-1" 
           value={amount}
           onChange={(event)=> setAmount(event.target.value)}
           />
         </td>
         <td>
           <select 
           
           name="currency-option-1" 
           className="currency-options-1 back-color " 
           value={chosenPrimaryCurrency}
           onChange={(event)=> setChosenPrimaryCurrency(event.target.value)}
           >
           {currencies.map((currency,_index)=>(<option key={_index}>{currency}</option>))}
            </select>
         </td>
       </tr>
       <tr>
         <td>Secondary Currency:</td>
         <td>
           <input name="currency-amount-2" value={result} disabled={true}  className="back-color"/>
         </td>
         <td>
         <select 
         name="currency-option-1" 
         className="currency-options-2 back-color"
         value={chosenSecondaryCurrency}
         onChange={(event)=> setChosenSecondaryCurrency(event.target.value)}
         >
           {currencies.map((currency,_index)=>(<option key={_index}>{currency}</option>))}
            </select>
         </td>
       </tr>
       </tbody>
     </table>
     <button id="convert-button" onClick={convert}>Convert</button>
     </div>
     
    <ExchangeRate
      exchangeRate={result}
      chosenPrimaryCurrency={primaryCurrencyExchanged}
      chosenSecondaryCurrency={secondaryCurrencyExchanged}
    />
    </div>
  );
}

export default CurrencyConverter;