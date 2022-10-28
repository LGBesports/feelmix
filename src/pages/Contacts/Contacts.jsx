import { Form } from '../../commons'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'
import './Contacts.css'

export const Contacts = () => {
  const { ref, inView } = useInView({
    threshold: .4,
  })

  return (
    <div className={cn('contacts', { ['contacts_active']: inView })} ref={ref}>
      <div className="contacts__container container">
        <div className="contacts__content">
          <div className="contacts__title gradient">We’re looking for agencies, studios and creative producers us around the globe</div>
          <div className="contacts__text">We are always ready to discuss your tasks and offer ideas and solution options. So please don’t hesitate and get in touch if you’d like to collaborate.</div>

          <div className="contacts__wrapper">
            <div className="contacts__wrap">
              <div className="contacts__description">You can E-mail or WhatsApp us</div>
              <a className="contacts__link" data-cursor-size="8px" href="mailto:hello@feelmix.pro">hello@feelmix.pro</a>
              <a className="contacts__link" data-cursor-size="8px" href="https://www.linkedin.com/in/illia-tkachenko">LinkedIn</a>
            </div>

            <a className="contacts__download" target="_blank" href="/static/media/feelmix.f81f00158369bef02dbf.pdf" data-cursor-size="8px">
              <div className="contacts__download-icon"></div>
              <div className="contacts__download-content">
                <div className="contacts__download-text">DOWNLOAD PRESENTATION</div>
                <div className="contacts__download-text">PDF, 6Mb</div>
              </div>
            </a>
          </div>
        </div>

        <Form />
      </div>
    </div >
  )
}