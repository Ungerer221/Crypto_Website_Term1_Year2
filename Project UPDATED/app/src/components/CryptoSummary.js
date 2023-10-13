import { cryptos } from '../App';
// export type AppProps = {

// }
import { useEffect, useState } from 'react';

export function updateOwned({ cryptos, amount }) { };

// remember the (cryptos)
export default function CryptoSummary({ cryptos, updateOwned }) {

    useEffect(() => {
        // want to make it so that it is the chosen amount * the price 
        // The parseFloat() method parses a value as a string and returns the first numbe
        console.log(cryptos.name, amount, cryptos.current_price * amount);
    });

    // is type string
    // this is the amount 
    const [amount, setAmount] = useState(NaN);

    return (
        <div>
            <span>{cryptos.name + ' $' + cryptos.current_price}</span>
            <input
                type="number"
                style={{ margin: '10px', padding: '10px', borderRadius: '12px', outline: 'none', border: 'none', backgroundColor: '#e1e5ea' }}
                Value={amount}
                onChange={(e) => {
                    setAmount(parseFloat(e.target.value));
                    //set the parents state by calling a function passed in as a prop
                    updateOwned(cryptos, parseFloat(e.target.value))
                }}
            >

            </input>
            {/* the .toLocaleString is to add the commas to the number as well as to format it  */}
            <p>
                {isNaN(amount) ? '$0.00' : '$' + (cryptos.current_price * amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, })}
            </p>
        </div>
    );
}