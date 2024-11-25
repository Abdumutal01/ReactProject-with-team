import React from 'react'
import './AboutPlants.scss'

import aboutPlantsImg1 from '../../../assets/img/aboutPlantsImg1.png'
import aboutPlantsImg2 from '../../../assets/img/aboutPlantsImg2.png'
import { Link } from 'react-router-dom'

export default function AboutPlants() {
    return (
        <div className='aboutPlants'>
            <div className="container">
                <div
                    className="aboutPlants__general"
                    style={{
                        gap: "130px"
                    }}
                >
                    <div className="aboutPlants__data">
                        <h2 className="aboutPlants__title">
                            <span>
                                O'simliklar
                            </span> {" "}
                            haqida ma'lumot
                        </h2>
                        <p className="aboutPlants__text">
                            O'simliklar yetishtirishda muvaffaqiyatli bo'lish uchun har bir tur haqida chuqur ma'lumotga <br />
                            ega bo'lish muhim. O'simliklarning parvarishi, ularning o‘sish sharoitlari va hosildorlikni <br />
                            oshirish usullari haqida batafsil o‘qing. <br /> <br />
                            O'simliklar haqida ko'proq bilishni istaysizmi? Har bir tur bo‘yicha batafsil ma’lumotni olish <br />
                            uchun quyidagi tugmani bosing.
                        </p>
                        <div className="aboutPlants__btnBox">
                            <h3 className="aboutPlants__btnTitle">
                                Barcha o'simliklar haqida batafsil <br />
                                ma'lumot olish uchun tugmani bosing
                            </h3>
                            <button className="aboutPlants__btnLink">
                                Barcha o'simliklar haqida
                            </button>
                        </div>
                    </div>
                    <img
                        src={aboutPlantsImg1}
                        alt=""
                        className="aboutPlants__img"
                    />
                </div>

                <div
                    className="aboutPlants__general"
                    style={{
                        gap: 70,
                        marginTop: 70
                    }}
                >
                    <img
                        src={aboutPlantsImg2}
                        alt=""
                        className="aboutPlants__img"
                    />
                    <div className="aboutPlants__data">
                        <h2 className="aboutPlants__title">
                            Gidroponika va boshqa {" "}
                            <span>
                                usullar
                            </span>
                        </h2>
                        <p className="aboutPlants__text">
                            bu o‘simliklarni tuproqsiz, maxsus oziq moddalar eritmasida yetishtirish usuli. Ushbu usulda o‘simliklar <br />
                            ildizi tuproq o‘rniga suvda yoki inert substratda (masalan, kokos tolasi, vermikulit, loy to‘plari) o‘sadi. <br />
                            Oziqlanish uchun kerakli barcha moddalar maxsus eritma orqali beriladi, bu esa o‘simliklarni yanada <br />
                            tezroq o‘sishiga yordam beradi.
                        </p>
                        <Link className='aboutPlants__moreLink'>
                            Ko’proq {">"}
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
