import React, { useEffect, useState } from "react";
import "./Weather.scss";

import UserBoxImg from '../../../../assets/img/yourHelpuserImg.png'

const api = {
    key: "2cb776c24500cb83a82fb0239251ae06",
    base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            setTime(date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const uzbek = "Andijon";
        fetch(`${api.base}weather?q=${uzbek}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => setWeatherData(result));
    }, []);

    return (
        <div className="weather">
            <img
             src={UserBoxImg}
             alt=""
             className="weather__userBoxImg"
             />
            <h2 className="weather__title">Ob havo malumoti</h2>
            <div className="weather__general">

                <div className="weather__header">
                    <p className="weather__inner">
                        {weatherData.name} {" "}
                        Paxtaobod tumani

                    </p>
                    <div className="weather__details">
                        <p className="weather__inner">
                            Harorat: <span>{weatherData.main?.temp} ℃</span>
                        </p>
                        <p className="weather__inner">
                            Namlik: <span>{weatherData.main?.humidity}%</span>
                        </p>
                        <p className="weather__inner">
                            Yog‘ingarchilik:{" "}
                            <span>{weatherData.weather ? weatherData.weather[0]?.description : "Ma'lumot yo'q"}</span>
                        </p>
                    </div>
                </div>
                <div className="weather__main">

                    <div className="weather__dateInfo">
                        <span>shanba</span>
                        <span>{time}</span>
                    </div>
                    <div className="weather__forecast">
                        <div className="weather__forecast-item">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/639c/19d0/008498812befacbffc00a5aa7e840340?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJRcuQFBPfrUzsHQpMWxVVCLcuIGikgvAJTRCRM07K4q4zlb7HE37h7JQXbwTVJSjtVMqLtrsWK~9ODUvoKk5IaGVxnN1sTBotYNpd1-YD714qb1Dl3vw2rSrQVKmNzZBkD1KkgeqzI6VpTXZOxgaGxZ8OnAZMiX6H-fiq2Sjji7Mn0w~REGSMyXUlt6BZPF2WNnFVkG4SIECkaBsfuGCpZox0y~m8j-pD-fN3H4RtCHD1TPfYcWiDh9-LvSNxOUx9kdgxhRID1Od5M055faSdtXYn5PSxA8rJ7rEjK8uo2GZice6Z9bfhGvYBGFFOnVrxGcs3SWFGY1YWTCeb86YQ__"
                                alt=""
                                className="weather__img"
                            />
                            <p>20℃</p>
                            <p>bugun</p>
                        </div>
                        <div className="weather__forecast-item">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/1253/3f2b/661343a4fd288f434f6faffcedc33302?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nMsYl5RZO10nG6izk1n3e4flk6RiffAcPUP8CU1CFELuDz4u0sX6ebJZZJPIKL9m~SbY4q6bap12OOyqJ~Rn0pdBMfoS45cBX0u-B7SCcEs~dVAAPbsm19lutmgmEoMTqIGhr51anC~sbLhkxjOir-EnvIEeb2uM~GZ2sj8~xCZ7kwpxBoRzZvLZz5UMNc3WNPDG9KE2yEfrKnnkHO3ZCaZDV~kUoByRZ9Sdf5Wmdf4cKX--uksF2QSa3IAfI5Cv5dvpCc0vtftLxwwsaqe4BMKKn3omM1aRL2UNoawwJjETVNaw9-6goqOsF-xjt7-1KO6Acsc~RikPVFcbn8NyBg__"
                                alt=""
                                className="weather__img"
                            />
                            <p>12℃</p>
                            <p>ertaga</p>
                        </div>
                        <div className="weather__forecast-item">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/efa8/84fe/d97db864b1f07487dcccbbfb13ca8f06?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QTJyZnnOmGlVWww1fCLj9oepIqrxvsA-COPIY8j0HxdGH6-nxY23EbliFA2SDqp-5Q7kkCsZdRaYcZ5xDxdQ73b0AzGEJEQms4YpVcgawizxZVvwyR4BrJdnF5iFFj6knaIrNwIMRQHlaN0vQCKzppHY1OwZLQjT9xtZ5HbjifSTBWkyPz1Fb9WTdw0kp2S2DXRnawfX3M42F6Xk8Bvel~d4fDJYLL48upAp3P691eL4CP4KcWs7mdqdIDRd89oVAuwg0E6fCDsLloi1xAW3~iaVIEKG7DCYbzWfrWr0tY9PtP6xpDz1FDw-P8KopRCcYZ8IOnswteeZkmfHh5M~8A__"
                                alt=""
                                className="weather__img"
                            />
                            <p>8℃</p>
                            <p>28.10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
