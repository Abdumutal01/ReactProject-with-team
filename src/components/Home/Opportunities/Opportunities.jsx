import React from 'react'
import './Opportunities.scss'

import OpportunitiesJson1 from '../../../assets/json/Opportunities1.json'
import OpportunitiesJson2 from '../../../assets/json/Opportunities2.json'
import OpporCard from './OpporCard/OpporCard'

export default function Opportunities() {
  return (
    <div className="opportunities">
      <div className="container">
        <h2 className="opportunities__title">
          IMKONIYATLAR
        </h2>
        <div className="opportunities__general1">
          {
            OpportunitiesJson1.map(item =>(
              <OpporCard item={item} />
            ))
          }
        </div>
        <div className="opportunities__general2">
          {
            OpportunitiesJson2.map(item =>(
              <OpporCard item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
