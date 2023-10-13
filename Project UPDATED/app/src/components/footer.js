import React from 'react'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

function BasicFooter() {
    return (
        <div style={{ backgroundColor: "black", color: "white", height:"fit-content", padding:"30px 0px" }}>
            <div class="row">
                <h1>Footer...</h1>
            </div>
            <div class="row gx-1">
                <div class="col-sm-3">
                    <ul style={{
                        listStyle: "none",
                        fontWeight: "bold",
                    }}>
                        {/* check if you shouldnt do this in a css file  */}
                        {/* check how to make it like a button with hover effects and cursor pointer  */}
                        <li class="text-muted" style={{ padding: "10px" }} href="/">Landing</li>
                        {/* here is the solution to previos but now how to get rid of the underliune*/}
                        <a href="/compare"><li class="text-muted" style={{ padding: "10px", textDecoration: "none" }}>Compare</li></a>
                        {/* <li class="text-muted"  style={{padding:"10px"}}>compare</li> */}
                        <li class="text-muted" style={{ padding: "10px" }}>Time</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <ul style={{
                        listStyle: "none",
                        fontWeight: "bold",
                    }}>
                        <a href="/"><li class="text-muted" style={{ padding: "10px", textDecoration: "none" }}>Landing</li></a>
                        <a href="/compare"><li class="text-muted" style={{ padding: "10px", textDecoration: "none" }}>Compare</li></a>
                        <a href="/time"><li class="text-muted" style={{ padding: "10px", textDecoration: "none" }}>Time</li></a>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <ul style={{
                        listStyle: "none",
                        fontWeight: "bold",
                    }}>
                        <a href="/"><li class="text-muted" style={{ padding: "10px", textDecoration: "none" }}>Landing</li></a>
                        <a href="/compare"><li class="text-muted" style={{ padding: "10px", textDecoration: "none" }}>Compare</li></a>
                        <a href="/time"><li class="text-muted" style={{ padding: "10px", textDecoration: "none" }}>Time</li></a>
                    </ul>
                </div>

                {/* last column  */}
                <div class="col-sm-3">
                    <div class="row p-1">
                        <h5>Follow us</h5>
                    </div>
                    <div class="row mx-auto p-2" style={{
                        width: "200px",
                    }}>
                        {/* the social icon links  */}
                        <div class="col-sm-4">
                            <button type="button" style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50px",
                                border: "none",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                            }}><FiFacebook style={{scale:'1.2'}}/></button>
                        </div>
                        <div class="col-sm-4">
                            <button type='button' style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50px",
                                border: "none",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                            }}><FiTwitter style={{scale:'1.2'}}/></button>
                        </div>
                        <div class="col-sm-4">
                            <button type='button' style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50px",
                                border: "none",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                            }}><FiInstagram style={{scale:'1.2'}}/></button>
                        </div>

                    </div>
                    <div class="row">
                        <input style={{
                            maxWidth: "450px",
                            borderRadius:"24px",
                            // height:"90px"
                            padding:"10px 18px",
                            outline:"none"
                        }} placeholder="Email" type={'email'}></input>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BasicFooter