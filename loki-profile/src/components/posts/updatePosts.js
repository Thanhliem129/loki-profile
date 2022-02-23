import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updatePosts } from '../../redux/posts/action';



const UpdatePosts = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  const [title, setTitle] = useState(state.title)
  const [content, setContent] = useState(state.content)
  const [image, setImage] = useState(state.image)

  const handleUpdate = () => {
    const body = {
      title: title,
      content: content,
      image: image
    }
    dispatch(updatePosts(state.userId, state.id, body))
  }
  return (
    <div className='background-profile'>
      <div className='container'>
        <div className='text-center text-white login-label py-4'>Chỉnh sửa bài viết</div>

        <div className='bg-dark p-4 rounded-3'>
          <div className='row algin-align-items-center'>
            <button type="button" className="btn-add-image bg-transparent my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img className='image-posts-back' alt='imagesss-update' src={image} />
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
          </div>

          <div className='row algin-align-items-center my-2'>
            <div className='col-md-3 text-white col-form-label text-center'>
              <label>Title</label>
            </div>
            <div className='col-md-9'>
              <input 
                className='form-control' 
                placeholder='Tiêu đề bài viết'
                value={title}
                onChange={text => setTitle(text.target.value)}
              />
            </div>
          </div>

          <div className='row algin-align-items-center my-2'>
            <div className='col-md-3 text-white col-form-label text-center'>
              <label>Content</label>
            </div>
            <div className='col-md-9'>
              <textarea 
                className='form-control' 
                placeholder='Nội dung bài viết'
                value={content}
                onChange ={ text => setContent(text.target.value)}
              />
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn-add-image' onClick={handleUpdate}>Lưu thay đổi</button>
          </div>
        </div>  
        <div className='py-4'></div>
      </div>
    </div>
  )
}

export default UpdatePosts