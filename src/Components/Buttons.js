import React from 'react';
const Buttons = ({actualPage, totalPages, setTotalPages, setActualPage}) => {
    const backButton = () => {
        if(actualPage === 1) {
          return;
        }
        setActualPage(actualPage - 1);
      }
      const nextButton = () => {
        if(actualPage === totalPages) return;
        setActualPage(actualPage + 1);
      }
    return (
        <div className="container flex-column my-3">
            <div className="d-flex justify-content-center mb-1">
                Page {actualPage} of {totalPages}
            </div>
            <div className="row d-flex justify-content-center">
                <button
                    className="btn btn-info mr-1"
                    onClick={backButton}
                    disabled={false}
                >Back</button>
                <button
                    className="btn btn-info ml-2"
                    onClick={nextButton}>
                    Next</button>
            </div>
        </div>
    );
}

export default Buttons;