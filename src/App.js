import React, { useState, useEffect } from 'react';
import Errors from './Components/Errors';
import Form from "./Components/Form";
import ListImage from './Components/ListImage';
import { getImages } from "./services/images";
function App() {
  const [keyword, setKeyword] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [notFound, setNotFound] = useState(false)
  useEffect(() => {
    if (keyword === "") return
    getImages(keyword, actualPage)
      .then(res => {
        setImages(res.hits);
        setTotalPages(Math.ceil(res.totalHits / 32));
        if(res.totalHits === 0) setNotFound(true)
      });
  }, [keyword, actualPage]);
  const backButton = () => {
    if (actualPage === 1) {
      return;
    }
    setActualPage(actualPage - 1);
  }
  const nextButton = () => {
    if (actualPage === totalPages) return;
    setActualPage(actualPage + 1);
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 text-center mb-3">
search something</h1>
        <Form txt={setKeyword} />
      </div>
      <ListImage images={images} />
      {notFound ? <Errors txt="Ups. Nothing was found!"/> : null}
      {images.length > 0 ? (
        <>
        <ListImage images={images} />
        <div className="container flex-column my-3">
        <div className="d-flex justify-content-center mb-1">
          Page {actualPage} of {totalPages}
        </div>
        <div className="row d-flex justify-content-center">
          {actualPage !== 1 ? (
            <button
              className="btn btn-info mr-1"
              onClick={backButton}
            >Back</button>) : null
          }
          {
            totalPages !== actualPage ? (
              <button
                className="btn btn-info ml-2"
                onClick={nextButton}>
                Next</button>
            ) : null
          }
        </div>
      </div>
      </>
      ):null}
    </div>
  );
}

export default App;
