import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/UseTitle';
import useToken from '../../hooks/useToken';


const Signup = () => {
  useTitle('Signup')
    const {createUser, providerLogin, setLoading, updateUser} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();



    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const userdata = form.users.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            const userInfo = {
              displayName: name
            }
            updateUser(userInfo)
            .then(()=> {
              
              form.reset();
              saveUser(name, email, userdata);
            
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.error(error));
      }

      const saveUser = (name, email, user) => {
        const users = { name, email, user };
        fetch('https://mobile-bazar-server-ten.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                // toast.success('user send to database')
                // navigate('/')

                // Step- 10 (jwt)
                setCreatedUserEmail(email);
            })
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
          
          <div className="card max-w-sm bg-base-100 py-12 px-6 w-96 p-7 shadow shadow-slate-500 mt-8 rounded-lg h-[720px] ">
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
                                    <span className="label-text">Buyer/Seller</span>
                                </label>
                                <select name='users' className="select select-bordered w-full max-w-xs">
                                    <option value='user'>user</option>
                                    <option value='seller'>seller</option>
                                 </select>
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
                  <input className="btn bg-gradient-to-r from-rose-500 to-purple-500 text-white border-0 font-bold" type="submit" value="Sign Up" />
                
              </div>
              
                          <button onClick={handleGoogleSignIn} className='btn btn-outline bg-gradient-to-r from-rose-500 to-purple-500 text-white border-0 w-full max-w-xs mt-6 font-bold'>GOOGLE</button>
                         
            </form>
            
            <p>Already have an account? <Link className='text-rose-500' to='/login'>Please login</Link></p>
            
            
        </div>
          </div>
        </div>
      
    );
};

export default Signup;