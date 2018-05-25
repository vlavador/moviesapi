import React  from 'react';
import  $ from 'jquery';
import './movies.css';

class Movies extends React.Component {
  constructor(props){
   super(props)
   this.state = {}
   }
   getReview(review){
     const urlRendering = "https://api.themoviedb.org/3/movie/"+review.id+"/reviews?api_key=9d8982ca11943b871ab595b01b991151"
      $.ajax({
        url : urlRendering,
        success: (result) => {
          console.log(result)
        },
        error:(xhr,status,err) => {
          console.error("failed fetch")
        }
      })
   }

    display(movie){
    
      this.getReview(movie)
    }

  render() {
    return <div key = {this.props.movies.id} className ="movie" >
        <div className ="grid-6"><img src ={this.props.movies.poster_path} onClick = {this.display.bind(this,this.props.movies)} /></div>
        <div className = "grid-6">{this.props.movies.title}</div>
      </div>

  }
}

export default Movies
