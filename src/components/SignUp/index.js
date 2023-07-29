import {Component} from 'react'

import './index.css'

const professionList = [
  {id: 1, profession: 'Student'},
  {id: 2, profession: 'Teacher'},
  {id: 3, profession: 'Doctor'},
  {id: 4, profession: 'House Wife'},
  {id: 5, profession: 'Lawyer'},
  {id: 6, profession: 'Frontend Developer'},
]

class SignUp extends Component {
  state = {
    nameInput: '',
    passwordInput: '',
    emailInput: '',
    phoneNumberInput: '',
    activeProfession: professionList[0].profession,
    error: '',
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({emailInput: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumberInput: event.target.value})
  }

  onChangeProfession = event => {
    this.setState({activeProfession: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {
      nameInput,
      passwordInput,
      emailInput,
      phoneNumberInput,
      activeProfession,
    } = this.state

    if (nameInput === '') {
      this.setState({error: 'Name field is required'})
    } else if (passwordInput.length < 8) {
      this.setState({error: 'Password must be 8 characters'})
    } else if (emailInput === '') {
      this.setState({error: 'email field is required'})
    } else if (phoneNumberInput.length < 10) {
      this.setState({error: 'Phone Number must be 10 digits'})
    } else if (!emailInput.includes('@')) {
      this.setState({error: 'Please Enter a valid email'})
    } else {
      this.setState({error: ''})
      const userDetails = {
        Name: nameInput,
        Password: passwordInput,
        Email: emailInput,
        'Phone Number': phoneNumberInput,
        Profession: activeProfession,
      }
      localStorage.setItem('userDetails', JSON.stringify(userDetails))
      const {history} = this.props
      history.replace('/login')
    }
  }

  render() {
    const {
      nameInput,
      passwordInput,
      emailInput,
      phoneNumberInput,
      activeProfession,
      error,
    } = this.state
    return (
      <div className="signup-container">
        <h1 className="signup-heading">Sign Up</h1>
        <form className="form-container" onSubmit={this.onClickSubmit}>
          <div className="input-section">
            <label htmlFor="name" className="lable-text">
              NAME
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input-element"
              id="name"
              onChange={this.onChangeName}
              value={nameInput}
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
              onChange={this.onChangePassword}
              value={passwordInput}
            />
          </div>
          <div className="input-section">
            <label htmlFor="email" className="lable-text">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input-element"
              id="email"
              onChange={this.onChangeEmail}
              value={emailInput}
            />
          </div>
          <div className="input-section">
            <label htmlFor="phone number" className="lable-text">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              className="input-element"
              id="phone number"
              onChange={this.onChangePhoneNumber}
              value={phoneNumberInput}
            />
          </div>
          <div className="input-section">
            <label htmlFor="profession" className="lable-text">
              PROFESSION
            </label>
            <select
              className="input-element"
              onChange={this.onChangeProfession}
              value={activeProfession}
            >
              {professionList.map(eachItem => (
                <option key={eachItem.id}>{eachItem.profession}</option>
              ))}
            </select>
          </div>
          <p className="error-text">{error}</p>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <p className="text">
          Already Have an Account{' '}
          <a href="/login" className="link-item">
            Login
          </a>
        </p>
      </div>
    )
  }
}

export default SignUp
