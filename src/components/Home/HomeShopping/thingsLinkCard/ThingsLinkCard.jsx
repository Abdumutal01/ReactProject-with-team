import React from 'react'
import './ThingsLinkCard.scss'
import { Link } from 'react-router-dom'

export default function ThingsLinkCard({ item }) {
    return (
        <div
            key={item.id}
            className='thingsLinkCard'
        >
            <div className="thingsLinkCard__box">
                <h2 className="thingsLinkCard__title">
                    {item.name}
                </h2>
                <img
                    src={item.img}
                    alt=""
                    className="thingsLinkCard__img"
                />
            </div>
            <Link className='thingsLinkCard__link'>
                <i class="fa-solid fa-arrow-right"></i>
            </Link>
        </div>
    )
}
