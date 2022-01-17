import React, {useState} from 'react'
import styled from 'styled-components'
import {Icon} from '@iconify/react';
import './Header.css'

function Header() {


    return (
        
      <div className='Header'>
          <a className='HeaderLogo'>
              <h1>DEX</h1>
          </a>
        
        <div className="headerTitles">
        <a href="">Post Art</a>
        <a href="">Most Popular</a>

        </div>
        
         <Icon  className="accountIcon" icon="ic:baseline-account-circle" />
        
      </div>
    )
}

export default Header


