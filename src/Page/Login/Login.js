import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/UseTitle';
import useToken from '../../hooks/useToken';

const Login = () => {
  useTitle('Login')
    const {login, providerLogin, setLoading} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

     // Step- 12 (jwt)
     const [loginUserEmail, setLoginUserEmail] = useState('');
     const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

    // Step- 14 (jwt)
    if(token){
      navigate(from, {replace: true});
  }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    
        login(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setLoginUserEmail(email);
          form.reset();
          // // navigate('/');
          // if(user?.email){
          //   navigate(from, {replace: true})
          //   }
          
            
        })
        .catch(error => console.error(error))
    }


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate('/');
        })

        .catch(error => console.error(error))
        .finally(() => {
          setLoading(false)
        })
        
    }

    return (
        <div className='my-20'>
        <div className="flex justify-center items-center">
          
          <div className="card max-w-sm bg-base-100 py-12 px-6 w-96 p-7 shadow shadow-slate-500 mt-8 rounded-lg h-[550px] ">
          <h1 className="text-5xl font-bold text-center">Login</h1>
      
            <form onSubmit={handleLogin} className="card-body">
              
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered w-full max-w-xs" required/>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered w-full max-w-xs" required/>
                
              </div>
              <div className="form-control w-full max-w-xs mt-6">
                  <input className="btn bg-gradient-to-r from-rose-500 to-purple-500 text-white border-0 font-bold" type="submit" value="Login" />
                
              </div>
              
                          <button onClick={handleGoogleSignIn} className='btn btn-outline bg-gradient-to-r from-rose-500 to-purple-500 text-white border-0 w-full max-w-xs mt-6 font-bold'>GOOGLE</button>
                         
            </form>
            
            <p>Are you new in Mobile Bazar? Please <Link className='text-rose-500' to='/signup'>Sign Up</Link></p>
            
            
        </div>
          </div>
        </div>
    );
};

export default Login;