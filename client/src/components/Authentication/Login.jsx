import React,{useState} from 'react'
import "./Auth.css"

function Login ({setUser}){
  const[username,setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [msg,setMsg]= useState(null);

  function handleSubmit(e){
    e.preventDefault();
    fetch("/login",{
      method: 'POST',
      headers: {
        "Content-Type":"applicaion/json",
      },
      body: JSON.stringify({username, password}),
    }).then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user));
      }
      else
      setMsg("Invalid Username or Password")
    })
  }

  return (
    <div className='auth-page'>
      <div className='auth-title'>
        <h1>Please Login</h1>
      </div>
      <div className="signup">
      <form className='form-control' onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='username'
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        // value={username}
        // onChange={handleChange}
        />
      

        <input 
         type="password"
         id="password"
         autoComplete="current-password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Password"
       
        // value={password}
        // onChange={handleChange}
        />
        {msg?(<div className="error-msg">
          <h5 className="error-text">Invalid username or password!!.</h5>
        </div>
        ):(null)}
        <button className="s-btn" type="submit">Login</button>
      </form>
      </div>
      </div>
  )
}

export default Login