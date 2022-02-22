import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/auth/action'
import  '../../assets/css/login.css'
const Login = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const listUser = useSelector((store) => store.auth.listUser)

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

    useEffect(()=> {
        dispatch(getUser())
      },[])
    return (
        <div className='background-profile'>
            <div className='container'>
                <div className='text-center login-label text-white pt-4'>
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
                </div>
                
            </div>
            
        </div>
    )
}

export default Login;