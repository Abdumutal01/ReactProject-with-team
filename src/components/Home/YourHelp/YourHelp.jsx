import React from 'react'
import './YourHelp.scss'

import YourHelpArrowImg from '../../../assets/img/YourHelpArrowImg.png'

import YourHelpJson1 from '../../../assets/json/yourHelpJson1.json'
import YourIdeaCard from './YourIdeaCard/YourIdeaCard'
import Analysis from './Analysis/Analysis'
import Weather from './Weather/Weather'



export default function YourHelp() {
    return (
        <div className="container">
            <div className='yourHelp'>
                <div className="yourHelp__general">
                    <div className="yourHelp__data">
                        <h2 className="yourHelp__title">
                            <span>
                                Sizning yordamingiz kerak
                            </span> <br />
                            firingizni birdiring!
                        </h2>
                        <img
                            src={YourHelpArrowImg}
                            alt=""
                            className="yourHelp__arrowImg"
                        />
                        <div className="yourHelp__idea">
                            {
                                YourHelpJson1.map(item => (
                                    <YourIdeaCard
                                        yourIdeaCard="yourIdeaCard"
                                        item={item}
                                    />
                                ))
                            }
                            <h3 className='yourHelp__adviceLink'>
                                Maslahatlar
                                <i class="fa-solid fa-arrow-right"></i>
                            </h3>
                        </div>

                        <Analysis />

                    </div>


                    <div className="yourHelp__data">
                        <Weather />
                    </div>
                </div>
            </div>
        </div>
    )
}
