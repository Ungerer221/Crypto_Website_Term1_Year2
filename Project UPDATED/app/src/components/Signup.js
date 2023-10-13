import React from "react";
import Crypto from'../assets/hatch.jpg'
// import './Signup.css'

const Signup = () => {
    return (
        <div>
            <div className='signup'>
                <div className='container'
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '3rem 1rem',
                    }}>
                    {/* left  */}
                    <div className='left' style={{textAlign:'center'}}>
                        <img src={Crypto} alt='' style={{borderRadius:'24px', boxShadow: "0px 4px 57px rgba(0, 0, 0, 0.25)",}} />
                    </div>
                    {/* right  */}
                    <div className='right' >
                        <h2>Earn passive income with crypto</h2>
                        <p style={{margin:'2rem 0',}}>Earn up to 12% annual rewards on 30+ digital assets. </p>
                        <div className='input-container'>
                            <input type='email' placeholder="enter your email" style={{padding:'12px 32px', border:'2px solid #37C0D2', background:'transparent', borderRadius:'24px'}}/>
                            <button className='btn'>Learn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup