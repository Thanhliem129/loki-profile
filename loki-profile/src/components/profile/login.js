import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/auth/action'

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
                localStorage.setItem('user', JSON.stringify(currentUser))
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
        <div>
            <div>
                đăng ký tài khoản
            </div>
            <div>
                <label className='col-form-label'>Tên tài khoản</label>
                <input 
                    placeholder='Tên tài khoản' 
                    className='form-control'
                    value={name}
                    onChange={text => setName(text.target.value)}
                />
            </div>
            <div>
                <label className='col-form-label'>Mật khẩu</label>
                <input 
                    placeholder='Mật khẩu' 
                    className='form-control'
                    value={password}
                    onChange={text => setPassword(text.target.value)}
                />
            </div>
            <div>
                <button className='btn btn-primary' onClick={handleLogin}>Đăng nhập</button>
            </div>
        </div>
    )
}

export default Login;