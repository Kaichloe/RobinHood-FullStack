import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  update(field) {
    if (field === "email"){
      return e => this.setState({
        [field]: e.currentTarget.value.toLowerCase()
      })
    } else {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="login_title">Welcome to Goblinhood</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              required 
              type="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-email"
            />
          </label>
        <br />
          <label>
            <input
              required
              type="password"
              placeholder="Password(min. 10 characters)"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-password"
            />
            <button className="signup-button" type="submit">{this.props.formType}</button>
          </label>
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error+${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </form>
      </div>
    )
  }
}

export default LoginForm;