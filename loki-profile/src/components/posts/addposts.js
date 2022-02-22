import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PostPosts } from '../../redux/posts/action'
import '../../assets/css/posts.css'

const AddPosts = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')
    const currentUser = JSON.parse(localStorage.getItem("userLokiProfile"))

    const handlePost = () => {
        const body = {
            image: image,
            title: title,
            content: content
        }
        if(currentUser){
            dispatch(PostPosts(currentUser.id, body))
        }
    }
    return(
        <div className='background-profile'>
            <div className='container py-4 '>
                <div className='text-center'>
                    <label className='label-add'>
                        Thêm bài viết
                    </label>
                </div>
                <div className='bg-dark mt-4 p-4'>
                    <button type="button" class="btn-add-image my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Thêm ảnh
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className='text-center my-2 modal-title'>
                                    Thêm link ảnh
                                </div>
                                <div className='row w-100  my-2'>
                                    <label className='col-form-label col-md-3 text-center'>Link ảnh</label>
                                    <input 
                                        className='input-linkanh col-md-9'
                                        value={image}
                                        onChange={text => setImage(text.target.value)}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn-add-image mt-4"  data-bs-dismiss="modal">Lưu lại</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='d-block'>
                            <img src={image} className='image-add-post' alt='image-add-posts' />
                        </div>
                        <div className='row align-items-center my-3'>
                            <label className='col-form-label text-white col-md-3'>Tiêu đề</label>
                            <div className='col-md-9'>
                                <input 
                                    className='form-control'
                                    value={title}
                                    onChange={text => setTitle(text.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row align-items-center my-3'>
                            <label className='col-form-label text-white col-md-3'>Nội dung: </label>
                            <div className='col-md-9'>
                                <textarea 
                                    className='form-control'
                                    value={content}
                                    onChange={text => setContent(text.target.value)}
                                />
                            </div>
                            
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='btn-add-image mt-4' onClick={handlePost}>Đăng bài viết</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPosts