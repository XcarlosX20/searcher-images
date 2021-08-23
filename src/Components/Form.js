import React,{useState} from 'react'
import Errors from './Errors';
const Form = ({txt}) => {
    const [keyword, setKeyword] = useState("");
    const [Err, setErr] = useState(false);
    //https://cdn.pixabay.com/photo/2016/01/10/21/06/eye-1132531_150.jpg
    const handleInput = (e) => {
        setKeyword(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(keyword === ""){
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 2000);
        }else{
            txt(keyword);
        }
    }
    return ( 
        <form onSubmit={onSubmit}>
           {Err ? ( <Errors txt="This field is required"/>):null}
            <div className="row">
                <div className="form-group col-md-8">
                    <input onChange={handleInput} type="text" className="form-control form-control-lg" placeholder="Search any think" />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Search" />
                </div>
            </div>
        </form>
     );
}
 
export default Form;