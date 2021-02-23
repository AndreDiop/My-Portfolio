import React from 'react'
import Andre from '../../assets/andreFull.png'
import Start from '../../assets/pressStart.png'
import { Link } from 'react-router-dom'
import "../Landing/styles.css"

const index = () => {
  return (
    <div >
      <div
        className='nes-container is-rounded is-dark'
        id='landingLogoContainer'
      >
        <p className='nes-balloon nes-pointer' id="logoBalloon">
          <img
            src={Andre}
            id='landingLogo'
            alt='Andre Diop full stack engineer stylized in 8-bit'
          />
          <section />
          <Link to='/About'>
            <img src={Start} id='pressStart' alt='Press start text' />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default index
