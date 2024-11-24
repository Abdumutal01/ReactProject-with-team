import React from 'react'
import './DoctorCard.scss'

export default function DoctorCard({ item }) {
    return (
        <div
            key={item.id}
            className='doctorCard'
        >
            <img
                src={item.img}
                alt=""
                className="doctorCard__img"
            />
           <div className="doctorCard__data">
           <h3 className='doctorCard__name'>
                {item.name}
            </h3>
            <div className="doctorCard__emptyDiv"></div>
            <div className="doctorCard__emptyDiv"></div>
            <div className="doctorCard__emptyDiv"></div>
            <div className="doctorCard__emptyDiv"></div>
          
           </div>
        </div>
    )
}
