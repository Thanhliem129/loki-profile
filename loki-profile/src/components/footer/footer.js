import React from 'react'
import '../../assets/css/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='contact'>Liên hệ tôi</div>
                <div>
                    <label className='connect-way'>Facebook: </label> 
                    <label className='name-connect'>Đặng Thanh Liêm</label> 
                </div>
                <div>
                    <label className='connect-way'>Zalo: </label> 
                    <label className='name-connect'>Đặng Thanh Liêm</label> 
                </div>
            </div>
        </div>
    )
}

export default Footer