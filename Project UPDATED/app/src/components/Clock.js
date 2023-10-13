import React, { useState } from 'react'
// import './Clock.css'

const Clock = () => {
    // to get the current time vaRIABLE 
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();

    // now we need to make it increment using useState (only got the current time in the video here)
    // we can pass the time with (time) in the useState
    const [currentTime, setCurrentTime] = useState(time);
    const [currentDate, setCurrentData] = useState(date)

    // no we need to make it incrument 
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        // set current time to pass the time 
        setCurrentTime(time);
    }

    // this is fro how time will continue 
    setInterval(updateTime, 1000);


    return (
        <div className='clock'
            style={{
                margin: "auto",
                width: "250px",
                height: "150px",
                // boxShadow: "0px 4px 20px 4px rgba(73, 82, 99, 0.25)",
                borderRadius: "24px",
                padding: "30px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignContent:"center",
            }}
        >
            <div
                style={{
                    height: "86px",
                }}
            >
                <h1
                    style={{
                        fontSize:"48px"
                    }}
                >{currentTime}</h1>
            </div>
            <div>
                <h2
                    style={{
                        fontSize:"24ypx",
                        color: "rgb(71, 71, 71)",
                        textDecoration: "none",  
                    }}
                >{currentDate}</h2>
            </div>
        </div>
    )
}
export default Clock