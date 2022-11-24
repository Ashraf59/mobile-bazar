import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa';
// import img from '../../src/Assets/signup/Signup.svg';
import { AuthContext } from '../../context/AuthProvider';

// import UseTitle from '../Hooks/UseTitle';


const Signup = () => {
    const {createUser, providerLogin, setLoading} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();

    // UseTitle('Sign Up')


    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate('/');
        })
        .catch(error => console.error(error));
      }

      const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            console.log(handleGoogleSignIn);
        })

        .catch(error => console.error(error))
        .finally(() => {
          setLoading(false)
        })
        
    }
    return (
        <div className='my-20'>
        <div className="flex justify-center items-center">
          {/* <div>
              <img className="max-w-sm md:max-w-md lg:max-w-md rounded-lg shadow-2xl" src={img} alt="" />
          </div> */}
          <div className="card max-w-sm bg-base-100 py-12 px-6 w-96 p-7 shadow shadow-slate-500 mt-8 rounded-lg h-[620px] ">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
      
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered w-full max-w-xs" />
              </div>
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
                  <input className="btn bg-gradient-to-r from-rose-500 to-purple-500 text-white border-0" type="submit" value="Sign Up" />
                
              </div>
              {/* <div className='text-center mt-3'>
      
                          <button className="btn btn-outline btn-error bg-gradient-to-r hover:from-rose-500 hover:to-purple-500 text-white w-full"><FaGoogle onClick={handleGoogleSignIn} className='me-3 font'/></button>
                          </div> */}
                          <div className='text-center mb-2 mt-3'>

                            <button className="btn btn-outline btn-error w-full"><FaGoogle onClick={handleGoogleSignIn} className='me-3 font'/></button>
                        </div>  
            </form>
            <div className='mb-6'>
            <p className='text-center'>Already have an account? Please <Link className='font-semibold text-rose-700' to = '/login'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;