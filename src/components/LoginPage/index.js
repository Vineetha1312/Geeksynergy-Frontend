import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

const LoginPage = props => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setError] = useState('')

  const onChangeNameInput = event => {
    setName(event.target.value)
  }

  const onChangePasswordInput = event => {
    setPassword(event.target.value)
    console.log(event.target.value)
  }

  const onClickLogin = () => {
    const userData = localStorage.getItem('userDetails')
    const parsedData = JSON.parse(userData)
    const userName = parsedData.Name
    const pswd = parsedData.Password

    if (userName === name && pswd === password) {
      const {history} = props
      history.replace('/movies')
    } else {
      setError('Invalid Credentials')
    }
  }

  return (
    <div className="signin-container">
      <h1 className="login-heading">Login</h1>
      <div className="login-form-container">
        <div className="input-section">
          <label htmlFor="name" className="lable-text">
            NAME
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input-element"
            id="name"
            onChange={onChangeNameInput}
            value={name}
          />
        </div>
        <div className="input-section">
          <label htmlFor="password" className="lable-text">
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-element"
            id="password"
            onChange={onChangePasswordInput}
            value={password}
          />
        </div>
        <button type="button" className="submit-button" onClick={onClickLogin}>
          Login
        </button>
      </div>
      <p className="error-text">{errorText}</p>
    </div>
  )
}

export default withRouter(LoginPage)
