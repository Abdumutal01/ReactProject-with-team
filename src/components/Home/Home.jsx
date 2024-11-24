import React from 'react'
import Opportunities from './Opportunities/Opportunities'
import Together from './Together/Together'
import Doctor from './Doctor/Doctor'
import YourHelp from './YourHelp/YourHelp'

export default function Home() {
    return (
        <div>
            <Opportunities />
            <Together />
            <Doctor />
            <YourHelp />
        </div>
    )
}
