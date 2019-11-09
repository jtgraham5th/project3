import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import RegisterModal from "../RegisterModal";


// import "./Auth.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to the bars page
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Bars");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Bars");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);

    this.props.loginUser(userData);

  };

  render() {
    const { errors } = this.state;

    return (
      <>
    
      
      <div className="base-wrapper">
        <div className="auth-header">Sign In</div>
        <form className="auth-form" noValidate onSubmit={this.onSubmit}>
        <div className="auth-group">
        <label>
          <div className="auth-label">Email address</div>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            className="auth-input"
          />
          <div className="auth-error">
            {errors.email}
            {errors.emailnotfound}
          </div>
        </label>
      </div>

          <div className="auth-group">
            <label>
              <div className="auth-label">Password</div>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className="auth-input"
              />
              <div className="auth-error">
                {errors.password}
                {errors.passwordincorrect}
              </div>
            </label>
          </div>

          <div>
            <button type="submit" className="auth-button">
              Login
            </button>
          </div>
          <RegisterModal buttonLabel="Register"/>
           
        
         
        </form>
     
      </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
