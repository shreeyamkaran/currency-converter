import { useEffect, useState } from "react";

let date = "";

export default function useCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((res) => {
            setData(res[currency]);
            date = res.date;
            console.log(date);
        });

    }, [currency]);

    return data;
}