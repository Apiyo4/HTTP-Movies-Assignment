import React from 'react';


function UpdateMovie(){
    return (
        <div className='updS'>
            <form>
                <label> Title:
                    <span>
                        <input type='text' />
                    </span>
                </label>
                <br />
                <label> Director:
                    <span>
                        <input type='text' />
                    </span>
                </label>
                <br />
                <label> Metascore:
                    <span>
                        <input type='number' />
                    </span>
                </label>
                <br />
                <label>Star1:
                    <span> 
                        <input type='text' />
                    </span>
                </label>
                <br />
                <label> Star2:
                    <span>
                        <input type='text' />
                    </span>
                </label>
                <br />
                <label>Star3:
                    <span> 
                        <input type='text' />
                    </span>
                </label>
                <br />
                <button>Update Movie</button>
            </form>
        </div>
    )
}
export default UpdateMovie;