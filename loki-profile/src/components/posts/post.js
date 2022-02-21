import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../../redux/posts/action'
import '../../assets/css/posts.css'
import moment from 'moment'


const Posts = () => {
    const dispatch = useDispatch();
    const listPosts = useSelector((store) => store.posts.listPosts)
    const currentUser =  JSON.parse(localStorage.getItem("userLokiProfile"))
    const userId = currentUser.id

    useEffect(()=>{
        dispatch(getPosts(userId))
    },[])
    // console.log(currentUser)
    return(
        <div className='container'>
            <div className='add-post my-4'>
                <Link to='/add-posts'>
                    <button className='btn btn-primary'>thêm bài viết</button>
                </Link>
            </div>
            {
                listPosts && 
                listPosts.map((item, index) => (
                    <div className=' item-posts my-2' key={index}>
                        <div className='d-flex align-items-center'>
                            <img src={currentUser.image} className='avatar-image' />
                            <div className='mx-2'>
                                <div className='name-user-post'>{currentUser.name}</div>
                                <div className='create-date'>{moment(item.createAt).format('DD/MM/YYYY')}</div>
                            </div>
                            
                        </div>
                        <div className='mt-4'>
                            <img src={item.image} className='post-image' />
                            <div className='post-title mt-3'>
                               {item.title} 
                            </div>
                            <div className='post-content'>
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts