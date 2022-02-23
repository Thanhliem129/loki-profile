import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {IoIosAdd, IoMdMore} from 'react-icons/io'
import moment from 'moment'
import '../../assets/css/profile.css'
import { deletePosts, getPosts } from '../../redux/posts/action'

const Profile = () => {
    const dispatch = useDispatch()
    const currentUser =  JSON.parse(localStorage.getItem("userLokiProfile"))
    const listPosts = useSelector((store) => store.posts.listPosts)
    const userId = currentUser.id

    useEffect(()=>{
        dispatch(getPosts(userId))
    },[])

    const handelDelete = (userId, id) => {
        dispatch(deletePosts(userId, id))
    }
    return (
        <div className='background-profile'>
            <div className='bg-dark'>
                <div className='d-flex justify-content-center container imagecard'>
                    <img src={currentUser.imageCard} className='image-card' alt='imagesss-card' />
                </div>
                <div className='container py-4'>
                    <div className='row'>
                        <div className='d-flex align-items-center col-md-5'>
                            <img src={currentUser.avatar} className='avatar-image-profile' alt='avatar' />
                            <label className='name-profile mx-4'>{currentUser && currentUser.name}</label>
                        </div>
                        <div className='col-md-7 align-self-center d-flex justify-content-end'>
                            <div className=''>
                                <Link className='text-decoration-none' to={'/add-posts'}>
                                    <button className='btn-add-image d-block '><IoIosAdd />Thêm bài viết</button>
                                </Link>
                                <Link className='text-decoration-none' to={'/update-user'}>
                                    <button className='btn-add-image my-2 d-block'><IoIosAdd />Chỉnh sửa trang cá nhân</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className='background-dark'>
                <div className='container'>
                    <div className='row py-4'>
                        <div className='col-md-4'>
                            <div className='bg-dark profile-field p-4'>
                                <label className='text-white profile-item-label'>Giới thiệu</label>
                                <div className='text-center'>
                                    <label className='text-white'>{currentUser.introduce}</label>
                                </div>
                                <label className='text-white profile-item-label'>Sở thích</label>
                                <div className='text-center'>
                                    <label className='text-white'>{currentUser.hobby}</label>
                                </div>
                                <label className='text-white profile-item-label'>Sinh nhật</label>
                                <div className='text-center'>
                                    <label className='text-white'>{moment(currentUser.dateOfBirth).format('DD/MM/YYYY')}</label>
                                </div>
                                <label className='text-white profile-item-label'>Số điện thoại</label>
                                <div className='text-center'>
                                    <label className='text-white'>{currentUser.phoneNumber}</label>
                                </div>
                                <label className='text-white profile-item-label'>Địa chỉ</label>
                                <div className='text-center'>
                                    <label className='text-white'>{currentUser.address}</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8 '>
                            <div className='profile-field bg-dark p-4'>
                            {
                                listPosts && 
                                listPosts.map((item, index) => (
                                    <ItemPost 
                                        currentUser={currentUser} 
                                        item={item} 
                                        key={index}
                                        handelDelete={() => handelDelete(item.userId, item.id)}
                                    />
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile


const ItemPost = (props) =>  {
    const {currentUser, item, handelDelete} = props;
    const [show, setShow] = useState(false)
    
    return (
        <div className='item-posts mt-2 p-4 bg-dark rounded-3'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={currentUser.avatar} className='avatar-image' alt='potssss' />
                    <div className='mx-2 text-white'>
                        <div className='name-user-post'>{currentUser.name}</div>
                        <div className='create-date'>{moment(item.createAt).format('DD/MM/YYYY')}</div>
                    </div>
                </div>
                <div className='edit-post-field'>
                    <button className='btn btn-light' onClick={() => setShow(!show)}><IoMdMore /></button>
                    {
                        show &&
                        <div className='edit-post-view'>
                            <button className='btn-edit-delete mb-2'>
                                <Link to={{pathname:'/update-posts', state: {
                                    userId: item.userId,
                                    id: item.id,
                                    title: item.title,
                                    content: item.content,
                                    image: item.image
                                }}} 
                                className='text-decoration-none text-white'>Sửa bài viết</Link>
                            </button>
                            <button className='btn-edit-delete' onClick={handelDelete}>Xóa</button>
                        </div>
                    }
                </div>
            </div>
            
            <div className='mt-4  text-white'>
                <div className='post-title  text-white'>
                    {item.title} 
                </div>
                <div className='post-content mb-3'>
                    {item.content}
                </div>
                <img 
                    src={item.image} 
                    className='post-image '
                    alt='post-imgasssss'
                />
                
            </div>
        </div>
    )
}