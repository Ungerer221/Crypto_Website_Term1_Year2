import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
// import { Card, Placeholder } from "react-bootstrap";
import { FaArrowsAltH } from 'react-icons/fa'
import CryptoSummary from '../components/CryptoSummary';


import moment from 'moment'



// importing the charts 
// import BarChart from '../components/BarChart';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2'
import { Radar } from 'react-chartjs-2';






function Compare() {

    const [cryptos, setCryptos] = useState();
    // ------------------------------------------ for the items selected ----------------------------------- //
    const [selectedOne, setSelectedOne] = useState();
    const [selectedTwo, setSelectedTwo] = useState();
    const [selected, setSelected] = useState([]);
    // -------------------------------------------variable for the graph ----------------------------------- //

    const [data, setData] = useState();
    const [data2, setData2] = useState();

    const [options, setOptions] = useState()

    const [range, setRange] = useState(30) //for the 30 days range option


    // const [graphData, setGraphData] = useState({
    //     labels: graphData.map((data) => data.name),
    //     datasets: [{
    //         label: 'high and low',
    //         data: graphData.map((data) => data.high_24)
    //     }]
    // });
    // console.log(graphData)

    //--------------------------------------------- the useEffect -------------------------------------------- //
    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

        axios.get(url).then((response) => {
            setCryptos(response.data);
        })
    }, []);

    // --- for the bar graph ---
    // useEffect(() => {
    //     console.log('selected', selected)
    //     if (!selected) return;
    //     setData({
    //         labels: selected.map((s) => s.name),
    //         datasets: [
    //             {
    //                 label: 'Total Supply',
    //                 data: selected.map((s) => s.total_supply),
    //                 // borderColor: '#99c24d',
    //                 backgroundColor: '#dcff9b',
    //             },
    //             {
    //                 label: 'Total Volume',
    //                 data: selected.map((s) => s.total_volume),
    //                 // borderColor: '#99c24d',
    //                 backgroundColor: '#dcff9b',
    //             },
    //         ],
    //     })
    // }, [selected])
    //--------------------------------------------- the return -------------------------------------------- //

    return (
        <div className="container">

            {/* from vidio  */}
            {/* <div>{data ? data.map() : null }</div> */}

            <div className="row">
                <div className="col-sm-12" style={{}}>
                    <h1>Quick Compare</h1>
                    <p>Select the currencies you would like to compare.</p>
                </div>
            </div>
            <div className="row">
                {/* the select box start */}
                <div className="col-sm-5 selectedOne">
                    {/* ---select one--- */}
                    <select type="text" className="p-2" style={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        width: "600px",

                    }} onChange={(e) => {

                        const c = cryptos?.find((x) => x.id === e.target.value);
                        setSelectedOne(c);
                        console.log(c);
                        // onChange ends 

                        // ---------------here goes chart data start---------------- //
                        axios.get(`https://api.coingecko.com/api/v3/coins/${c?.id}/market_chart?vs_currency=usd&days=30&interval=daily`)
                            .then((response) => {
                                console.log(response.data);

                                setData({
                                    labels: response.data.prices.map((data) => { return moment.unix(data[0] / 1000).format(range === 1 ? "HH:MM" : "MM-DD") }),
                                    // Labels:selectedTwo.data.map((c) => c.name),
                                    datasets: [
                                        {
                                            label: 'Price History',
                                            data: response.data.prices.map((data) => { return data[1] }),
                                            // data: selectedTwo.data.map((c) => c.owned * c.current_price),
                                            borderColor: '#99c24d',
                                            backgroundColor: '#dcff9b',
                                        },
                                    ],
                                })
                            });
                        // ---------------here goes chart data end---------------- //

                    }} defaultValue="default">
                        <option value="default">Choose an Option</option>
                        {cryptos ? cryptos.map((cryptos => {
                            return (
                                <option key={cryptos.id} value={cryptos.id} >
                                    {cryptos.name}
                                </option>
                            );
                        })) : null}
                    </select>

                </div>
                {/* the select box end */}
                {/* ------------------------------------------------- */}
                <div className="col-sm-2"><FaArrowsAltH /></div>
                {/* ------------------------------------------------- */}
                {/* the select box start */}
                <div className="col-sm-5">
                    {/* ---select two--- */}
                    <select type="text" className="p-2" style={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        width: "600px",

                    }} onChange={(e) => {

                        const c = cryptos?.find((x) => x.id === e.target.value);
                        setSelectedTwo(c);
                        console.log(c);
                        // onChange ends 

                        // ---------------here goes Line chart data start---------------- //
                        axios.get(`https://api.coingecko.com/api/v3/coins/${c?.id}/market_chart?vs_currency=usd&days=30&interval=daily`)
                            .then((response) => {
                                // console.log(response.data);
                                // --------------------------- //
                                setData2({
                                    labels: response.data.prices.map((data) => { return moment.unix(data[0] / 1000).format(range === 1 ? "HH:MM" : "MM-DD") }),
                                    // Labels:selectedTwo.data.map((c) => c.name),
                                    datasets: [
                                        {
                                            label: 'Price History',
                                            data: response.data.prices.map((data) => { return data[1] }),
                                            // data: selectedTwo.data.map((c) => c.owned * c.current_price),
                                            borderColor: '#99c24d',
                                            backgroundColor: '#fe6d73',
                                        },
                                    ],
                                })
                            });
                        // ---------------here goes Line chart data end---------------- //


                    }} defaultValue="default">
                        <option value="default">Choose an Option</option>
                        {cryptos ? cryptos.map((cryptos => {
                            return (
                                <option key={cryptos.id} value={cryptos.id} >
                                    {cryptos.name}
                                </option>
                            );
                        })) : null}
                    </select>
                    {/* the select box end */}


                </div>
            </div>
            {/* start  */}
            <div className="row mt-4 mb-4">

                <div className="col-sm-5">
                    <div className="con" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", minHeight: "600px", width: "600px", borderRadius: "24px", padding: '10px', }}>
                        {/* top row  */}
                        {/*------------------------------ list info---------------------------*/}
                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <h3 className='col-sm-3' style={{ width: '600px' }}> {selectedOne ? '' + selectedOne.name : null} </h3>
                                </li>
                                <li>
                                    <p>{selectedOne ? 'Price: $' + selectedOne.current_price.toLocaleString() : null}</p>
                                </li>
                                <li>
                                    <p>{selectedOne ? 'Percentage Change: ' + selectedOne.price_change_percentage_24h.toFixed(2) + '%' : null}</p>
                                </li>
                                <li>
                                    <p>{selectedOne ? 'Total Volume: ' + selectedOne.total_volume.toFixed(2) : null}</p>
                                </li>
                                <li>
                                    <p>{selectedOne ? 'Total Supply: ' + selectedOne.total_supply.toFixed(2) : null}</p>
                                </li>
                            </ul>
                        </div>

                        {/*------------------------------ Graphs here---------------------------*/}
                        <div className='row'>
                            {data ? <div style={{ width: 600, margin: 'auto' }}> <Line options={options} data={data} /> </div> : null}
                        </div>
                        <div>
                            {data ? <div style={{ width: 600, margin: 'auto' }}> <Bar options={options} data={data} /> </div> : null}
                        </div>
                        <div>
                            {data ? <div style={{ width: 600, margin: 'auto' }}> <Radar options={options} data={data} /> </div> : null}
                        </div>

                    </div>
                </div>

                <div className="col-sm-2 mx-auto" >VS</div>

                <div className="col-sm-5">
                    <div clas="con" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", minHeight: "600px", width: "600px", borderRadius: "24px", paddin: '10px', }}>
                        {/* top row  */}
                        {/* -------------------------------- list info --------------------------- */}
                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <h3 className='col-sm-3' style={{ width: '600px' }}> {selectedTwo ? '' + selectedTwo.name : null} </h3>
                                </li>
                                <li>
                                    <p>{selectedTwo ? 'Price: $' + selectedTwo.current_price.toLocaleString() : null}</p>
                                </li>
                                <li>
                                    <p>{selectedTwo ? 'Percentage Change: ' + selectedTwo.price_change_percentage_24h.toFixed(2) + '%' : null}</p>
                                </li>
                                <li>
                                    <p>{selectedTwo ? 'Total Volume: ' + selectedTwo.total_volume.toFixed(2) : null}</p>
                                </li>
                                <li>
                                    <p>{selectedTwo ? 'Total Supply: ' + selectedTwo.total_supply.toFixed(2) : null}</p>
                                </li>
                            </ul>
                        </div>
                        {/*------------------------------ Graphs---------------------------*/}
                        <div className='row'>
                            {data2 ? <div style={{ width: 1000, margin: 'auto' }}> <Line options={selected} data={data2} /> </div> : null}
                            {/* the problem is it that its showing the same graph  */}
                        </div>
                        <div>
                            {data2 ? <div style={{ width: 600, margin: 'auto' }}> <Bar options={options} data={data2} /> </div> : null}
                        </div>
                        <div>
                            {data2 ? <div style={{ width: 600, margin: 'auto' }}> <Radar options={options} data={data2} /> </div> : null}
                        </div>
                        {/* ---trying something--- */}

                    </div>
                </div>
            </div>
            {/* end  */}
        </div>
    );
}

export default Compare