const PORT=8000;
const express= require("express");
const cors=require("cors");
const axios= require("axios");
require("dotenv").config();

const app=express();
app.use(cors());

app.get('/',(req,res)=>{
   res.json("hello");
});

app.get('/convert',(req,res)=>{
 const toCurrency=req.query.to_currency;
 const fromCurrency=req.query._currency;


  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {from_currency:fromCurrency , function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency},
    headers: {
      'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data["Realtime Currency Exchange Rate"]["5.Exchange Rate"]);
    res.json(response.data["Realtime Currency Exchange Rate"]["5.Exchange Rate"]);
  }).catch(function (error) {
    console.error(error);
  });
});

app.get('/news',(req,res)=>{
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
  };
  
  axios.request(options).then(function (response) {
    // console.log(response.data);
    res.json(response.data);
    // setArticles(response.data);
  }).catch(function (error) {
    console.error(error);
  }); 
})

app.listen(PORT,() => console.log("server is running at port 8000"))