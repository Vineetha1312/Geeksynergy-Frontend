import Popup from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1690604672/download_vqex7z.jpg"
      alt="company-logo"
      className="logo"
    />
    <Popup
      modal
      trigger={
        <button type="button" className="company-info-button">
          Company Info
        </button>
      }
      position="top right"
    >
      {close => (
        <div className="company-info-section">
          <div className="company-info">
            <p className="company-details">
              <span className="span-text">Company : </span>Geeksynergy
              Technologies Pvt Ltd
            </p>
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <AiOutlineClose size={25} />
            </button>
          </div>
          <p className="company-details">
            <span className="span-text">Address : </span>Sanjayanagar,
            Bengaluru-56
          </p>
          <p className="company-details">
            <span className="span-text">Phone : </span>XXXXXXXXX09
          </p>
          <p className="company-details">
            <span className="span-text">Email : </span>XXXXXX@gmail.com
          </p>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
