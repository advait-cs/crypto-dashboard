function ExchangeRate(props) {
  return (
    <div className="exchange-rate">
    <h3>Exchange Rate</h3>
    <h1>{props.exchangeRate}</h1>
    <p>{props.chosenPrimaryCurrency} to {props.chosenSecondaryCurrency}</p>
    </div>
  );
}

export default ExchangeRate;