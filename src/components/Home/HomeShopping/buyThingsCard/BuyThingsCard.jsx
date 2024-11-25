import React from 'react'
import './BuyThingsCard.scss'

export default function BuyThingsCard({ item }) {
    return (
        <div
            key={item.id}
            className='buyThingsCard'
        >
            <img
                src={item.img}
                alt=""
                className="buyThingsCard__img"
            />
            <h3 className="buyThingsCard__title">
                {item.title}
            </h3>
            <p className="buyThingsCard__text">
                {item.text}
            </p>
            <div className="buyThingsCard__box">
                <h4 className="buyThingsCard__inner">
                    Muallif:
                </h4>
                <h4 className="buyThingsCard__type">
                    {item.type}
                </h4>
            </div>
        </div>
    )
}
