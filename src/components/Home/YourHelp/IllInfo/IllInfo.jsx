import React from 'react'
import './IllInfo.scss'

export default function IllInfo() {
    return (
        <div className='illInfo'>
            <div className="illInfo__general">
                <div className="illInfo__data">
                    <h2 className="illInfo__title">
                        Kasalliklar va zararkunandalar
                    </h2>
                    <p className="illInfo__text">
                        Hosilingizni qanday kasalliklar va zararkunandalar tahdid qilayotganini bilib oling. Tabiiy usullar va zamonaviy texnologiyalar yordamida ularni samarali bartaraf etish bo‘yicha maslahatlarimizdan foydalaning.

                    </p>
                </div>
                <img
                    src="https://s3-alpha-sig.figma.com/img/05f2/7bba/8d1ea1a8d7339c618fcd6045d51a2cbf?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rm3yPzGpjr-5FnW1hKPxjSxOXy6CDfPil4gfQmSDyR~sR9I2i8PRKXjkSujBXQ7Ccl0JBb0w0SQM8eUEysgTr-H0IWHwn04GVN5ubkD54JpdMONNvOJWhSDj5d4vHSif326pkYM0Zl17PDHnydKFeLgLpVT~LCSBSuQ7ebok7eV9DNuDjCa3ZI7kkTNCKD7ls~4EXHInU8Dqy2bBmG9pdHpWGmtX3ixWAiMri9gKIHdVapmZiHv-HQ~~6nfwLI3tJQ-s2FGAuMuo9q4X6cuOX7kQyW0D5gMwVWjxp9ZIOJu8-i8g4iCSyxOZNE53ihmDapU6OsvwS0tWIXgZZWIh3A__"
                    alt=""
                    className="illInfo__img"
                />
            </div>
        </div>
    )
}
