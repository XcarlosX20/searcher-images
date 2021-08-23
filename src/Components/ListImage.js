import React from 'react'
import Image from './Image';
const ListImage = ({ images }) => {
    if (images.length <= 0) return null
    return (
        <>
            <div className="list-img">
                {
                    images.map(image => (
                        <Image
                            data={image}
                            key={image.id}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default ListImage;