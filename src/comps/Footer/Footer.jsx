import { NavLink } from 'react-router-dom'
import './Footer.css'

export const Footer = ({ setMenuOpen, setFocusedOpen }) => {
  return (
    <div className='footer'>
      <div className='footer__container container'>
        <div className='footer__item footer__item_mail'>
          <a className='footer__link' target="_blank" rel="noreferrer" data-cursor-size="8px" href='mailto:hello@feelmix.pro'>
            <div className="footer__link-text">HELLO@FEELMIX.PRO</div>
          </a>
        </div>

        <div className='footer__item'>
          <div className='footer__nav'>
            <NavLink
              className='footer__link'
              data-cursor-size="8px"
              onClick={() => {
                setFocusedOpen(false)
                setMenuOpen(false)
              }}
              to='./'
            >
              <div className='footer__link-text'>HOME</div>
            </NavLink>

            <NavLink
              className='footer__link'
              data-cursor-size="8px"
              onClick={() => {
                setFocusedOpen(false)
                setMenuOpen(false)
              }}
              to='./about'>
              <div className='footer__link-text'>ABOUT</div>
            </NavLink>

            <NavLink
              className='footer__link'
              data-cursor-size="8px"
              onClick={() => {
                setFocusedOpen(false)
                setMenuOpen(false)
              }}
              to='./showreels'>
              <div className='footer__link-text'>SHOWREELS</div>
            </NavLink>

            <NavLink
              className='footer__link'
              data-cursor-size="8px"
              onClick={() => {
                setFocusedOpen(false)
                setMenuOpen(false)
              }}
              to='./contacts'>
              <div className='footer__link-text'>CONTACTS</div>
            </NavLink>
          </div>
        </div>

        <div className='footer__item footer__item_whatsapp'>
          <a
            className='footer__link footer__link_whatsapp'
            target="_blank"
            rel="noreferrer"
            data-cursor-size="8px"
            href='whatsapp://send?phone=9720509341150'
          >
            WHATSAPP US
            <div className='footer__link-arrow' />
          </a>
        </div>
      </div >
    </div >
  )
}