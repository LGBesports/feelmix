import { v4 as uuidv4 } from 'uuid'
import Intro from '../../videos/intro700.mov'



import { useEffect, useState } from 'react'
import useInterval from 'use-interval'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'
import './Home.css'

export const Home = ({ setMenuOpen, setFocusedOpen, backgroundVideo }) => {
  const word1 = 'COMMERCIALS'.split('')
  const word2 = '3D ANIMATION'.split('')
  const word3 = 'MOTION DESIGN'.split('')
  const word4 = '2D ANIMATION'.split('')
  const word5 = 'BROADCAST DESIGN'.split('')
  const word6 = 'CHARACTER ANIMATION'.split('')
  const word7 = 'LIVE ACTION TRAILER'.split('')
  const word8 = 'GAMEDEV'.split('')
  const word9 = 'SOUND DESIGN'.split('')
  const [word, setWord] = useState(word1)
  const [count, setCount] = useState(0)
  const [play, setPlay] = useState(false)

  useInterval(() => {
    setCount(count + 1)

    if (count === 0) setWord(word1)
    if (count === 1) setWord(word2)
    if (count === 2) setWord(word3)
    if (count === 3) setWord(word4)
    if (count === 4) setWord(word5)
    if (count === 5) setWord(word6)
    if (count === 6) setWord(word7)
    if (count === 7) setWord(word8)
    if (count === 8) setWord(word9)
    if (count === 9) {
      setWord(word1)
      setCount(1)
    }
  }, play ? 4000 : null)

  useEffect(() => {
    setPlay(true)
    backgroundVideo.current.play()
  }, [backgroundVideo])

  const { ref, inView } = useInView({
    threshold: .4,
  })
  // useEffect(() => {
  //   setWidth(window.innerWidth)
  //   // setHeight(window.innerHeight)
  // }, []);
  //
  // const [width, setWidth] = useState()
  // const [height, setHeight] = useState()
  
  return (
    <div
      // eslint-disable-next-line
      className={cn('home', { ['home_active']: inView })}
      ref={ref}
    >
      <div className='home__container container'>
        <div className="home__content">


          <div className="home__title home__title_up">
            <div className='home__subtitle'>
              Hi, we are helper’s team of 58 specialists in:
            </div>
            {/*<Focused  setMenuOpen={setMenuOpen} />*/}

          </div>

          <div className="home__title">
            {
              word.map((item, index) => (
                <div className="home__letter-overflow" key={uuidv4()}>
                  <div className='home__letter home__letter_animation'>
                    {item}
                  </div>
                </div>
              ))
            }
          </div>

          <div className="home__text">
            Your outsource full-service CGI department
          </div>

        </div>

        <div className="home__video">

           <video id="video" className='home__video-src ' ref={backgroundVideo} src={Intro} playsInline muted loop />

          {/*<video id="video" className='home__video-src ' ref={backgroundVideo} playsInline autoPlay muted loop>*/}
          {/*  {width  > 700 ?*/}
          {/*    <source src={Intro} type="video/webm" />*/}
          {/*    :*/}
          {/*    <source src={Intro700} />*/}
          {/*  }*/}
          {/*</video>*/}

        </div>
      </div>
    </div >
  )
}