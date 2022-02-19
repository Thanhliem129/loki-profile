import React from 'react'
import '../../assets/css/homepage.css'

const HomePage = () => {
    return (
        <div className='homepage' >
            <div className='header'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <label className='text-center text-white fw-bolder name-title'>
                            THANH . <label className='text-danger'>LIEM</label>
                        </label>
                        
                    </div>
                    <div className='d-flex justify-content-center'>
                        <label className='my-majoy'>
                            Designer & Coder
                        </label>
                    </div>
                </div>
            </div>
            <div className='middle'>
                <div className='container'> 
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <img 
                                src="https://scr.vn/wp-content/uploads/2020/07/anh-avatar-dep-5.jpg"
                                alt="Italian Trulli" 
                                className='about-me-image'
                            />
                        </div>
                        <div className='col-md-5'>
                            <label className='about-title'>About me</label>
                            <label className='about-content'>
                                Kết nối yêu thương đến mọi người, 
                                yêu thích kết bạn.
                                Thích đi du lịch và đọc truyện.
                                Sở trường code React Native + ReactJs
                            </label>
                            <button className='btn-connect'>Liên hệ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage