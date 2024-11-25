import React from 'react'
import './System.scss'

import systemImg1 from '../../../assets/img/SystemImg1.png'
import systemImg2 from '../../../assets/img/SystemImg2.png'
import systemImg3 from '../../../assets/img/SystemImg3.png'
import systemImg4 from '../../../assets/img/SystemImg4.png'

export default function System() {
    return (
        <div className='system'>
            <div className="container">
                <h2 className="system__title">
                    Bizning tizimimizning
                    <span>
                        qulayliklari
                    </span>
                </h2>
                <div className="system__general">
                    <img
                        src={systemImg1}
                        alt=""
                        className="system__img"
                    />
                    <div className="system__data">
                        <div className="system__box">
                            <img
                                src={systemImg2}
                                alt=""
                                className="system__boxImg"
                            />
                            <h3 className="system__inner">
                                Barcha uchun <br />
                                <span>
                                    Soddalashtirilgan va tushunarli
                                </span><br />
                                <span>
                                    Ko’plab kerakli ma’lumotlar, Malumot almashinish
                                </span>
                            </h3>
                        </div>
                        <i class="fa-solid fa-arrow-down-long"></i>
                        <div className="system__box">
                            <img
                                src={systemImg3}
                                alt=""
                                className="system__boxImg"
                            />
                            <h3 className="system__inner">
                                Tushunarli <br />
                                <span>
                                    Saytdan faydalanishga qiynalsangiz vodeo qo’llanma <br />
                                    Shu joyni o’zida oldi- sotdi ishlari <br />
                                    Ekinlarni kasalliklarini oldini olish va davolash
                                </span>
                            </h3>
                        </div>
                        <i class="fa-solid fa-arrow-down-long"></i>
                        <div className="system__box">
                            <img
                                src={systemImg4}
                                alt=""
                                className="system__boxImg"
                            />
                            <h3 className="system__inner">
                                Suniy intelekt AI <br />
                                <span>
                                    va to’g’ri parvarish qilish
                                </span>

                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
