import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import PDF from '../../pdf/feelmix.pdf'
import './Header.css'

export const Header = ({ setMenuOpen, menuOpen, setFocusedOpen }) => {
  return (
    <div className='header'>
      <div className='header__container container'>
        <NavLink className='header__logo' to='./'>
          <div className='header__logo-src'>
            <svg
              width='200'
              height='30'
              viewBox='0 0 200 30'
              fill='none'
            >
              <path
                d='M0 0.199141V29.7999C0 29.9094 0.0914293 29.9989 0.20352 29.9989H7.13328C7.24547 29.9989 7.3368 29.9095 7.3368 29.7999V16.4682C7.3368 16.3585 7.42823 16.2691 7.54032 16.2691H30.0188C30.1309 16.2691 30.2223 16.1797 30.2223 16.0701V12.0953C30.2223 11.9857 30.1304 11.8962 30.0188 11.8962H7.54032C7.42863 11.8962 7.3368 11.8068 7.3368 11.6972V5.36812C7.3368 5.25849 7.42823 5.16907 7.54032 5.16907H31.133C31.2451 5.16907 31.3365 5.07966 31.3365 4.97003V0.199141C31.3365 0.0895158 31.2449 9.76181e-05 31.133 9.76181e-05H0.20352C0.0915291 9.76181e-05 0 0.0896134 0 0.199141H0ZM199.487 0.000195236L191.504 0C191.439 0 191.383 0.0269426 191.343 0.0766302L182.644 10.9706C182.563 11.0714 182.407 11.0728 182.325 10.9732L173.348 0.0744826C173.308 0.0261617 173.253 0.000390472 173.189 0.000390472L165.245 0.000195236C165.165 0.000195236 165.095 0.0436353 165.061 0.115482C165.027 0.187232 165.038 0.267181 165.09 0.327606L177.557 14.7571C177.622 14.8318 177.622 14.9399 177.557 15.0143L164.819 29.6712C164.766 29.7315 164.755 29.8115 164.789 29.8836C164.823 29.9557 164.893 29.999 164.974 29.999L172.786 30C172.85 30 172.904 29.9743 172.944 29.9258L182.239 18.666C182.321 18.5671 182.475 18.5674 182.556 18.666L191.848 29.9252C191.888 29.9734 191.943 29.9993 192.007 29.9993L199.796 29.9991C199.877 29.9991 199.947 29.9558 199.981 29.8836C200.015 29.8116 200.003 29.7317 199.951 29.6712L187.238 15.0143C187.174 14.9397 187.173 14.8322 187.238 14.7571L199.642 0.327606C199.694 0.266986 199.705 0.187329 199.671 0.115482C199.637 0.0435377 199.567 0.000195236 199.487 0.000195236V0.000195236ZM55.2086 16.9014H41.0362C40.9791 16.9014 40.93 16.8812 40.8903 16.8412C40.8505 16.8012 40.8311 16.7526 40.8327 16.697C40.8876 14.7088 41.7643 13.0111 44.5426 13.0111H51.3049C54.339 13.0111 55.3485 14.7083 55.4121 16.6961C55.4139 16.7521 55.3946 16.8008 55.3548 16.8409C55.315 16.881 55.2657 16.9014 55.2086 16.9014V16.9014ZM62.4428 20.6791V17.2473C62.4428 12.9679 60.2771 8.55877 53.0728 8.55877H42.642C36.1007 8.55877 33.493 12.6653 33.493 16.4259V21.8292C33.493 26.4976 36.3658 29.9989 42.5094 29.9989H53.2496C60.4978 29.9989 62.3758 26.8725 62.441 23.1988C62.4419 23.1434 62.4224 23.0954 62.3827 23.0558C62.3429 23.0164 62.2941 22.9963 62.2375 22.9963H55.6149C55.5056 22.9963 55.4159 23.0807 55.4116 23.1875C55.3492 24.7474 54.5073 25.5467 52.8076 25.5467H44.3216C41.3161 25.5467 40.8299 23.5582 40.8299 21.6995V21.0772C40.8299 20.9676 40.9213 20.8782 41.0334 20.8782H62.2393C62.3514 20.8782 62.4428 20.7888 62.4428 20.6791V20.6791ZM86.8128 8.34323H72.6404C72.5837 8.34323 72.5343 8.32292 72.4946 8.2829C72.4548 8.24307 72.4355 8.19426 72.4369 8.13872C72.4916 6.15072 73.3686 4.45285 76.1469 4.45285H82.9091C85.9432 4.45285 86.953 6.15023 87.0163 8.13793C87.0181 8.19358 86.9987 8.24258 86.959 8.2827C86.9192 8.32282 86.8693 8.34323 86.8128 8.34323V8.34323ZM94.047 12.1209V8.68899C94.047 4.40961 91.8809 0.000585709 84.677 0.000585709H74.2463C67.7054 0.000585709 65.0973 4.10748 65.0973 7.86773V13.271C65.0973 17.9389 67.9701 21.4406 74.1137 21.4406H84.8538C92.1021 21.4406 93.9803 18.3142 94.0452 14.6406C94.0461 14.5854 94.0266 14.537 93.9869 14.4977C93.9471 14.4582 93.898 14.4381 93.8417 14.4381H87.2192C87.1102 14.4381 87.0201 14.5227 87.0159 14.6293C86.9537 16.1891 86.1111 16.9884 84.4118 16.9884H75.9258C72.9208 16.9884 72.4342 15 72.4342 13.1413V12.519C72.4342 12.4093 72.5256 12.32 72.6377 12.32H93.8435C93.9556 12.32 94.047 12.2306 94.047 12.1209V12.1209ZM104.581 9.76181e-05H97.6513C97.5391 9.76181e-05 97.4478 0.0895158 97.4478 0.199141V29.7999C97.4478 29.9095 97.5391 29.9989 97.6513 29.9989H104.581C104.693 29.9989 104.785 29.9095 104.785 29.7999V0.199141C104.785 0.0895158 104.693 9.76181e-05 104.581 9.76181e-05V9.76181e-05ZM115.404 8.64526H108.474C108.363 8.64526 108.271 8.73506 108.271 8.8443V29.7999C108.271 29.9091 108.362 29.9989 108.474 29.9989H115.404C115.516 29.9989 115.608 29.9095 115.608 29.7999V18.4144C115.608 15.5182 116.978 13.573 120.514 13.573H120.981C125.224 13.573 126.285 15.5621 126.285 18.4575V29.7999C126.285 29.9087 126.376 29.9989 126.488 29.9989H133.418C133.53 29.9989 133.621 29.9095 133.621 29.7999V18.5439C133.621 15.5182 135.478 13.573 139.146 13.573H139.211C143.852 13.573 144.294 15.3894 144.294 18.2414V29.7999C144.294 29.9086 144.386 29.9989 144.498 29.9989H151.428C151.54 29.9989 151.631 29.9095 151.631 29.7999V16.8149C151.631 11.9736 148.846 8.64526 141.775 8.64526H140.87C135.638 8.64526 134.111 9.74893 132.83 11.5038C132.79 11.5589 132.728 11.589 132.659 11.5871C132.589 11.5851 132.53 11.5519 132.492 11.4946C131.673 10.2294 129.678 8.64526 125.18 8.64526H122.591C119.143 8.64526 117.524 9.76416 115.966 11.5509C115.91 11.6151 115.822 11.6378 115.741 11.6085C115.659 11.5791 115.608 11.5066 115.608 11.4217V8.8443C115.608 8.73467 115.515 8.64526 115.404 8.64526ZM162.337 8.64526H155.407C155.295 8.64526 155.203 8.73516 155.203 8.8443V29.7999C155.203 29.909 155.295 29.9989 155.407 29.9989H162.337C162.449 29.9989 162.54 29.9095 162.54 29.7999V8.8443C162.54 8.73467 162.448 8.64526 162.337 8.64526ZM155.203 0.199141V5.7662C155.203 5.87534 155.295 5.96525 155.407 5.96525H162.337C162.449 5.96525 162.54 5.87583 162.54 5.7662V0.199141C162.54 0.0895158 162.448 9.76181e-05 162.337 9.76181e-05H155.407C155.295 9.76181e-05 155.203 0.090492 155.203 0.199141Z'
                fill='var(--font-color)'
              >
              </path>
            </svg>
          </div>

          {/* <p className='header__desc'>Feel our skill mix</p> */}
        </NavLink>

        <div className="header__item">
          <a className="header__pdf" href={PDF} target="_blank" data-cursor-size="8px">
            <div className="header__pdf-icon" />
            <div className='header__pdf-text'>DOWNLOAD PRESENTATION</div>
          </a>

          <div
            className={cn('header__burger', { ['header__burger_active']: menuOpen })}
            data-cursor-size="8px"
            onClick={() => {
              setFocusedOpen(false)
              setMenuOpen(!menuOpen)
            }}
          >
            <div className="header__burger-icon" />
            <div className="header__burger-icon" />
            <div className="header__burger-icon" />
          </div>
        </div>
      </div>
    </div >
  )
}