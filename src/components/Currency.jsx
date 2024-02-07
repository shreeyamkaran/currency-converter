import useCurrency from "../hooks/useCurrency";

export default function Currency({label, amount, setAmount, currency, setCurrency, currencyArray}) {

    const currencyInfo = useCurrency(currency);
    currencyArray = Object.keys(currencyInfo);

    return (
        <div className="bg-red-100 p-4 mb-3 rounded-md">

          <div className="flex justify-between mb-1">
            <p>{label}</p>
            <p>Currency type</p>
          </div>

          <div id="from">
            <input type="number" className="p-2 outline-none rounded-md" value={amount} onChange={function(ev) {setAmount(Number(ev.target.value))}} />
            <select className="rounded-md text-center outline-none" value={currency} onChange={function(ev) {setCurrency(ev.target.value)}}>
              {
                currencyArray && currencyArray.map((curr) => (
                    <option value={curr} key={curr}>{curr}</option>
                ))
              }
            </select>
          </div>

        </div>
    );
}