import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { registerUser } from "../actions/services";





// import "./Auth.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }


	handleOnChangeUserName = e => {
		this.setState({
			email: e.target.value
		});
	}

	handleOnChangePassword = e => {
		this.setState({
			password: e.target.value
		});
	}

  // componentDidMount() {
  //   // If logged in and user navigates to Register page, should redirect them to dashboard
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/Login");
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors
  //     });
  //   }
  // }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

 onSubmit = e => {

		e.preventDefault();
		const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      // password2: this.state.password2
    };
    console.log(newUser);

		const registerStatus = registerUser(newUser);
			if(registerStatus === 200) {
					this.setState({
					name: '',
					email: '',
					password: '',
					register: true,
					error: false
				});
			} else this.setState({
				error: true,
				register: false
			});
		}









  // onSubmit = e => {
  //   e.preventDefault();

  //   const newUser = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     password: this.state.password,
  //     // password2: this.state.password2
  //   };

  //   this.registerUser(newUser, this.props.history);
  // };

  render() {
    const { errors } = this.state;

    return (

      <div className="base-wrapper">
      <div>Register</div>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            <div>Name</div>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
           
            />
            <div>{errors.name}</div>
          </label>
        </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  
                  
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  
                >
                  Sign up
                </button>

                <div className="bottom-group">
                <Link to="/login" className="link">
                  Sign in
                </Link>
                
              </div>
              </div>
            </form>
          </div>
    );
  }
}

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
  
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
  
//   errors: state.errors
// });

export default Register
// (
//   // mapStateToProps,
//   // { registerUser }
// )(Register);