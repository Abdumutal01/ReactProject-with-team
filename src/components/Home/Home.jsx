import React from 'react'
import Opportunities from './Opportunities/Opportunities'
import Together from './Together/Together'
import Doctor from './Doctor/Doctor'
import YourHelp from './YourHelp/YourHelp'
import HomeShopping from './HomeShopping/HomeShopping'
import System from './System/System'
import AboutPlants from './AboutPlants/AboutPlants'
import Connection from './Connection/Connection'
import HomeSlider from './HomeSlider/HomeSlider'

export default function Home() {
    return (
        <section className='home'>
            <Opportunities />
            <Together />
            <Doctor />
            <YourHelp />
            <HomeShopping />
            <System />
            <AboutPlants />
            <Connection />
            <HomeSlider />
        </section>
    )
}
