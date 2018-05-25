import React, { Component } from 'react';
import  Movies  from './movie';
import './App.css';
import  $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
    this.renderingMovies("popular")
  }
    renderingMovies(test){
      const urlRendering = "https://api.themoviedb.org/3/movie/"+test+"?api_key=9d8982ca11943b871ab595b01b991151&page=";
      $.ajax({
        url : urlRendering,
        success: (result) => {
                    const moviess = result.results
          var moviedata = []
          moviess.forEach((movies) => {

            movies.poster_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + movies.poster_path

            const movieRowss = <Movies key = {movies.id} movies = {movies} />
            moviedata.push(movieRowss)
          })
          this.setState({rows: moviedata})
          
        },
        error:(xhr,status,err) => {
          console.error("failed fetch")
        }
      })
    }
    getPopular(){
      this.renderingMovies("popular")
    }
    getTopRated(number){
      this.renderingMovies("top_rated")

    }
    alerting(){



    }
  render() {
    var number = 1;
    return (
      <div className="sections">
        <div className = "container">
        <div className="Panel">
          {this.state.rows}

          <button onClick = {this.getPopular.bind(this)}>most popular</button>
          <button onClick = {this.getTopRated.bind(this,number)}>most top rated</button>
          <button>previous</button>
          <button onClick = {this.alerting.bind(this)}>next </button>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
