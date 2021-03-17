import React, {Component} from 'react';
import './SingleMovie.styles.css';

class SingleMovie extends Component {
    constructor(prop){
        super(prop)
        this.state = { 
            movies: [], 
        }
    }
    // componentDidMount(){
    //     fetch(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)
    //         .then(data => data.json())
    //         .then(response => response)
    //         .then(data => this.setState({movie: data.results}))
    // }

    render(){
        const {title, overview, backdrop_path} = this.props.location.state

        console.log(this.props.location.state)
        return(
            <div>
                <h1>{title}</h1> 
                <p>Summary: {overview}</p>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9BPMTr-NS9s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
}
}

export default SingleMovie