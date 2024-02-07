import { useState } from "react";
import Currency from "./components/Currency";
import useCurrency from "./hooks/useCurrency";

export default function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrency(from);

  function handleSwap() {
    // toAmount = 10, fromAmount = 20
    const tempAmount = toAmount; // temp = 10
    setToAmount(fromAmount); // toAmount = 20
    setFromAmount(tempAmount) // fromAmount = 10

    // to = "INR", from = "USD"
    const tempCurrency = to; // tempCurrency = "INR"
    setTo(from); // to = "USD"
    setFrom(tempCurrency); // from = "INR"
  }

  function handleSubmit() {
    setToAmount(fromAmount * currencyInfo[to]);
  }


  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url(https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
      <div className="bg-blue-100 p-4 w-[500px] text-center rounded-md">
        <h1 className="text-center text-3xl mb-3">Currency Converter</h1>
        
        <Currency label={"From"} amount={fromAmount} setAmount={setFromAmount} currency={from} setCurrency={setFrom} />
        <button className="bg-green-300 absolute translate-x-[-50%] translate-y-[-60%] p-2 rounded-md" onClick={handleSwap}>Swap</button>
        <Currency label={"To"} amount={toAmount} setAmount={setToAmount} currency={to} setCurrency={setTo} />

        <button className="bg-green-300 p-2 w-full rounded-md" onClick={handleSubmit}>Convert {from} to {to}</button>
      </div>
    </div>
  );
}