import React from 'react'
import './about.css'
import PageTitle from '../PageTitle'

function About () {
  return (
    <div className='aboutWrapper uk-width-expand uk-margin-large-bottom'>
      <div className='black-box'></div>
      <div className='gray-box'></div>
      <div
        className='white-box uk-flex uk-flex-center'
        uk-scrollspy='cls:uk-animation-slide-bottom; delay:300'
      >
        <div className='about-box'>
          <PageTitle text='About Me' color='dark' />
          <p className='aboutMeText uk-text-justify uk-padding'>
          My name is farhah , i am 24 years old from Nuneaton. I have a kenyan/pakistani background.
           I am a recent graduate in IT and Business who is also inspiring to be a web developer and devlop my carear in tech.
           I am currently a software support analyst who is 
          </p>
        
        </div>
      </div>
    </div>
  )
}

export default About
