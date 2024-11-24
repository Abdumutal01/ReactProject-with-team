import React from 'react'
import './YourIdeaCard.scss'

export default function YourIdeaCard({ item, yourIdeaCard }) {
    return (
        <div
            key={item.id}
            className={yourIdeaCard}
        >
            <img
                src={item.img}
                alt=""
                className="yourIdeaCard__userImg"
            />
            <p className="yourIdeaCard__text">
                {item.text}
            </p>
            <img
                src={item.iconImg}
                alt=""
                className="yourIdeaCard__iconImg"
            />
        </div>
    )
}
