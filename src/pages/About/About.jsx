  import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'
import './About.css'

export const About = () => {
  const { ref, inView } = useInView({
    threshold: .4,
  })

  return (
    <div className={cn('about', { ['about_active']: inView })} ref={ref}>
      <Marquee className='about__marquee' gradient={false} direction='right' gradientColor={[0, 0, 0]}>
        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>CHARACHTER ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>BROADCAST DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>MOTION DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>3D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>2D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>COMMERCIALS</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>GAMEDEV</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>AR / VR</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>CHARACHTER ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>BROADCAST DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>MOTION DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>3D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>2D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>COMMERCIALS</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>GAMEDEV</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>AR / VR</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>CHARACHTER ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>BROADCAST DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>MOTION DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>3D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>2D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>COMMERCIALS</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>GAMEDEV</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>AR / VR</Link>
        </h1>
      </Marquee>

      <div className="about__container container">
        <div className="about__content">
          <div className="about__left">
            <div className="about__row">
              <div className="about__title gradient">Who we are</div>
              <div className="about__text">We are international team of 58 specialists of 3D artists and motion designers located in several countries with extensive experience and unified management</div>
            </div>

            <div className="about__row">
              <div className="about__title gradient">What we do</div>
              <div className="about__text">We create 3D/2D animation, broadcast design, motion graphics, GameDev and brand content for agencies & production studios worldwide</div>
            </div>
          </div>

          <div className="about__right">
            <div className="about__counter">
              <div className="about__count">11</div>
              Year in business
            </div>

            <div className="about__counter">
              <div className="about__count">58</div>
              Team members
            </div>

            <div className="about__counter">
              <div className="about__count">400+</div>
              Projects done
            </div>
          </div>
        </div>
      </div>

      <Marquee className='about__marquee' gradient={false} direction='left' gradientColor={[0, 0, 0]}>
        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>AR / VR</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>GAMEDEV</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>COMMERCIALS</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>2D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>3D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>MOTION DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>BROADCAST DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>CHARACHTER ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>AR / VR</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>GAMEDEV</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>COMMERCIALS</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>2D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>3D ANIMATION</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>MOTION DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>BROADCAST DESIGN</Link>
        </h1>

        <h1 className='about__marquee-word'>
          <Link className='about__marquee-link' data-cursor-size="8px" to='/showreels'>CHARACHTER ANIMATION</Link>
        </h1>
      </Marquee>
    </div>
  )
}