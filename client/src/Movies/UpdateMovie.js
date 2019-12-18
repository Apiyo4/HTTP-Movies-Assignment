import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function UpdateMovie(props){
    console.log(props.match.params.id)
    const passedId = props.match.params.id
    
    const [form, setForm] = useState({

    title: "",
    director: "",
    metascore: '',
    stars: [{
        star1: ""}, 
        {star2: ""}, 
        {star3: ""}
    ]
    })
    const getMovies = ()=>{
        Axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(res=>{
            debugger
            setForm({
                
                title: res.data.title,
                director: res.data.director,
                metascore: res.data.metascore,
                stars: [{
                    star1: res.data.stars[0]}, 
                    {star2: res.data.stars[1]}, 
                    {star3: res.data.stars[2]}
                ]
                
            })
        })
        .catch(er=>{
            debugger
        })
    }
    useEffect(()=>{
        getMovies()
    }, [])
    const handleChanges = e =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
   

    return (
        <div className='updS'>
            <form>
                <label> Title:
                    <span>
                        <input type='text' name='title' value={form.title} onChange={handleChanges} />
                    </span>
                </label>
                <br />
                <label> Director:
                    <span>
                        <input type='text' name='director' value={form.director} onChange={handleChanges}/>
                    </span>
                </label>
                <br />
                <label> Metascore:
                    <span>
                        <input type='number' name='metascore' value={form.metascore} onChange={handleChanges}/>
                    </span>
                </label>
                <br />
                <label>Star1:
                    <span> 
                        <input type='text' name='star1' value={form.stars[0].star1} onChange={handleChanges}/>
                    </span>
                </label>
                <br />
                <label> Star2:
                    <span>
                        <input type='text' name='star2' value={form.stars[1].star2} onChange={handleChanges}/>
                    </span>
                </label>
                <br />
                <label>Star3:
                    <span> 
                        <input type='text' name='star3' value={form.stars[2].star3} onChange={handleChanges}/>
                    </span>
                </label>
                <br />
                <button>Update Movie</button>
            </form>
        </div>
    )
}
export default UpdateMovie;