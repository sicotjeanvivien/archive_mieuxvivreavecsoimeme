import React from 'react'
import testimonials from './../assets/testimonials.json';

export const Testimonials = () => {


    return (
        <div className='container'>
            {testimonials.map((elem, i) => {
                return (
                    <div className="row justify-content-end mt-3 p-2 rounded second-color second-bg-color">
                        <div className="col-8">
                            {elem.title.toUpperCase()}
                        </div>
                        <div className="col-12">
                            {elem.message}
                        </div>
                        <div className="col-4 ">
                            {elem.author}
                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}
