import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import { loginUser } from "../actions/services";
// import RegisterModal from "./RegisterModal";
// import LoginModal from "./LoginModal";




// import "./Auth.scss";

class Login extends Component {
  constructor(props) {
		super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      loginSuccess: false
    };
  }

	handleOnChangeUserName = (e) =>  {
		this.setState({
			email: e.target.value
		});
	}

	handleOnChangePassword = (e) => {
		this.setState({
			password: e.target.value
		});
  }
  
  onSubmit = async e => {
    e.preventDefault();
		const userData = {
			emaile: this.state.email,
			password: this.state.password
		};

		// const loginResult = await services(userData);

		// if(loginResult !== 200) {
		// 	this.setState({
		// 		error: true,
		// 		loginSuccess: false
		// 	});
		// }
		// else
		// 	this.setState({
		// 		loginSuccess: true,
		// 		error: false
		// 	});
	}

  // componentDidMount() {
  //   // If logged in and user navigates to Login page, should redirect them to the bars page
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/Bars");
  //   }
  // }


  render() {
    const { errors } = this.state;

    return (
      <>
      <div className="base-wrapper">
        <div>Sign In</div>
        <form onSubmit={this.onSubmit}>
        
        <label>
          <div>Email address</div>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            
          />
    
        </label>
     
            <label>
              <div>Password</div>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                
              />
              </label>
          <div>
            <button type="submit">
              Login
            </button>
          </div>
        
        
         
        </form>
     
      </div>
      </>
    );
  }
}



Login.propTypes = {
  loginUser: PropTypes.func.isRequired,

};

export default Login;

