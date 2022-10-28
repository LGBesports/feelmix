import { useState, useRef, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import { useLocation } from 'react-router-dom'
import { Header, Main, Footer, Menu } from './comps'
import { CurrentDate } from './commons'

import cn from 'classnames'
import { Cursor } from 'react-creative-cursor'
import 'react-creative-cursor/dist/styles.css'
import './styles/App.css'

const App = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [focusedOpen, setFocusedOpen] = useState(false)
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
  const backgroundVideo = useRef(null)

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    backgroundVideo.current.play()
  }, [backgroundVideo])

  return (
    <div
      // eslint-disable-next-line
      className={cn('app', { ['app_home']: location.pathname === '/' })}
      data-theme={theme}
      data-cursor-exclusion
    >

      <div className="app__loader">
        <svg width="541" height="83" viewBox="0 0 541 83">
          <path d="M0 82.3842V0.550273C0 0.247475 0.247463 0 0.550247 0H84.1727C84.4752 0 84.7229 0.247205 84.7229 0.550273V13.7398C84.7229 14.0429 84.4757 14.2901 84.1727 14.2901H20.3864C20.0833 14.2901 19.8362 14.5373 19.8362 14.8404V32.3377C19.8362 32.6407 20.0844 32.8879 20.3864 32.8879H81.1602C81.4619 32.8879 81.7105 33.1351 81.7105 33.4382V44.4269C81.7105 44.73 81.4633 44.9772 81.1602 44.9772H20.3864C20.0833 44.9772 19.8362 45.2242 19.8362 45.5275V82.3842C19.8362 82.6873 19.5892 82.9345 19.2859 82.9345H0.550247C0.247193 82.9345 0 82.687 0 82.3842Z" fill="var(--font-color)" />
          <path fillRule="evenodd" clipRule="evenodd" d="M168.835 57.1578V47.6701C168.835 35.8393 162.98 23.6499 143.502 23.6499H115.3C97.6151 23.6499 90.5647 35.0027 90.5647 45.3993V60.3371C90.5647 73.2433 98.3318 82.9232 114.942 82.9232H143.98C163.576 82.9232 168.654 74.2799 168.83 64.1237C168.833 63.9705 168.78 63.8377 168.672 63.7284C168.565 63.6194 168.433 63.5638 168.28 63.5638H150.375C150.079 63.5638 149.837 63.7972 149.825 64.0924C149.656 68.4048 147.38 70.6145 142.785 70.6145H119.841C111.716 70.6145 110.401 65.1171 110.401 59.9787V58.2583C110.401 57.9552 110.648 57.708 110.951 57.708H168.285C168.588 57.708 168.835 57.4608 168.835 57.1578ZM110.959 46.7139H149.276C149.431 46.7139 149.564 46.6575 149.671 46.5466C149.779 46.4357 149.831 46.301 149.826 46.1463C149.654 40.6509 146.925 35.9589 138.722 35.9589H120.439C112.928 35.9589 110.557 40.6522 110.409 46.1488C110.404 46.3026 110.457 46.437 110.564 46.5474C110.672 46.658 110.805 46.7139 110.959 46.7139Z" fill="var(--font-color)" />
          <path fillRule="evenodd" clipRule="evenodd" d="M254.262 33.5079V24.0202C254.262 12.1894 248.406 0 228.928 0H200.727C183.042 0 175.991 11.3528 175.991 21.7494V36.6872C175.991 49.5934 183.758 59.2733 200.369 59.2733H229.406C249.003 59.2733 254.08 50.63 254.257 40.4738C254.259 40.3206 254.206 40.1878 254.099 40.0785C253.991 39.9694 253.859 39.9139 253.706 39.9139H235.801C235.506 39.9139 235.263 40.1473 235.251 40.4425C235.083 44.7549 232.806 46.9646 228.211 46.9646H205.268C197.142 46.9646 195.828 41.4672 195.828 36.3288V34.6084C195.828 34.3053 196.075 34.0581 196.378 34.0581H253.711C254.014 34.0581 254.262 33.8109 254.262 33.5079ZM196.385 23.064H234.703C234.857 23.064 234.99 23.0076 235.098 22.8967C235.206 22.7857 235.258 22.6511 235.253 22.4964C235.081 17.001 232.352 12.309 224.149 12.309H205.865C198.354 12.309 195.984 17.0023 195.835 22.4989C195.831 22.6527 195.884 22.7871 195.991 22.8975C196.098 23.0081 196.231 23.064 196.385 23.064Z" fill="var(--font-color)" />
          <path d="M263.99 0H282.726C283.029 0 283.277 0.247205 283.277 0.550273V82.3842C283.277 82.6873 283.029 82.9345 282.726 82.9345H263.99C263.687 82.9345 263.44 82.6873 263.44 82.3842V0.550273C263.44 0.247205 263.687 0 263.99 0Z" fill="var(--font-color)" />
          <path d="M293.247 23.9658H311.982C312.283 23.9658 312.533 24.213 312.533 24.5161V31.6416C312.533 31.8764 312.672 32.0766 312.892 32.1579C313.113 32.2391 313.35 32.1762 313.502 31.9986C317.714 27.0591 322.092 23.9658 331.413 23.9658H338.412C350.575 23.9658 355.968 28.3453 358.184 31.8432C358.284 32.0016 358.444 32.0934 358.633 32.0988C358.822 32.1042 358.987 32.0208 359.096 31.8686C362.559 27.017 366.689 23.9658 380.833 23.9658H383.28C402.397 23.9658 409.928 33.1675 409.928 46.5516V82.4497C409.928 82.7528 409.68 83 409.377 83H390.641C390.338 83 390.091 82.7504 390.091 82.4497V50.4953C390.091 42.6106 388.896 37.5891 376.349 37.5891H376.173C366.255 37.5891 361.236 42.9666 361.236 51.3316V82.4497C361.236 82.7528 360.989 83 360.686 83H341.95C341.647 83 341.4 82.7507 341.4 82.4497V51.0928C341.4 43.088 338.532 37.5891 327.06 37.5891H325.797C316.237 37.5891 312.533 42.9666 312.533 50.9735V82.4497C312.533 82.7528 312.286 83 311.982 83H293.247C292.943 83 292.696 82.7517 292.696 82.4497V24.5161C292.696 24.2141 292.945 23.9658 293.247 23.9658Z" fill="var(--font-color)" />
          <path d="M420.219 23.9003H438.955C439.255 23.9003 439.505 24.1475 439.505 24.4506V82.3842C439.505 82.6873 439.258 82.9345 438.955 82.9345H420.219C419.916 82.9345 419.669 82.6859 419.669 82.3842V24.4506C419.669 24.1489 419.917 23.9003 420.219 23.9003Z" fill="var(--font-color)" />
          <path d="M419.669 15.9409V0.550273C419.669 0.249903 419.917 0 420.219 0H438.955C439.257 0 439.505 0.247205 439.505 0.550273V15.9409C439.505 16.244 439.258 16.4912 438.955 16.4912H420.219C419.916 16.4912 419.669 16.2426 419.669 15.9409Z" fill="var(--font-color)" />
          <path d="M517.779 0L539.362 0.000539749C539.58 0.000539749 539.769 0.120364 539.861 0.319261C539.953 0.517889 539.923 0.738106 539.783 0.905698L506.245 40.7975C506.071 41.005 506.072 41.3021 506.247 41.5083L540.618 82.0289C540.759 82.1962 540.79 82.4169 540.698 82.6161C540.606 82.8155 540.418 82.9354 540.198 82.9354L519.139 82.9359C518.966 82.9359 518.818 82.8644 518.71 82.7311L493.588 51.6038C493.368 51.3312 492.951 51.3304 492.731 51.6038L467.601 82.7327C467.493 82.8668 467.345 82.9378 467.173 82.9378L446.051 82.9351C445.832 82.9351 445.644 82.8153 445.552 82.6161C445.46 82.4167 445.49 82.1954 445.632 82.0289L480.072 41.5083C480.247 41.3027 480.248 41.0039 480.073 40.7975L446.365 0.905698C446.224 0.738646 446.194 0.517619 446.287 0.319261C446.379 0.120634 446.567 0.000539749 446.786 0.000539749L468.263 0.0010795C468.434 0.0010795 468.584 0.0723263 468.691 0.205914L492.963 30.3363C493.185 30.6118 493.607 30.6078 493.825 30.3293L517.344 0.211851C517.452 0.0744853 517.604 0 517.779 0Z" fill="var(--font-color)" />
        </svg>
        <p className='app__loader-text'>Outsource CGI  team</p>
      </div>

      <div className={
        cn('app__overlay', {
          // eslint-disable-next-line
          ['app__overlay_active']: menuOpen || focusedOpen,
        })
      }
        onClick={() => {
          setMenuOpen(false)
          setFocusedOpen(false)
        }}
      />

      <Cursor isGelly={true} cursorSize={12} />

      <div className='app__header'>
        <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} setFocusedOpen={setFocusedOpen} />
      </div>

      <div className='app__sidebar app__sidebar_left' />

      <div
        className={cn('app__focused', {
          // eslint-disable-next-line
          ['app__focused_active']: focusedOpen
        })}
      >
        <div className="app__focused-window">

          <div className="app__focused-header">
            We are focused
            <div className="app__focused-close" data-cursor-size="8px" onClick={() => setFocusedOpen(false)} />
          </div>
          <div className="app__focused-title app__focused-title_1 gradient">Work with agencies and studios</div>
          <div className="app__focused-text app__focused-text_1">We will help you execute video content production as a remote graphics department. Our passion extends from 2D animation, Motion design to 3D animation, Commercials and GameDev</div>

          <div className="app__focused-title app__focused-title_2 gradient">We strive for comfy cooperation and an extensive creative process</div>
          <div className="app__focused-text app__focused-text_2">The structure of Feelmix is optimised to provide maximum benefit and optimal price to the clients.</div>

          <div className="app__focused-title app__focused-title_3 gradient">We build a long-term partnership with our partners</div>
          <div className="app__focused-text app__focused-text_3">Let's hit it off and discuss your tasks. Can we offer ideas and solution options? Yes, we can! So please don't hesitate and get in touch.</div>
        </div>
      </div>

      <Menu
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        switchTheme={switchTheme}
        theme={theme}
      />

      <div className='app__content'>
        <div className="app__main">
          <Main
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            theme={theme}
            focusedOpen={focusedOpen}
            switchTheme={switchTheme}
            setFocusedOpen={setFocusedOpen}
            backgroundVideo={backgroundVideo}
          />
        </div>
      </div>

      <div className='app__sidebar app__sidebar_right'>
        <CurrentDate />
      </div>

      <div className='app__footer'>
        <Footer setMenuOpen={setMenuOpen} setFocusedOpen={setFocusedOpen} />
      </div>
    </div>
  )
}

export default App
