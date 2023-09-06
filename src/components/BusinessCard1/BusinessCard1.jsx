import React from 'react'
import double_mix_tap from '../../assets/double-mix-tap.png'
import sink from '../../assets/sink.png';
import shower_mixer from '../../assets/shower-mixer.png';
import door_lock from '../../assets/door-locks.png'
import toilet from '../../assets/toilet.png'
import towel_holder from '../../assets/towel-holder.png'
import curtain_holder from '../../assets/curtain-holder.png'
import tissue_holder from '../../assets/tissue-holder.png'
import soap_dispenser from '../../assets/soap-dispenser.png'
import tap from '../../assets/tap.png'
import gate_valve from '../../assets/gate-valve.png'
import './businessCard1.css'

const BusinessCard1 = () => {
  return (
    <>
    <div className="card-wrapper">
      <span className='dmt'>
        <img src={double_mix_tap} alt="dmt" />
      </span>

      <span className='tap'>
        <img src={tap} alt="tap" />
      </span>

      <span className='sink'>
        <img src={sink} alt="sink" />
      </span>

      <span className='towel-holder'>
        <img src={towel_holder} alt="towel-holder" />
      </span>

      <span className='shower-mixer'>
        <img src={shower_mixer} alt="shower-mixer" />
      </span>

      <div className='company'>
        <h2 className='title'>Pekim's Hardware</h2>
        <p className='sales-person'>peter kinyua</p>
        <p className='role'>Business Owner</p>
        {/* <p className='role'>Sales Executive</p> */}
        <p className='phone'><i class="fas fa-phone"></i> 0791 009 379</p>
        <p className='location'><i class="fas fa-map-marker-alt"></i> Sheikh Karume</p>
      </div>

      <span className='door-lock'>
        <img src={door_lock} alt="door-lock"/>
      </span>

      <span className='curtain-holder'>
        <img src={curtain_holder} alt="curtain-holder"/>
      </span>

      <span className='curtain-holder'>
        <img src={curtain_holder} alt="curtain-holder"/>
      </span>

      <span className='soap-dispenser'>
        <img src={soap_dispenser} alt="soap-dispenser"/>
      </span>

      <span className='tissue-holder'>
        <img src={tissue_holder} alt="tissue-holder"/>
      </span>

      <span className='toilet'>
        <img src={toilet} alt="toilet"/>
      </span>

      <span className='gate-valve'>
        <img src={gate_valve} alt="gate-valve"/>
      </span>
    </div>
    </>
  )
}

export default BusinessCard1