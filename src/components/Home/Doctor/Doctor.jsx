import React from 'react'
import './Doctor.scss'

import DoctorCard from './DoctorCard/DoctorCard'
import doctorImg3 from '../../../assets/img/doctorImg3.png'


export default function Doctor() {

    const doctorArr = [
        {
            "id":1,
            "name":"Kassalikni aniqlash",
            "img":"https://s3-alpha-sig.figma.com/img/ba22/cc21/cf4a3b12262b16a8a71b5262baa41f13?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AMZlrZF4STnncXk1FZSteKB9fvA2GJ~h597QjEr-vcduT3zlcuks0I-74ZORqpIZhyvPSHAn-wbfcmZ99zKXd98I6fRpfvztHQhGfT1-cRNEAKXgEH-XfPXSTa2cI3H8wQG~dS-1sP4aBMO6mvLQnYQgIyzKmTKnzM6RLMs6dWfMq-wEWiFd9ipcRiEwV9K~w9vA7U5bvM~2ocvsky-H6Ge-B-g~MPsj26fAc6qIWD1V9EadyPXnb90qyDHjnUwjH-8LWxHB96gE16V13sFTD-0oniERJLMg0wF1eutwfWWqxWa1Vh~B6yWw77UhDhA1QUILxs28KiL8d1HvX5Mb4Q__"
        },
        {
            "id":2,
            "name":"Begona o’tni aniqlash",
            "img":"https://s3-alpha-sig.figma.com/img/feb7/fa6c/1f94a299091489d597c40eb76fda7448?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXS~i7-Y~qh8uY6ENoj~yRN5t4TCtL9ZOI-3bEyUZ~Kjk4ebif0uv2ttgZgIJEn2pmsGSbWbX5I1VR0gUUaZcEn3aWucQed~Yodlk8gp4eRc425zyzSMJ4kQAPo~lz2UsPradqNjtIO6u3oboTz61980TorlrllyXOF-6tMnfJfYM7x-3w-0hwgwIx6x0EDD6ASewGPlqJd1ksgV-LCBvxsVSJrex8R8zYUofCJS0CpkQtEVE26B4CxLV9Vy~N7skA4PhepALL5k3fmjaGTyebv8sy7wzfujBoB7qcxU5cM8QI~6iwly786OIxaB18baGm-~Pq2iJvXBTH-o-JR0MA__"
        },
        {
            "id":3,
            "name":"Zararkulandalarni aniqlash",
            "img":`${doctorImg3}`
        }
    ]

    return (
        <div className='container doctor'>
            <h2 className="doctor__title">
                AI DOKTOR
            </h2>

            <p className="doctor__text">
                <span>
                    "Zararli o‘tlar va kasalliklarni aniqlash"
                </span>
                — bu bo‘lim foydalanuvchilarga o‘simliklar va ekinlarning holatini
                skaner orqali tekshirish imkonini beradi. Ilova maxsus texnologiya
                yordamida ekinlarni suratga olib, o‘simlik kasalliklari yoki zararli
                begona o‘tlarni aniqlashga yordam beradi. Bu texnologiya foydalanuvchilarga
                kasalliklar yoki o‘simliklarga zarar yetkazuvchi begona o‘tlarni tezda ko‘rish
                va oldini olish choralarini ko‘rishga yordam beradi. Shu orqali foydalanuvchilar
                ekinlarni sog‘lom saqlash va  unumdorligini oshirish uchun zarur tavsiyalarga ega bo‘lishadi.
            </p>
            <div className="doctor__general">
                {
                    doctorArr.map(item =>(
                        <DoctorCard item={item} />
                    ))
                }
            </div>
        </div>
    )
}
