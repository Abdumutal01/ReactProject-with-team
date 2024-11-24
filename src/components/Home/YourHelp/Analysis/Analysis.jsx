import React from 'react'
import './Analysis.scss'

import analysisCarImg from '../../../../assets/img/analysisCarImg.png'
import analysisEmptyImg from '../../../../assets/img/analysisImg.png'

export default function Analysis() {
    return (
        <div className='analysis'>
            <div className="analysis__general">
                <div className="analysis__box1">
                    <h3 className="analysis__title">
                        <span>
                            Savdo va bozor
                        </span>  tahlili
                    </h3>
                    <p className="analysis__text">
                        Bozor tahlili: O'simliklar va mahsulotlar bozoridagi narxlar, talab va taklif tahlili.
                    </p>
                    <div className="analysis__btnBox">
                        <img
                            src={analysisEmptyImg}
                            alt=""
                            className="analysis__btnBoxImg"
                        />
                        <button className="analysis__btn">
                            Batafsil
                        </button>
                    </div>
                </div>
                <div className="analysis__box2">
                    <h2 className="analysis__box2Inner">
                        Texnikalar
                    </h2>
                    <img
                        src={analysisCarImg}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
