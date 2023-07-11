import './Footer.css'
import { AiOutlineArrowUp } from 'react-icons/ai'
const Footer = () => {
  function top() {
    scrollTo({
      top: 0
    })
  }
  return (
    <section id='footer'>
      <div className="grid">
        <p>© 2023 Paulo Vitor. All rights reserved.</p>
        <button onClick={top}><AiOutlineArrowUp /></button>
      </div>
    </section>
  )
}

export default Footer

