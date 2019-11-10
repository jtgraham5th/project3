import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { registerUser } from "../actions/services";





// import "./Auth.scss";

// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       password2: "",
//       errors: {}
//     };
//   }


// 	handleOnChangeUserName = e => {
// 		this.setState({
// 			email: e.target.value
// 		});
// 	}

// 	handleOnChangePassword = e => {
// 		this.setState({
// 			password: e.target.value
// 		});
// 	}

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

//   onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   };

//  onSubmit = e => {

// 		e.preventDefault();
// 		const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       // password2: this.state.password2
//     };
//     console.log(newUser);

// 		const registerStatus = registerUser(newUser);
// 			if(registerStatus === 200) {
// 					this.setState({
// 					name: '',
// 					email: '',
// 					password: '',
// 					register: true,
// 					error: false
// 				});
// 			} else this.setState({
// 				error: true,
// 				register: false
// 			});
// 		}









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

//   render() {
//     const { errors } = this.state;

//     return (
//       <div className="base-wrapper">
//         {/* <div className="auth-header">Register</div> */}
//         <form className="auth-form" noValidate onSubmit={this.onSubmit}>
//           <div className="auth-group">
//             <div className="input-field col s12">
//               <input
//                 onChange={this.onChange}
//                 value={this.state.name}
//                 error={errors.name}
//                 id="name"
//                 type="text"
//                 className="auth-input"
//               />
//               <label htmlFor="name">Name</label>
//               <span className="auth-error">{errors.name}</span>
//             </div>
//           </div>
//           <div className="input-field col s12">
//             <input
//               onChange={this.onChange}
//               value={this.state.email}
//               error={errors.email}
//               id="email"
//               type="email"
//               className={classnames("", {
//                 invalid: errors.email
//               })}
//             />
//             <label htmlFor="email">Email</label>
//             <span className="red-text">{errors.email}</span>
//           </div>
//           <div className="input-field col s12">
//             <input
//               onChange={this.onChange}
//               value={this.state.password}
//               error={errors.password}
//               id="password"
//               type="password"
//               className={classnames("", {
//                 invalid: errors.password
//               })}
//             />
//             <label htmlFor="password">Password</label>
//             <span className="red-text">{errors.password}</span>
//           </div>
//           <div className="input-field col s12">
//             <input
//               onChange={this.onChange}
//               value={this.state.password2}
//               error={errors.password2}
//               id="password2"
//               type="password"
//               className={classnames("", {
//                 invalid: errors.password2
//               })}
//             />
//             <label htmlFor="password2">Confirm Password</label>
//             <span className="red-text">{errors.password2}</span>
//           </div>
//           <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//             <button
//               style={{
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px",
//                 marginTop: "1rem"
//               }}
//               type="submit"
//               className="btn btn-large waves-effect waves-light hoverable secondary accent-3"
//             >
//               Sign up
//             </button>

//             <div className="bottom-group">
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(withRouter(Register));
