//import { get } from "@11ty/eleventy/src/TemplateCache";
import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }
  render() {
    return (
      <div className="movie-detail">
        <h3>{this.props.movie.Title}</h3>
        <p>{this.props.movie.Year}</p>
        <img src={this.props.movie.Poster} alt="img not found" />
        <p>{this.props.movie.Plot}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail,
  };
};
export default connect(mapStateToProps, { getMovieDetail })(Movie);
