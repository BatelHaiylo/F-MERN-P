// import React, { useContext, useState } from "react";
// import "./Form.css";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import {usersContext} from '../../../context/UsersProvider.component';
// import UserSignUpFields from "./UserSignUp";


//     // <div>Sign Up
//     // <div>role</div>
//     // <div>fName</div>
//     // <div>lName</div>
//     // <div>number</div>
//     // <div>mail</div>
//     // <div>dateOfBirth</div>
//     // <div>password</div>
//     // <div>confirm password</div>
//     // </div>

// export default function SignUp() :JSX.Element {
//   const {newUsers,setNewUsers} = useContext(usersContext)
//   const [user,setUser] = useState({}:<UserSignUpFields>)

//   const addNewUser = (user) => {
//     setNewUsers({...user});
//   };
//   const changeInput = (e) => {
//     user[e.target.name] = e.target.value; //generic capture of each input and its value
//   };
//   const handleSubmit = (event) => {
//     console.log("handleSubmit run");
//     event.preventDefault(); // prevent page refresh
//     setNewUsers({...user})
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "50ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <form onSubmit={handleSubmit}>
//         <h1>
//           <b>Sign Up</b>
//         </h1>
//         <span>Please fill in this form to create an account.</span>

//         <TextField
//           id="standard-basic"
//           label="Email"
//           variant="standard"
//           type="text"
//           name="email"
//           defaultValue={User.email}
//           required
//           onChange={changeInput}
//         />
//         <br />

//         <TextField
//           id="standard-basic"
//           label="Password"
//           variant="standard"
//           type="password"
//           name="password"
//           defaultValue={User.password}
//           required
//           onChange={changeInput}
//         />
//         <br />

//         <TextField
//           id="standard-basic"
//           label="Verify Password"
//           variant="standard"
//           type="password"
//           name="password"
//           defaultValue={User.password}
//           required
//           onChange={changeInput}
//         />
//         <br />
        
//         <TextField
//           id="standard-basic"
//           label="First Name"
//           variant="standard"
//           type="text"
//           name="fName"
//           defaultValue={User.fName}
//           required
//           onChange={changeInput}
//         />
//         <br />

//         <TextField
//           id="standard-basic"
//           label="Last Name"
//           variant="standard"
//           type="text"
//           name="lName"
//           defaultValue={User.lName}
//           required
//           onChange={changeInput}
//         />
//         <br />
//         <p>
//           By creating an account you agree to our{" "}
//           <a href="#">Terms and Privacy</a>.
//         </p>
//         <button type="submit" className="primary-btn">
//           DONE
//         </button>
//       </form>
//     </Box>
//   );
// };