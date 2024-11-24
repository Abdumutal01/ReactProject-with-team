import React from 'react'
import './Together.scss'


import togetherBoxImg1 from '../../../assets/img/togetherBoxImg1.png'
import togetherBoxImg3 from '../../../assets/img/togetherBoxImg3.png'

export default function Together() {
    return (
        <div 
        className='container together'
        style={{
            marginTop:"37px"
        }}
        >
            <div className="together__box">
                <img
                    src={togetherBoxImg1}
                    alt=""
                    className="together__img"
                />
                <div className="together__data">
                    <h2
                        className="together__title"
                        style={{
                            // width: 362,
                            marginBottom: 16,
                            fontSize:25,
                            transform:" translateX(-40px)"
                        }}
                    >
                        Birgalikda ishlaymiz, birgalikda o‘samiz!
                    </h2>
                    <p
                        className="together__text"
                        style={{
                            width: 370,
                            color: "#ADFFC9",
                            fontSize:15,
                            paddingBottom:39,
                                transform:" translateX(-10px)"
                        }}
                    >
                        Hosilning yuqori bo‘lishi faqat yerga <br /> g‘amxo‘rlik  
                        qilish emas, balki birgalikda <br /> qilinadigan  mehnat  va 
                        yordam natijasidir. <br />  Biz sizning har qadamda 
                        muvaffaqiyatga <br />  erishishingizga  yordam beramiz. 
                    </p>
                </div>
            </div>
            <div className="together__box">

                <div className="together__data">
                    <h2
                        className="together__title"
                        style={{
                            marginBottom: 16,
                            fontSize:30
                        }}
                    >
                        Biz bilan hosildorlikka erishing!
                    </h2>
                    <p
                        className="together__text"
                        style={{
                            color: "#ADFFC9",
                            padding:"0px 35px"
                        }}
                    >
                        Hosilning yuqori bo‘lishi faqat yerga g‘amxo‘rlik
                        qilish emas, balki birgalikda qilinadigan mehnat va
                        yordam natijasidir. Biz sizning har qadamda
                        muvaffaqiyatga erishishingizga yordam beramiz.
                    </p>
                </div>
            </div>
            <div className="together__box">
                <img
                    src={togetherBoxImg3}
                    alt=""
                    className="together__img"
                />
                <div className="together__data">
                    <h2
                        className="together__title"
                        style={{
                            width: 362,
                            marginBottom: 16,
                            fontSize:"35px",
                            padding:"0px 17px"
                        }}
                    >
                       Biz bilan <br /> hosildorli <br /> kka erishing!
                    </h2>
                  
                </div>
            </div>
        </div>
    )
}
