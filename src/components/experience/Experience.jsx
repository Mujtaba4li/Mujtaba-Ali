import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
export default function Experience() {
  return (
    <section id='experience'>
      <h5>Skills that I Know</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
      <div className="container__frontend">
        <h3>Front End</h3>
        <div className="experience__content">
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>CSS & Boostrap</h4>
              <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>TailwindCSS</h4>
              <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>Material UI</h4>
              <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
      <div className="container__backend">
      <h3>Back End</h3>
        <div className="experience__content">
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>Java(SpringBoot)</h4>
              <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__detail'>
            <div className="experience__icon">
              <BsPatchCheckFill/>
            </div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
          </article>
         
        </div>
      </div>

      </div>

    </section>
  )
}
