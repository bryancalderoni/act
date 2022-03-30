import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

interface UserLoginModel{
    email: string,
    password: string,
}


const LoginComponent: React.FC<{loginAction?: () => void}> = ({loginAction}) => {
  const [userData, setUserData] = useState<Partial<UserLoginModel>>({});
  const history = useHistory()
  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(userData)
      fetch('http://80.211.68.52/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(res => {
        loginAction && loginAction()
        console.log(res)
        history.push('/users')
    })
  }
  
  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData({
          ...userData,
          [event.target.name]: event.target.value
      })
    }
  return (
    <div>
      <h1>Login</h1>
      <form  onSubmit={loginHandler}>
          {JSON.stringify(userData)}
        <div className="form-group">
          <input type="email" className="form-control" name="email" onChange={changeData} value={userData.email || ''}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" onChange={changeData} value= {userData.password || ''}/>
        </div>
        <button >Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
