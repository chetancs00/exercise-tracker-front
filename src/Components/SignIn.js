import Axios from 'axios'
import React, { useState } from 'react'
import { Toast } from 'react-bootstrap';
import Loader from './Loader';

const SignIn = () => {
   

//   initializeToast = (option) => {
//         toast(option)
//   }

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [userData, setUserData] = useState({})
const [loading, setLoading] = useState(false)
let token

const openAI = () => {


fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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',
  },
  body: JSON.stringify({
    model : "gpt-3.5-turbo",
    messages : [{"role": "user", "content": "How to loop over objects in Javascript?"}],
    // max_tokens: 5,
    // n: 1,
    // stop: '\n',
  }),
})
.then(response => response.json())
.then(data => console.log(data));
}

  
  const onChangePassword =(e) => {
    setPassword(e.target.value)
  }

  const onChangeEmail = (e) => {
    
    setEmail(e.target.value)
  }

  const onSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();

    const user = {
      email: email,
      password:password,
    }

    console.log(user);

   await Axios.post('http://localhost:5000/users/signin', user)
      .then(res => { token = res.data.token;
        console.log(res)  
        setUserData(res.data.user)
        setLoading(false)
        localStorage.setItem("auth-token", token)})
        .catch((error) => {
          console.log(error);
         setLoading(false)
        });
     
    setEmail('')
    setPassword('')
  }

  return (
    <>
    {loading ? <Loader loading={loading} /> : 
     <div>
     <form onSubmit={onSubmit}>
      <div className="form-group"> 
       
        <label>Email: </label>
        <input  type="text"
            required
            className="form-control"
            value={email}
            onChange={onChangeEmail}
            />
        <label>Password: </label>
        <input  type="text"
            required
            className="form-control"
            value={password}
            onChange={onChangePassword}
            />
      </div>
      <div className="form-group">
        <input type="submit" value="Sign In" className="btn btn-primary" />
      </div>
    </form>
    <h1>Logged in as {userData.username}</h1>
</div>}
   {/* <button onClick={openAI}>Connect to openAI</button> */}
    </>
  )
}

export default SignIn