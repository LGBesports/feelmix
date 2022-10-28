import './Focused.css'

export const Focused = ({ setMenuOpen, setFocusedOpen }) => {
  return (
    <div
      className='focused'
      onClick={() => {
        window.open('https://www.linkedin.com/in/illia-tkachenko')
      }}
      data-cursor-stick="#focused"
      data-cursor-size="42px"
      data-cursor-magnetic
    >
      <div
        className="focused__wrap"
      >
        <h1 className="focused__wrapper" id="focused">
          <div className="focused__icon" />
        </h1>
      </div>
    </div>
  )
}