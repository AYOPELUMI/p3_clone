import React from 'react'

const ImageHolder = () => {
    return (
        <div className='bg-radial from-white via-white to-green-100  w-full lg:hidden'>

            <img loading='eager' className="w-full h-full bg-contain bg-top  mb-3.5 bg-no-repeat " src={"/hero-image.webp"}
            />
            <img loading='eager' src="/design_mobile.webp" alt="design" className='mx-auto' />
        </div>
    )
}

export default ImageHolder