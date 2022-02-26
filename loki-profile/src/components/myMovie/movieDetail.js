import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/movie.css'
import { Link, useLocation } from 'react-router-dom';
import { getMovie } from '../../redux/myMovie/action';
import moment from 'moment';

const MovieDetail = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  const listMovie = useSelector((store) => store.movie.listMovie)
  const [idYoutube, setIdYoutube] = useState('')
  const currentUser =  JSON.parse(localStorage.getItem("userLokiProfile"))

  useEffect(() => {
    if(state){
      if(state.item.link.includes('youtube.com')){
        let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
        let id = state.item.link.match(re)[7];
        setIdYoutube(id)
     }
    }
  }, [state]) 
  useEffect(() => {
    dispatch(getMovie(state.userId))
  },[])
  return(
    <div className='background-profile'>
      <div className='p-4 container'>
        <div className=''>
          <div className='row bg-dark'>
            <div className='col-md-8'>
              <div>
                <YouTube
                  videoId={idYoutube}                   
                  className='movie-detail'                       
                />
              </div>
            </div>
            <div className='col-md-4 p-4'>
              <label className='text-white movie-title d-block'>Phim: {state.item.title}</label>
              <label className='text-white movie-content d-blok mt-4'>Phim: {state.item.content}</label>
            </div>
          </div>
        </div>
        <div className='my-3 bg-dark'>
          <div className='p-4'>
            <label className='title-new-film text-white'>Phim mới thêm</label>
          </div>
          <div>
            {
              listMovie && listMovie.map((item, index) => (
                item.id != state.item.id &&
                <ItemMovie
                  key={index}
                  item={item}
                  currentUser={currentUser}
                />
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MovieDetail

const ItemMovie = (props) => {
  const {currentUser, item } = props;

  return (
      <div className='item-posts mt-2 p-4 bg-dark rounded-3'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='text-white'>
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
          <div className='col-md-7 text-white'>
            <div className='d-flex align-items-center'>
              <img src={currentUser.avatar} className='avatar-image' alt='possss' />
              <div className='mx-2 text-white'>
                  <div className='name-user-post'>{currentUser.fullName}</div>
                  <div className='create-date'>{moment(item.createAt).format('DD/MM/YYYY')}</div>
              </div>
            </div>
            <div className='new-film-title1 text-white mt-3'>
              {item.title} 
            </div>
            <div className='new-film-content mt-4'>
              {item.content}
            </div>
            
          </div>
        </div>
      </div>
  )
}