import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {IoMdMore} from 'react-icons/io'
import {deleteMovie, getMovie} from '../../redux/myMovie/action'

const MyMovie = () => {
  const dispatch = useDispatch();
    const listMovie = useSelector((store) => store.movie.listMovie)
    const currentUser =  JSON.parse(localStorage.getItem("userLokiProfile"))
    const userId = currentUser.id

    useEffect(()=>{
      dispatch(getMovie(userId))
    },[])
  const handelDelete = (userId, id) => {
    dispatch(deleteMovie(userId, id))
}
  return (
    <div className='background-profile'>
      <div className='container'>
        <div className='add-post py-4'>
          <Link to='/add-movie'>
            <button className='btn-add-image'>Thêm phim của bạn</button>
          </Link>
        </div>
        <div className=''>
          {
            listMovie && 
            listMovie.map((item, index) => (
              <ItemMovie 
                currentUser={currentUser} 
                item={item} 
                key={index} 
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

export default MyMovie


const ItemMovie = (props) =>  {
  const {currentUser, item, handelDelete} = props;
  const [show, setShow] = useState(false)

  return (
    <div className='item-posts mt-2 p-4 bg-dark rounded-3'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <img src={currentUser.avatar} className='avatar-image' alt='possss' />
          <div className='mx-2 text-white'>
            <div className='name-user-post'>{currentUser.fullName}</div>
            <div className='create-date'>{moment(item.createAt).format('DD/MM/YYYY')}</div>
          </div>
        </div>
        <div className='edit-post-field'>
          <button className='btn btn-light' onClick={() => setShow(!show)}><IoMdMore /></button>
          {
            show &&
            <div className='edit-post-view'>
              <button className='btn-edit-delete' onClick={handelDelete}>Xóa</button>
            </div>
          }
        </div>
      </div>
        
      <div className='mt-4 text-white'>
        <div className='post-title text-white'>
          {item.title} 
        </div>
        <div className='post-content mb-3'>
          {item.content}
        </div>
        <Link to={{pathname:'/movie-detail', state:{
          item: item,
          userId: item.userId,
        }}}>
          <img 
            src={item.thumnail} 
            className='post-image '
            alt='posttttt'
          />
        </Link>
      </div>
    </div>
  )
}