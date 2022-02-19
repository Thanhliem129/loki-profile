import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPosts } from '../../redux/posts/action'

const Posts = () => {
    const dispatch = useDispatch();
    const listPosts = useSelector((store) => store.posts.listPosts)
    const currentUser = localStorage.getItem('userLokiProfile')
    const userId = currentUser.id
    useEffect(()=>{
        dispatch(getPosts(userId))
    },[])
    return(
        <div>
            posts
            <div>
                <Link to='/add-posts'>
                    <button className='btn btn-primary'>thêm bài viết</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Posts