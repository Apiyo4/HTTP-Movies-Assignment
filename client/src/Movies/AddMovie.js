import React, {useState} from 'react';
import Axios from 'axios';
function AddMovie(props){
    const [form, setForm] = useState({

        title: "",
        director: "",
        metascore: '',
        star1: "", 
        star2: "", 
        star3: ""
      
        })
    const addMovie = (e)=>{
        e.preventDefault()
        console.log(form);
        Axios.post(`http://localhost:5000/api/movies`, {
        title: form.title,
        director: form.director,
        metascore: form.metascore,
        stars: [form.star1,form.star2, form.star3] } )
        .then(res=>{
            props.history.push('/');
        })
        .catch(er=>{
            alert(er)
        })

    }
    const handleChanges = e =>{
        e.preventDefault();
        // debugger
        setForm({
            ...form,
            [e.target.name] : e.target.value,
            
        })
        
    }
    return(
        <div className='updS'>
            <form>
                <div className='spacing'>
                <label> Title:
                    <span className="space2">
                        <input type='text' name='title'  value={form.title} onChange={handleChanges} />
                    </span>
                </label>
                </div>
                <br />
                <div className='spacing'>
                <label> Director:
                    <span className="space3">
                        <input type='text' name='director' value={form.director} onChange={handleChanges} />
                    </span>
                </label>
                </div>
                <br />
                <div className='spacing'>
                <label> Metascore:
                    <span>
                        <input type='number' name='metascore'  value={form.metascore} onChange={handleChanges}/>
                    </span>
                </label>
                </div>
                <br />
                <div className='spacing'>
                <label>Star1:
                    <span className="space1"> 
                        <input type='text' name='star1'  value={form.star1} onChange={handleChanges}/>
                    </span>
                </label>
                </div>
                <br />
                <div className='spacing'>
                <label> Star2:
                    <span className="space1">
                        <input type='text' name='star2'  value={form.star2} onChange={handleChanges} />
                    </span>
                </label>
                </div>
                <br />
                <div className='spacing'>
                <label>Star3:
                    <span className="space1"> 
                        <input type='text' name='star3'  value={form.star3} onChange={handleChanges} />
                    </span>
                </label>
                </div>
                <br />
                <button onClick={addMovie}>Add Movie</button>
            </form>
        </div>
    )
}
export default AddMovie;