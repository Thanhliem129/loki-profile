import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../redux/auth/action'

const SignUp = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        const body = {
            name: name,
            password: password,
            image: 'https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg'
        }
        dispatch(signUp(body))
    }
    return (
        <div className='background-profile'>
            <div className='container'>
                <div className='text-center login-label text-white pt-4'>
                    Đăng ký 
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
                        <button className='btn-add-image text-white my-3' onClick={handleSignUp}>Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;