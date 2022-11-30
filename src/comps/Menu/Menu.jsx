import { Form } from '../../commons/Form'
import PDF from '../../pdf/feelmix.pdf'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import './Menu.css'

export const Menu = ({ setMenuOpen, menuOpen, theme, switchTheme }) => {
  return (
    <div
      // eslint-disable-next-line
      className={cn('menu', { ['menu_active']: menuOpen })}
    >
      <div className="menu__close" onClick={() => setMenuOpen(false)} />

      <div className="menu__nav">
        <NavLink className='menu__link' onClick={() => setMenuOpen(false)} to='./'>
          <div className='menu__link-text'>
            HOME
          </div>
        </NavLink>

        <NavLink className='menu__link' onClick={() => setMenuOpen(false)} to='./about'>
          <div className='menu__link-text'>
            ABOUT
          </div>
        </NavLink>

        <NavLink className='menu__link' onClick={() => setMenuOpen(false)} to='./showreels'>
          <div className='menu__link-text'>
            SHOWREELS
          </div>
        </NavLink>

        <NavLink className='menu__link' onClick={() => setMenuOpen(false)} to='./contacts'>
          <div className='menu__link-text'>
            CONTACTS
          </div>
        </NavLink>

        <label className="menu__link" data-cursor-size="8px">
          NIGHT MODE
          <input
            className='menu__toggle-src'
            id='nightmode'
            type="checkbox"
            onChange={() => switchTheme(!theme)}
            defaultChecked={theme === 'defaultChecked' ? null : 'dark'}
          />
          <label className="menu__toggle" htmlFor='nightmode' />
        </label>

        <div className="menu__contacts">
          <a className="menu__mail" data-cursor-size="8px" href='mailto:hello@feelmix.pro'>HELLO@FEELMIX.PRO</a>
          <a className="menu__tel" data-cursor-size="8px" href='https://www.linkedin.com/in/illia-tkachenko'>LinkedIn</a>
        </div>

        <a
          className="menu__download"
          href={PDF}
          target="_blank"
          rel="noreferrer"
          data-cursor-size="8px"
        >
          <div className="menu__download-icon" />

          <div className="menu__download-content">
            <div className="menu__download-text">DOWNLOAD PRESENTATION</div>
            <div className="menu__download-text">PDF, 6Mb</div>
          </div>
        </a>


      </div>
    </div>
  )
}