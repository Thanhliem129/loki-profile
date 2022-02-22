import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePosts, getPosts } from '../../redux/posts/action'
import '../../assets/css/posts.css'
import moment from 'moment'
import {IoMdMore} from 'react-icons/io'


const Posts = () => {
    const dispatch = useDispatch();
    const listPosts = useSelector((store) => store.posts.listPosts)
    const currentUser =  JSON.parse(localStorage.getItem("userLokiProfile"))
    const userId = currentUser.id

    useEffect(()=>{
        dispatch(getPosts(userId))
    },[])

    const handelDelete = (userId, id) => {
        dispatch(deletePosts(userId, id))
    }

    return(
        <div className='background-profile'>
            <div className='container'>
                <div className='add-post py-4'>
                    <Link to='/add-posts'>
                        <button className='btn-add-image'>Thêm bài viết</button>
                    </Link>
                </div>
                <div className=''>
                    {
                        listPosts && 
                        listPosts.map((item, index) => (
                            <ItemPost 
                                currentUser={currentUser} 
                                item={item} 
                                index={index} 
                                handelDelete={() => handelDelete(item.userId, item.id)}
                            />
                        ))
                    }
                </div>
                <div className='py-4'></div>
            </div>
        </div>
    )
}

export default Posts

const ItemPost = (props) =>  {
    const {currentUser, item, index, handelDelete} = props;
    const [show, setShow] = useState(false)


    return (
        <div className='item-posts mt-2 p-4 bg-dark rounded-3' key={index}>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={currentUser.avatar} className='avatar-image' />
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
                <img 
                    src={item.image} 
                    className='post-image '
                />
                <div className='post-title mt-3  text-white'>
                    {item.title} 
                </div>
                <div className='post-content'>
                    {item.content}
                </div>
            </div>
        </div>
    )
}