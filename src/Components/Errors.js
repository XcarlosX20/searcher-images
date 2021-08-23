import React from 'react'
const Errors = ({txt}) => {
    return ( 
        <div className="alert alert-primary">
            {txt}
        </div>
     );
}
 
export default Errors;