import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {updateUser} from '../../redux/auth/action'

const UpdateUser = () => {
  const dispatch = useDispatch()

  const currentUser = JSON.parse(localStorage.getItem("userLokiProfile"))
  
  const [name, setName] = useState(currentUser && currentUser.name)
  const [password, setPassword] = useState(currentUser && currentUser.password)
  const [hobby, setHobby] = useState(currentUser && currentUser.hobby)
  const [phoneNumber, setPhoneNumber] = useState(currentUser && currentUser.phoneNumber)
  const [address, setAddress] = useState(currentUser && currentUser.address)
  const [dateOfBirth, setDateOfBirth] = useState(moment(currentUser && currentUser.dateOfBirth).format('DD/MM/YYYY'))
  const [avatar, setAvatar] = useState(currentUser && currentUser.avatar)
  const [imageCard, setImageCard] = useState(currentUser && currentUser.imageCard)
  const [introduce, setIntroduce] = useState(currentUser && currentUser.introduce)
  const [fullName, setFullName] = useState(currentUser && currentUser.fullName)

  const handleUpdate = () => {
    var myDate = dateOfBirth.split("/");
    var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);

    const body = {
      name: name,
      password: password,
      hobby: hobby,
      phoneNumber: phoneNumber,
      address: address,
      dateOfBirth: newDate.getTime(),
      avatar: avatar,
      imageCard: imageCard,
      introduce: introduce,
      fullName: fullName
    }
    dispatch(updateUser(currentUser.id, body))
  }

  return (
    <div className='background-profile'>
      <div className='container'>
        <div className=' text-center py-4'>
          <label className='login-label text-white'>Chỉnh sửa trang cá nhân</label>
        </div>
        <div className='bg-dark p-4'>
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Tên đăng nhập</label>
            <div className='col-md-8'>
              <input
                placeholder='Tên đăng nhập'
                className='form-control'
                value={name}
                onChange={text => setName(text.target.value)}
              />
            </div>
          </div>
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Họ và tên</label>
            <div className='col-md-8'>
              <input
                placeholder='Họ và tên'
                className='form-control'
                value={fullName}
                onChange={text => setFullName(text.target.value)}
              />
            </div>
          </div>
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Mật khẩu</label>
            <div className='col-md-8'>
              <input
                placeholder='Mật khẩu'
                className='form-control'
                value={password}
                onChange={text => setPassword(text.target.value)}
              />
            </div>
          </div>
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Sở thích</label>
            <div className='col-md-8'>
              <input
                placeholder='Sở thích'
                className='form-control'
                value={hobby}
                onChange={text => setHobby(text.target.value)}
              />
            </div>
          </div>
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Số điện thoại</label>
            <div className='col-md-8'>
              <input
                placeholder='Số điện thoại'
                className='form-control'
                value={phoneNumber}
                onChange={text => setPhoneNumber(text.target.value)}
              />
            </div>
          </div>
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Ngày sinh</label>
            <div className='col-md-8'>
              <input
                placeholder='Ngày sinh'
                className='form-control'
                value={dateOfBirth}
                onChange={text => setDateOfBirth(text.target.value)}
              />
            </div>
          </div>
          <div className='row my-2 align-items-center'>
            <label className='col-md-4 text-white'>Avatar</label>
            <div className='col-md-6'>
              <input
                placeholder='Link avatar'
                className='form-control'
                value={avatar}
                onChange={text => setAvatar(text.target.value)}
              />
            </div>
            <div className='col-md-2'>
              <img className='avatar-update rounded-circle' src={avatar} alt='avatar-update' />
            </div>
          </div>
          <div className='row my-2 align-items-center'>
            <label className='col-md-4 text-white'>Ảnh bìa</label>
            <div className='col-md-6'>
              <input
                placeholder='Link ảnh bìa'
                className='form-control'
                value={imageCard}
                onChange={text => setImageCard(text.target.value)}
              />
            </div>
            <div className='col-md-2'>
              <img className='image-card-update' src={imageCard} alt='card-update' />
            </div>
          </div>
         
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Giới thiệu</label>
            <div className='col-md-8'>
              <textarea
                placeholder='Giới thiệu'
                className='form-control'
                value={introduce}
                onChange={text => setIntroduce(text.target.value)}
              />
            </div>
          </div>
          <div className='row my-2'>
            <label className='col-md-4 text-white'>Địa chỉ</label>
            <div className='col-md-8'>
              <textarea
                placeholder='Địa chỉ'
                className='form-control'
                value={address}
                onChange={text => setAddress(text.target.value)}
              />
            </div>
          </div>
          <div>
            <button className='btn-add-image' onClick={handleUpdate}>Lưu lại</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UpdateUser;