import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { Scrollbar, Mousewheel, FreeMode, Navigation } from 'swiper'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'

import GameDev from '../../img/GameDev.gif'
import Motion from '../../img/Motion.gif'
import ThreeD from '../../img/3D.gif'
import TwoD from '../../img/2D.gif'

import video1 from '../../videos/video1.mp4'
import video2 from '../../videos/video2.mp4'
import video3 from '../../videos/video3.mp4'
import video4 from '../../videos/video4.mp4'

import 'swiper/css'
import "swiper/css/scrollbar"
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Showreels.css'

export const Showreels = ({ setVideo, setVideoTitle }) => {
  const { ref, inView } = useInView({
    threshold: .4,
  })

  useEffect(() => {
    new Swiper('.showreels__slider', {
      slidesPerView: 'auto',
      centeredSlides: false,
      direction: 'horizontal',
      spaceBetween: 10,
      freeMode: true,
      mousewheel: true,
      navigation: {
        prevEl: '.showreels__prev',
        nextEl: '.showreels__next'
      },
      modules: [FreeMode, Mousewheel, Scrollbar, Navigation],
      loop: false,
      scrollbar: {
        hide: false,
        el: '.showreels__scrollbar',
      },
      className: 'swiper',
    })
  }, [])

  return (
    <div className={cn('showreels', { ['showreels_active']: inView })} ref={ref}>
      <div className="showreels__container container">
        <div className="showreels__header">
          <div className="showreels__title gradient">Showreels</div>
          <div className="showreels__buttons">
            <div className="showreels__prev">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12.3137L2.34315 6.65687L8 1.00001" stroke="var(--font-color)" strokeWidth="2" />
              </svg>
            </div>

            <div className="showreels__next">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6.65685 6.65685L1 12.3137" stroke="var(--font-color)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="showreels__content">
        <div className="showreels__block">
          <div className="showreels__description">Watch shots from projects were carried out by our team</div>
          <div className="showreels__subtitle">Our Expertise</div>

          <div className="showreels__list">
            <div className="showreels__column">
              <div className="showreels__item">3D animation</div>
              <div className="showreels__item">Commercials</div>
              <div className="showreels__item">GameDev</div>
              <div className="showreels__item">AR / VR</div>
            </div>

            <div className="showreels__column">
              <div className="showreels__item">Broadcast design</div>
              <div className="showreels__item">Charachter animation</div>
              <div className="showreels__item">2D animation</div>
              <div className="showreels__item">Motion design</div>
            </div>
          </div>
        </div>

        <div className="showreels__slider swiper">
          <div className='showreels__slider-wrapper swiper-wrapper'>
            <div className="showreels__item swiper-slide">
              <div className="showreels__item-title">
                Commercials
                <br />
                3D animation
                <br />
                Broadcast design
              </div>

              <Link
                className='showreels__link'
                to='./player'
                onClick={() => {
                  setVideo(video1)
                  setVideoTitle('Commercials, 3D animation, Broadcast design')
                }}>
                <svg className='showreels__play' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM11 21.8564L23 14.9282L11 8L11 21.8564Z" fill="var(--font-color)" />
                </svg>
              </Link>

              <img src={ThreeD} alt="" />
            </div>

            <div className="showreels__item swiper-slide">
              <div className="showreels__item-title">
                2D animation
              </div>

              <Link
                className='showreels__link'
                to='./player'
                onClick={() => {
                  setVideo(video3)
                  setVideoTitle('2D animation')
                }}>

                <svg className='showreels__play' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM11 21.8564L23 14.9282L11 8L11 21.8564Z" fill="var(--font-color)" />
                </svg>
              </Link>

              <img src={TwoD} alt="" />
            </div>

            <div className="showreels__item swiper-slide">
              <div className="showreels__item-title">
                Motion design
              </div>

              <Link
                className='showreels__link'
                to='./player'
                onClick={() => {
                  setVideo(video2)
                  setVideoTitle('Motion design')
                }}>

                <svg className='showreels__play' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM11 21.8564L23 14.9282L11 8L11 21.8564Z" fill="var(--font-color)" />
                </svg>
              </Link>

              <img src={Motion} alt="" />
            </div>

            <div className="showreels__item swiper-slide">
              <div className="showreels__item-title">
                GameDev
              </div>

              <Link
                className='showreels__link'
                to='./player'
                onClick={() => {
                  setVideo(video4)
                  setVideoTitle('GameDev')
                }}>

                <svg className='showreels__play' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM11 21.8564L23 14.9282L11 8L11 21.8564Z" fill="var(--font-color)" />
                </svg>
              </Link>

              <img src={GameDev} alt="" />
            </div>
          </div>

          <div className='showreels__scrollbar swiper-scrollbar' />
        </div>
      </div>
    </div >
  )
}