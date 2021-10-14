import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const AddMovie= (props) => {

  const { push } = useHistory();

	const [movie, setMovie] = useState({
		title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
	});

	
	const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
  }

  const handleSubmit = (e) => {
		e.preventDefault();
		axios.post(`http://localhost:5000/api/movies`, movie)
      .then(res=> {
        props.setMovies(res.data);
				push(`/movies`);
      })
      .catch(err=>{
        console.log(err.response);
      });
  };
	
// app.post("/api/movies", (req, res) => {
  // if (req.body.title !== undefined) {
  //   const newMovie = req.body;
  //   newMovie["id"] = movieId;
  //   movies.push(newMovie);
  // }
  // ++movieId;
  // res.status(201).json(movies);
// });

	const { title, director, genre, metascore, description } = movie;

    return (
	<div className="col">
		<div className="modal-content">
			<form onSubmit={handleSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title">Adding <strong>{movie.title}</strong></h4>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Title</label>
						<input value={title} onChange={handleChange} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input value={director} onChange={handleChange} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input value={genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input value={metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea value={description} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
									
				</div>
				<div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
			</form>
		</div>
	</div>);
}

export default AddMovie



// #### Adding a Movie

// > _Alright! You ready! Let's see you use the skills of the previous steps to build a crud function from start to finish._

// - [ ] Use `EditMovieForm.js` as a model to build an `AddMovieForm` component from scratch. The component should hold all the attributes of a new movie in local state.

// - [ ] Add in a route that allows access to `AddMovieForm`.

// - [ ] Locate the part of the ui that should redirect to your new `AddMovieForm`. Make that button works as expected.

// - [ ] In `AddMovieForm,` add an event handler for form submission. When the form is submitted, run the approprate request for adding a movie with the component's state values.

// - [ ] Make sure your component has access to and runs and modifications needed to global state and redirects to `/movies` after creation.