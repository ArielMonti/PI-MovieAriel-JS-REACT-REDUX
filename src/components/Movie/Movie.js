import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
         this.props.getMovieDetail(this.props.match.params.id)
    }



    render() {
        return (
            <div className="movie-detail">
                 <h2>TITULO</h2> 
                 <h3>{this.props.movie.Title}</h3> 
                 <br></br>
                 <h2>GENERO</h2>
                 <h3>{this.props.movie.Genre}</h3>  
                 <img src={this.props.movie.Poster}></img>
            </div>
        );
    }
}

function mapStateToProps(state){
return {
    movie: state.movieDetail
}
}


export default connect (mapStateToProps, {getMovieDetail}) (Movie);