import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/posts/action'

const Posts = () => {
    const dispatch = useDispatch();
    const listPosts = useSelector((store) => store.posts.listPosts)

    useEffect(()=>{
        dispatch(getPosts())
    },[])
    console.log(listPosts)
    return(
        <div>
            posts
        </div>
    )
}

export default Posts