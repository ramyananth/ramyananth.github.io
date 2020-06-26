import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        I am a software developer in <strong>Raleigh, NC</strong> with a
        background in <strong>full stack web development</strong> and{' '}
        <strong>data science.</strong> I love combining my passion for problem
        solving to deliver practical solutions for business needs and ensure the
        best user experiences.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
