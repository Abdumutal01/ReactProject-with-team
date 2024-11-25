import React from 'react'
import './Connection.scss'
import AccordionTransition from './Accordion/Accordion'
export default function Connection() {
    return (
        <div className='connection'>
            <div className="container">
                <h2 className="connection__title">
                Bog’lanish
                </h2>
                <div className="connection__general">
                    <div className="connection__data">
                        <div className="connection__box">
                            <h3 className="connection__inner">
                                Bujoyda savolni barcha uchun yoki admin uchun berish mumkin. <br />
                                Barcha uchun qilsangiz boshqalar ham o’z fiktini bildira oladi
                            </h3>
                            <div className="connection__btnBox">
                                <button className="connection__btn active">
                                    Ommaviy
                                </button>
                                <button className="connection__btn">
                                    Admin
                                </button>
                            </div>
                        </div>
                        <AccordionTransition />
                    </div>
                    <form className="connection__form">
                        <input
                            type="text"
                            placeholder='Savol berish...|'
                            className='connection__message'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
