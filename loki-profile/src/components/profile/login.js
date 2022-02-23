import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, signUp } from '../../redux/auth/action'
import  '../../assets/css/login.css'
import {Helmet} from "react-helmet";
import { $ } from 'jquery';
import '../../assets/css/login1.css'

const Login = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const listUser = useSelector((store) => store.auth.listUser)

    

    useEffect(()=> {
        dispatch(getUser())
    },[])

    const handleSignUp = () => {
        const body = {
            name: name,
            password: password,
            image: 'https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg'
        }
        dispatch(signUp(body))
    }

    const handleLogin = () => {
        const body = {
            name: name,
            password: password,
        }
        if(listUser){
            const user = listUser.filter(function (e) {
               return (e.name == body.name && e.password == body.password)
            })
            if(user.length > 0){
                const currentUser = user[0]
                localStorage.setItem('userLokiProfile', JSON.stringify(currentUser))
                setTimeout(() => {
                    window.location.href = `/`
                }, 200);
            }
            else{
                console.log('sai')
            }
        }
    }
    return (
        <div className='background-profile d-flex align-items-center'>
            <div className='container d-flex'>
                {/* <div className='text-center login-label text-white pt-4'>
                    Đăng nhập
                </div>
                <div className='bg-dark p-4 mt-4 rounded-3'>
                    <div>
                        <label className='col-form-label text-white'>Tên tài khoản</label>
                        <input 
                            placeholder='Tên tài khoản' 
                            className='form-control'
                            value={name}
                            onChange={text => setName(text.target.value)}
                        />
                    </div>
                    <div>
                        <label className='col-form-label text-white'>Mật khẩu</label>
                        <input 
                            placeholder='Mật khẩu' 
                            className='form-control'
                            value={password}
                            onChange={text => setPassword(text.target.value)}
                        />
                    </div>
                    <div>
                        <button className='btn-add-image text-white my-3' onClick={handleLogin}>Đăng nhập</button>
                    </div>
                </div> */}
                
            
            
             <div className="container1">
                <Helmet>
                    <script>
                        {`
                            $(".info-item .btn1").click(function () {
                                $(".container").toggleClass("log-in")
                            });
                        `}
                    </script>
                </Helmet>
                <div className="box"></div>
                <div className="container-forms">
                    <div className="container-info">
                    <div className="info-item">
                        <div className="table">
                        <div className="table-cell">
                            <p>
                                Have an account?
                            </p>
                            <div className="btn1">
                                Log in
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="table">
                        <div className="table-cell">
                            <p>
                                Don't have an account? 
                            </p>
                            <div className="btn1">
                                Sign up
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container-form">
                    <div className="form-item log-in">
                        <div className="table">
                        <div className="table-cell">
                            <input 
                                name="Username" 
                                placeholder="Username" 
                                value={name}
                                onChange={text => setName(text.target.value)} />
                            <input 
                                name="Password" 
                                placeholder="Password" 
                                value={password}
                                onChange={text => setPassword(text.target.value)} />
                            <div className="btn1" onClick={handleLogin}>
                                Log in
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="form-item sign-up">
                        <div className="table">
                        <div className="table-cell">
                            <input 
                                name="Username" 
                                placeholder="Username" 
                                value={name}
                                onChange={text => setName(text.target.value)}/>
                            <input 
                                name="Password" 
                                placeholder="Password" 
                                value={password}
                                onChange={text => setPassword(text.target.value)} />
                            <div className="btn1" onClick={handleSignUp}>
                                Sign up
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Login;