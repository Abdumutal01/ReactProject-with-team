import React, { useEffect, useState } from 'react'

const api = {
    key: "2cb776c24500cb83a82fb0239251ae06",
    base: "https://api.openweathermap.org/data/2.5/"
}

export default function Weather() {


    const [weatherData, setWeatherData] = useState({})
    console.log(weatherData);



    const uzbek = "andijon"

    useEffect(() => {
        fetch(`${api.base}weather?q=${uzbek}&units=metric&&APPID=${api.key}`)
            .then(res => res.json())
            .then((result) => {
                setWeatherData(result)

            })
    },[weatherData])



    return (
        <div>

        </div>
    )
}
