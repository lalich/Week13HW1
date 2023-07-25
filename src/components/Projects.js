import React from 'react'

const Project = (props) => {

    return (
        <div>
        <h1 className='Project'>This is the way to ReacT!</h1>

            <div className='card1'>
                <div className='profile-sidebar'> 
                        Project: StonkyBvB
                        <br />
                
                    <ul>
                        <a href='https://stonkybvb.onrender.com'>Take me to StonkyBvB</a>
                        <br />
                        <a href= 'https://github.com/lalich/KalePjcT1.git'>GitHub Link</a>
                    </ul>
                    <p className='description'>Description: StonkyBvB allows users to type a publicly traded 
                        stock ticker and receive a list of financial metrics. The user then can click
                  the BvB-8-Ball to see if the StonkyBvB algorythm finds the stock to be Bull or Bear.
                  </p>
                </div>
                <div className='profile-main'></div>
            </div>

    <div className='card2'>
    <div className='profile-sidebar'> 
        Project: YoLo Application
    <br />
        <ul>
           <a href='https://yolo-application.onrender.com/'>Take me to the Yolo Application</a>
           <br />
           <a href= 'https://github.com/lalich/YoLo.git'>GitHub Link</a>
        </ul>
        <p className='description'>Description: YoLo App allows users to gamble on...
            any item they type in and will offer trades on a risk/return basis.
            </p>
    </div>
    <div className='profile-main'></div>
</div>
</div>       
 ) 
}

export default Project