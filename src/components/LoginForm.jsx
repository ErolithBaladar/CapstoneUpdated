import LoginUser from "../api/LoginUsers.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(user + " Pass " + pwd)
      for (var i = 0; i < LoginUser.length; i++){
        if(LoginUser[i].UserName == user && LoginUser[i].PassWord == pwd){
          setSuccess(true);
        }
      }
      setUser("");
      setPwd("");
      //console.log("Success state" + errMsg);
      if (success == false) {
        setErrMsg(true);
        console.log("Error state" + errMsg);
        console.log("Success state" + success);
      }
      console.log("Success state" + errMsg);
      //setSuccess(true);
    } catch (error) {
      setErrMsg("Login Failed");
    }
  };

      if(success == true ) {
        return (
          <>
        <section>
          <h1> Logged In! </h1>
          <br />
        </section>
        </>
        )
      } 
      else if(errMsg == true) {
        return (
          <>
        <section>
          <h1> Wrong password or username </h1>
          <br />
        </section>
        <section>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
        </>
        )
      }
      else {
        return (
          <>
        <section>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
        </>
        )
      }
    
};

export default Login;
