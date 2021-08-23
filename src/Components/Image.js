import React from 'react'
const Image = ({ data }) => {
    const { largeImageURL, likes, views, id, webformatURL} = data
    return (
        <div className="card">
            <img src={webformatURL} className="card-img-top" alt={id}></img>
            <div className="card-body">
                <p className="card-text"><i className="bi bi-eye"></i> {views}</p>
                <p className="card-text"><i className="bi bi-heart"></i> {likes}</p>
                <a 
                className="btn btn-primary btn-block"
                href={largeImageURL} target="__blank"><i className="bi bi-eye-fill"></i> Full width
                </a>
            </div>
        </div>
    );
}
export default Image;