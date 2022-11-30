import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Showreels, Contacts, Video } from '../../pages'
import './Main.css'

export const Main = ({
  setMenuOpen,
  setFocusedOpen,
  backgroundVideo
}) => {
  const [video, setVideo] = useState()
  const [videoTitle, setVideoTitle] = useState()

  return (

    <div className='main'>
      <div className="main__overflow">
        <Routes>
          <Route
            path='/'
            element={
              <Home
                backgroundVideo={backgroundVideo}
                setFocusedOpen={setFocusedOpen}
                setMenuOpen={setMenuOpen}
              />
            }
          />

          <Route
            path='/about'
            element={
              <About />
            }
          />

          <Route
            path='/showreels'
            element={
              <Showreels
                setVideo={setVideo}
                setVideoTitle={setVideoTitle}
              />
            }
          />

          <Route
            path='/contacts'
            element={
              <Contacts />
            }
          />

          <Route
            path='/showreels/player'
            element={
              <Video
                video={video}
                videoTitle={videoTitle}
              />
            }
          />
        </Routes>
      </div>
    </div >

  )
}