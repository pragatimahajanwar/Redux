import { useState } from 'react'
import React from 'react'
import '../Components/style.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [values, setValues] = useState({
       
        email: "",
        password: ""
    })
    const navigate=useNavigate()

    const[error,setError]=useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
      axios.post('http://localhost:8081/login', values) // First request to /login

        .then(res => {
            if(res.data.status==="success"){
              navigate('/');

            }else{
                setError (res.data.Error);
            }
        })
        .catch(err => console.log(err));
    };
    
  return (
    <div>Login

<div className='d-flex justify-content-center align-items-center bg-primary vh-100 loginPage'>
        <div className='bg-white p-3 rounded w-25 loginForm' >
            <div className='text-danger'>{error && error}</div>
          <h2>Login</h2>
           <form onSubmit={handleSubmit}> 
         
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
              <input
                type="email"
                placeholder='Enter Email'
                name='email'
                 onChange={e => setValues({ ...values, email: e.target.value })}
                className='form-control rounded-0'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label>
              <input
                type="password"
                placeholder='Enter Password'
                name='password'
                onChange={e => setValues({ ...values, password: e.target.value })}
                className='form-control rounded-0'
              />
            </div>
            <button type='submit' className='btn btn-primary w-100 rounded-0'>sign in</button>
            
            <p>You agree to our terms and policies</p>
            <Link to='/' className='btn btn-info border w-100 bg-info rounded-0'>Login</Link>
           
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Login