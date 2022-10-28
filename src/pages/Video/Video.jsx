import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Video.css'

export const Video = ({ video, videoTitle }) => {
  useEffect(() => {

  }, [])

  return (
    <div className="video">
      <div className="video__container container">
        <Link className='video__link' to='/showreels'>
          <div className="video__link-icon" />
          Back
        </Link>

        <div className="video__title">{videoTitle}</div>
      </div>

      <video className='video__src' src={video} muted autoPlay loop playsInline controls />
    </div>
  )
}