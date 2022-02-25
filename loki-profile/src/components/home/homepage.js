import React from 'react'
import '../../assets/css/homepage.css'

import ScrollAnimation from 'react-animate-on-scroll';

const HomePage = () => {
    return (
        <div className='homepage' >
            <div className='header'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <ScrollAnimation
                            animateIn="bounceInLeft"
                            animateOut="bounceInRight"
                            duration={1.5}
                            delay={0}
                        >
                            <label className='text-center text-white fw-bolder name-title'>
                                THANH . 
                            </label>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="bounceInRight"
                            animateOut="bounceInLeft"
                            duration={1.5}
                            delay={0}
                        >
                            <label className='text-danger fw-bolder name-title mx-4'>LIEM</label>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation
                        animateIn="bounceInUp"
                        animateOut="bounceInDown"
                        duration={1.5}
                        delay={0}
                    >
                        <div className='d-flex justify-content-center'>
                            <label className='my-majoy'>
                                Designer & Coder
                            </label>
                        </div>
                    </ScrollAnimation>
                    
                </div>
            </div>
            <div className='middle'>
                <div className='container'> 
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <ScrollAnimation 
                                animateIn='fadeInLeft'
                                duration={1}
                                delay={0}>
                                <img 
                                    src="https://scr.vn/wp-content/uploads/2020/07/anh-avatar-dep-5.jpg"
                                    alt="Italian Trulli" 
                                    className='about-me-image'
                                />
                            </ScrollAnimation>
                            
                        </div>
                        <div className='col-md-5'>
                            <ScrollAnimation 
                                animateIn='fadeIn'
                                duration={2}
                                delay={1}>
                                <label className='about-title'>About me</label>
                                <label className='about-content'>
                                    Kết nối yêu thương đến mọi người, 
                                    yêu thích kết bạn.
                                    Thích đi du lịch và đọc truyện.
                                    Sở trường code React Native + ReactJs
                                </label>
                                <button className='btn-connect mt-3'>Liên hệ</button>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <div className='middle1'>
                <div className='container'> 
                    <div className='row'>
                        <div className='col-md-6'>
                            <ScrollAnimation 
                                animateIn='fadeIn'
                                duration={2}
                                delay={1}>
                                <label className='about-title'>My favorite</label>
                                <label className='about-content'>
                                    Game và truyện là đôi bạn thân, 
                                    Với tôi thì game là giải trí, truyện là thư giãn
                                    nên chúng đều có mặt trong bảng biểu hàng ngày
                                </label>
                                <button className='btn-connect mt-3'>About more</button>
                            </ScrollAnimation>
                        </div>
                        <div className='col-md-5 d-flex justify-content-center'>
                            <ScrollAnimation 
                                animateIn='fadeInRight'
                                duration={1}
                                delay={0}>
                                <img 
                                    src="https://i.pinimg.com/originals/92/1d/6e/921d6ec30a3f911a05b6bb939c9ae303.png"
                                    alt="Italian Trulli" 
                                    className='about-me-image'
                                />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <div className='middle2'>
                <div className='container'> 
                    <div className='row '>
                        <div className='col-md-4'>
                        <ScrollAnimation 
                            animateIn='flipInY'
                            animateOut='flipOutY'
                            duration={1}
                        >
                            <div className='d-flex  justify-content-center'>
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_UjBHJouKg2ZIW7DRdKGF_9B_UPa_t2qZg&usqp=CAU"
                                    alt="Italian Trulli" 
                                    className='my-degree-image'/>
                            </div>
                            
                            <div className='text-center mt-4'>
                                <label className='my-degree-title'>Liên quân mobie</label>
                                <label className='my-degree-content d-block'>ID: </label>
                            </div>
                        </ScrollAnimation>
                            
                        </div>
                        <div className='col-md-4 justify-content-center'>
                            <ScrollAnimation 
                                animateIn='flipInY'
                                animateOut='flipOutY'
                                duration={1}
                            >
                                <div className='d-flex  justify-content-center'>
                                    <img 
                                        src="https://doithuongpro.com/wp-content/uploads/2021/08/hinh-nen-pubg-16.jpg"
                                        alt="Italian Trulli" 
                                        className='my-degree-image'/> 
                                </div>
                                
                                <div className='text-center mt-4'>
                                    <label className='my-degree-title'>PUBG</label>
                                    <label className='my-degree-content d-block'>ID: </label>
                                </div>
                            </ScrollAnimation>
                            
                        </div>
                        <div className='col-md-4 justify-content-center'>
                            <ScrollAnimation 
                                animateIn='flipInY'
                                animateOut='flipOutY'
                                duration={1}
                            >
                                <div className='d-flex  justify-content-center'>
                                    <img 
                                        src="https://khoanh24.com/uploads/w750/2020/03/20/anh-avatar-game-2_5f30c454d.jpg"
                                        alt="Italian Trulli" 
                                        className='my-degree-image'/>
                                </div>
                                
                                <div className='text-center mt-4'>
                                    <label className='my-degree-title'>Age Of Z</label>
                                    <label className='my-degree-content d-block'>Sever 192</label>
                                </div>
                            </ScrollAnimation>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage