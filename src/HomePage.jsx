import React from 'react'
import './assets/style.scss'
import Seat from './components/Seat'

const HomePage = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="row clearfix">
                    <div className="col-8">
                        <div className="title">
                            <h1 className='fw-bold text-uppercase text-center text-white'>
                                Danh Sách Ghế
                            </h1>
                        </div>
                        <Seat />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage