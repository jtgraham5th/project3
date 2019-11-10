
import axios from 'axios';
import bcrypt from 'bcryptjs';

// // Register User
export const registerUser = (userData, history)  => {

  const password = userData.password;
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);

  userData["password"] = hash;
  
  return axios
    .post("/api/users/register", userData)
    .then(res => res.status)
    
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => res.history.push("/Bars"))
    // .then(res => res.status)
      
};

