import React from 'react'
import './OpporCard.scss'

export default function OpporCard({ item }) {
    return (
        <div
            key={item.id}
            className='opporCard'
        >
            <div className="opporCard__imgBox">
                <img
                    src={item.img}
                    alt=""
                    className="opporCard__img"
                />
            </div>
            <div className="opporCard__data">
                <h3 className="opporCard__name">
                    {item.name}
                </h3>
                <p className="opporCard__text">
                    {item.text}
                </p>
            </div>
        </div>
    )
}
