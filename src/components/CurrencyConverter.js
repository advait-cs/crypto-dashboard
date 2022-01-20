/* we need to use tbody tag in table tag in jsx*/
import ExchangeRate from "./ExchangeRate";
function CurrencyConverter() { 
  const currencies=['BTC','ETH','USD','XRP','LTC','ADA'];

  return (
    <div className="currency-converter">
     <h2>Currency Converter</h2>
     <div className="input-box">
     <table>
       <tbody>
       <tr>
         <td>Primary Currency:</td>
         <td>
           <input type="number" name="currency-amount-1" value={""}/>
         </td>
         <td>
           <select name="currency-option-1" className="currency-options-1" >
           {currencies.map(currency=>(<option>{currency}</option>))}
            </select>
         </td>
       </tr>
       <tr>
         <td>Secondary Currency:</td>
         <td>
           <input type="number" name="currency-amount-2" value={""}/>
         </td>
         <td>
         <select name="currency-option-1" className="currency-options-1" >
           {currencies.map(currency=>(<option>{currency}</option>))}
            </select>
         </td>
       </tr>
       </tbody>
     </table>
     </div>
     
    <ExchangeRate/>
    </div>
  );
}

export default CurrencyConverter;