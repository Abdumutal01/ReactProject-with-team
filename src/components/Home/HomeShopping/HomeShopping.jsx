import React from 'react'
import './HomeShopping.scss'

import HomeShoppingJson1 from '../../../assets/json/HomeShopping1.json'
import HomeShoppingJson2 from '../../../assets/json/HomeShopping2.json'
import ThingsLinkCard from './thingsLinkCard/ThingsLinkCard'
import BuyThingsCard from './buyThingsCard/BuyThingsCard'


export default function HomeShopping() {
    return (
        <div className='homeShopping'>
            <div className="container">
                <h2 className="homeShopping__title">
                    Bozor
                </h2>
                <div className="homeShopping__general">
                    <div className="homeShopping__thingsLink">
                        {
                            HomeShoppingJson1.map(item => (
                                <ThingsLinkCard item={item} />
                            ))
                        }
                    </div>
                    <div className="homeShopping__buyThings">
                        {
                            HomeShoppingJson2.map(item => (
                                <BuyThingsCard item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
