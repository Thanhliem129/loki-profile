import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { PostPosts } from '../../redux/posts/action'

const AddPosts = () => {
    const dispatch = useDispatch();
    const listPosts = useSelector((store) => store.posts.listPosts)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("userLokiProfile")))

    const handlePost = () => {
        const body = {
            image: image,
            title: title,
            content: content
        }
        if(currentUser){
            console.log(currentUser.id)
            dispatch(PostPosts(currentUser.id, body))
            setTimeout(() => {
                window.location.href = `/posts`
            }, 200);
        }
        
    }
    
    return(
        <div>
            Thêm bài viết
            <div>
                <label className='col-form-label'>Link ảnh</label>
                <input 
                    className='form-control'
                    value={image}
                    onChange={text => setImage(text.target.value)}
                />
                <label className='col-form-label'>Tiêu đề</label>
                <input 
                    className='form-control'
                    value={title}
                    onChange={text => setTitle(text.target.value)}
                />
                <label className='col-form-label'>Nội dung: </label>
                <input 
                    className='form-control'
                    value={content}
                    onChange={text => setContent(text.target.value)}
                />
                <div>
                    <button className='btn btn-primary' onClick={handlePost}>Đăng bài viết</button>
                </div>
            </div>
        </div>
    )
}

export default AddPosts