import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from "react-bootstrap";
import myImage from '../myInages/unnamed.png'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
// import Clock from '../components/Clock';
// import './pages/landing.css';



function Landing() {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)

    // for if there is an err it wont shutdown the whole site 
    if (!data) return null;

    return (
        <div style={{}}>

            {/* con start */}
            {/* can put container in the div below but have to find out how to change background colour or if its better to not use container  */}
            <div class="  mx-auto" style={{ backgroundColor: "#fff", borderRadius: "0px", height: "900px", width: "100%" }}>
                <div class="row gx-1">

                    {/* left column */}
                    {/* try putting a margin-left on the column itself then have everything in the left */}
                    <div class="col-md-6 p-4">
                        <div class="" style={{}}>

                            {/* text box starts */}
                            <div class="gap-5 mx-auto">
                                <h1 class="text-center p-5" style={{
                                    fontSize: "128px",
                                    fontWeight: "700",
                                    margin: "auto",
                                    lineHeight: "0.8" //check later
                                }}>Cryptic Currency</h1>
                                <p class="text-center" style={{
                                    width: "500px",
                                    display: "flex",
                                    // justifyContent:"center",
                                    margin: "auto"

                                }}>
                                    Cryptic is a service website that provides data on
                                    crypto currency and is an exchange rates source.
                                    The coinlayer API that is used is capable of delivering accurate
                                    exchange rate data for more than
                                    385 cryptocurrencies in real-time. Here you can use this site to obsrve and manage your data
                                </p>
                            </div>
                            {/* text box ends */}

                            {/* buttons box starts */}
                            <div class="container" style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "24px",
                                marginTop: "50px"
                            }}>
                                <button type="button" class="button" style={{
                                    border: "none",
                                    borderRadius: "24px",
                                    padding: "15px 30px",
                                    backgroundColor: "#37C0D2",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
                                }}><a href='/compare' style={{textDecoration:'none',color:'#fff'}}>Explore</a></button>
                                <button type='button' class="" style={{
                                    border: "solid 2px #fff",
                                    borderRadius: "24px",
                                    padding: "10px 30px",
                                    backgroundColor: "transparent",
                                    color: "black",
                                    background: "#FDFDFD",
                                    boxShadow: "inset 0px 4px 4px 1px rgba(0, 0, 0, 0.25)",
                                }}>Login</button>
                            </div>
                            {/* buttons box ends */}

                            {/* trending box start */}
                            <div class="container p-4 mx-auto">
                                <div style={{
                                    width: "580px",
                                    height: "300px",
                                    boxShadow: "0px 4px 57px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "24px",
                                    margin: "auto",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <h1>Trending Cryptocurrencies</h1>
                                    {/* row 1 */}
                                    <div class="row" style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "15px 20px", justifyContent: "center" }}>
                                        <img class='col-sm-3' src={data[0].image} alt='' style={{ width: "50px" }} />
                                        <div class='col-sm-3'>
                                            <h class="h5" style={{ padding: "10px" }}>{data[0].name}</h>
                                        </div>
                                        <div class='col-sm-3' style={{ display: "flex", alignItems: "center" }}>
                                            <p class='h5'>${data[0].current_price.toLocaleString()}</p>
                                        </div>
                                        <div class='col-sm-3'>
                                            {/* so if the data is above 0 then it goes green and up arrow and if data is below 0 the it goes red and down arrow  */}
                                            {data[0].price_change_percentage_24h < 0 ? (
                                                <span className='red'>
                                                    <FiArrowDownRight className='icon' />
                                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                                    {/* // the .toFixed(2) just shows 2 decimal places  */}
                                                </span>
                                                // "Otherwise"if positve " 
                                            ) : (
                                                <span className='green'>
                                                    <FiArrowUpRight className='icon' />
                                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {/* row 2 */}
                                    <div class="row" style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "15px 20px", justifyContent: "center" }}>
                                        <img class='col-sm-3' src={data[1].image} alt='' style={{ width: "50px" }} />
                                        <div class='col-sm-3'>
                                            <h class="h5" style={{ padding: "10px" }}>{data[1].name}</h>
                                        </div>
                                        <div class='col-sm-3' style={{ display: "flex", alignItems: "center" }}>
                                            <p class='h5'>${data[1].current_price.toLocaleString()}</p>
                                        </div>
                                        <div class='col-sm-3'>
                                            {/* so if the data is above 0 then it goes green and up arrow and if data is below 0 the it goes red and down arrow  */}
                                            {data[0].price_change_percentage_24h < 0 ? (
                                                <span className='red'>
                                                    <FiArrowDownRight className='icon' />
                                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                                    {/* // the .toFixed(2) just shows 2 decimal places  */}
                                                </span>
                                                // "Otherwise"if positve " 
                                            ) : (
                                                <span className='green'>
                                                    <FiArrowUpRight className='icon' />
                                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {/* row 3 */}
                                    <div class="row" style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "15px 20px", justifyContent: "center" }}>
                                        <img class='col-sm-3' src={data[2].image} alt='' style={{ width: "50px" }} />
                                        <div class='col-sm-3'>
                                            <h class="h5" style={{ padding: "10px" }}>{data[2].name}</h>
                                        </div>
                                        <div class='col-sm-3' style={{ display: "flex", alignItems: "center" }}>
                                            <p class='h5'>${data[2].current_price.toLocaleString()}</p>
                                        </div>
                                        <div class='col-sm-3'>
                                            {/* so if the data is above 0 then it goes green and up arrow and if data is below 0 the it goes red and down arrow  */}
                                            {data[2].price_change_percentage_24h < 0 ? (
                                                <span className='red'>
                                                    <FiArrowDownRight className='icon' />
                                                    {data[2].price_change_percentage_24h.toFixed(2)}%
                                                    {/* // the .toFixed(2) just shows 2 decimal places  */}
                                                </span>
                                                // "Otherwise"if positve " 
                                            ) : (
                                                <span className='green'>
                                                    <FiArrowUpRight className='icon' />
                                                    {data[2].price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {/* row 4 */}
                                    <div class="row" style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "15px 20px", justifyContent: "center" }}>
                                        <img class='col-sm-3' src={data[3].image} alt='' style={{ width: "50px" }} />
                                        <div class='col-sm-3'>
                                            <h class="h5" style={{ padding: "10px" }}>{data[3].name}</h>
                                        </div>
                                        <div class='col-sm-3' style={{ display: "flex", alignItems: "center" }}>
                                            <p class='h5'>${data[3].current_price.toLocaleString()}</p>
                                        </div>
                                        <div class='col-sm-3'>
                                            {/* so if the data is above 0 then it goes green and up arrow and if data is below 0 the it goes red and down arrow  */}
                                            {data[3].price_change_percentage_24h < 0 ? (
                                                <span className='red'>
                                                    <FiArrowDownRight className='icon' />
                                                    {data[3].price_change_percentage_24h.toFixed(2)}%
                                                    {/* // the .toFixed(2) just shows 2 decimal places  */}
                                                </span>
                                                // "Otherwise"if positve " 
                                            ) : (
                                                <span className='green'>
                                                    <FiArrowUpRight className='icon' />
                                                    {data[3].price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {/* end  */}
                                </div>
                            </div>
                            {/* trending box end */}

                            {/* socials buttons starts */}
                            {/* find a way to fix because the icons arent showing */}
                            {/* <div class="row" style={{
                                marginTop: "250px",
                                width: "250px",
                                gap: "",
                                marginLeft: "200px"
                            }}>
                                <div class="col-sm-4">
                                    <button type="button" style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50px",
                                        border: "none",
                                    }}></button>
                                </div>
                                <div class="col-sm-4">
                                    <button type='button' style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50px",
                                        border: "none",
                                    }}></button>
                                </div>
                                <div class="col-sm-4">
                                    <button type='button' style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50px",
                                        border: "none",
                                    }}></button>
                                </div>
                            </div> */}
                            {/* socials buttons ends */}

                        </div>
                    </div>

                    {/* right column */}
                    <div class="col-md-6">
                        <div class="" style={{
                            // width: "200px",
                            // height: "200px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden"
                        }}>
                            <img src={myImage} alt="" style={{ width: "1000px", }}></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* con ends */}
        </div >
    );
}

export default Landing