import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import LineChart from '../components/LineChart';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function TimeLine() {

    const [cryptos, setCryptos] = useState();
    const [selected, setSelected] = useState()

    const [range, setRange] = useState(30) //for the 30 days range option


    const [data, setData] = useState();
    const [options, setOptions] = useState()


    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
        axios.get(url).then((response) => {
            setCryptos(response.data);
        })
    }, [])

    useEffect(() => {
    // so that there is no network requiest error if there is no selected object
        if(!selected) return;
        axios.get(`https://api.coingecko.com/api/v3/coins/${selected?.id}/market_chart?vs_currency=usd&days=${range}&${range === 1 ? 'interval=hourly' : `interval=daily`}`)
          .then((response) => {
            console.log(response.data);
            // ------------------------------------- issue here -------------------------- //
            setData({
              labels: response.data.prices.map((data) => { return moment.unix(data[0] / 1000).format(range === 1 ? "HH:MM" : "MM-DD") }), //the .prices.map is there because it is a function on an arrey because the prices is actually and object
              datasets: [
                {
                  label: `${selected.name} Pricing Over ` + range  + ( range === 1 ? ' Day' : ' Days'),
                  data: response.data.prices.map((data) => { return data[1] }),
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],
            })
          });
      }, [selected, range]);

    // console.log(data[0].name)
    // ---------------------------------- return starts -------------------------------- //
    return (
        <>
            {/* -------------------------------------------------------------------------------  */}
            <div className='TimeLIne'>

                {/* -------------------------------select start------------------------------ */}
                <select onChange={(e) => {

                    const c = cryptos?.find((x) => x.id === e.target.value);
                    setSelected(c);
                    // console.log(c);

                    // ---------------------------------------for the graph---------------------------------- //
                    // axios.get(`https://api.coingecko.com/api/v3/coins/${c?.id}/market_chart?vs_currency=usd&days=30&interval=daily`)
                    //     .then((response) => {
                    //         console.log(response.data);
                    //         // --------------------------- //
                    //         setData({
                    //             labels: response.data.prices.map((data) => { return moment.unix(data[0] / 1000).format('MM-DD') }),
                    //             //this is where we get the date value. the moment is to format the time stamp data into months and dates
                    //             datasets: [
                    //                 {
                    //                     label: 'Prices Daily',
                    //                     data: response.data.prices.map((data) => { return data[1] }), // this is where we get the pricing data
                    //                     borderColor: '#99c24d',
                    //                     backgroundColor: '#dcff9b',
                    //                 },
                    //             ],
                    //         })
                    //     });
                    // ---------------------------------------for the graph---------------------------------- //


                }} defaultValue="default" style={{ border: 'none', outline: 'none', borderRadius: '12px', backgroundColor: '#e1e5ea', padding: '10px', marginTop: '10px', }}>

                    {/* ----------------------------options start--------------------------------- */}
                    <option value="default">Choose an Option</option>
                    {/* this is the loop  */}
                    {cryptos ? cryptos.map((cryptos => {
                        return (
                            <option key={cryptos.id} value={cryptos.id} >
                                {cryptos.name}
                            </option>
                        );
                    })) : null}
                    {/* ----------------------------options end--------------------------------- */}

                </select>
                {/* -------------------------------select end------------------------------ */}
                <select onChange={(e) => {
                    setRange(parseInt(e.target.value))
                }} style={{ border: 'none', outline: 'none', borderRadius: '12px', backgroundColor: '#e1e5ea', padding: '10px', marginTop: '10px', marginLeft:'10px',}}>
                    <option value={30}>30 days</option>
                    <option value={7}>7 days</option>
                    <option value={1}>1 days</option>
                </select>

                {/* ------------------------------------------------------------- */}
            </div>
            {/* ------------------------------------------------------------------------- */}
            {data ? <div style={{ width: 1000, margin: 'auto' }}> <Line options={options} data={data} /> </div> : null}
        </>
    );
    // --------------------------- return ends -------------------------------------
}

export default TimeLine