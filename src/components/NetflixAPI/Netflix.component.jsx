import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Netflix.styles.css';
{/* <div class="nav-bar">
            <ul class="words">
              <li>
                <a href="#">HOME</a> 
                
                <a href="#">TV SHOWS</a>
                
                <a href="#">Movies</a>
               
                <a href="#">NEW AND POPULAR</a>
              </li>
            </ul>
            <div class="side">
            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Search</a></li>
                {/* <i class="material-icons">search</i> */}
//             </ul>
//             </div>
// </div>


class Netflix extends Component {
    constructor(prop){
        super(prop)
        this.state = { 
            movies: [],
            topRated: [],
            Upcoming: [],
            search:'',
        }
    }
    

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8164fcac36aa4aa6ae4d054b06dbebe2`)
            .then(data => data.json())
            .then(response => response)
            .then(data => this.setState({movies: data.results}))

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8164fcac36aa4aa6ae4d054b06dbebe2&page=1`)
            .then(data => data.json())
            .then(response => response)
            .then(data =>this.setState({topRated: data.results}))

        fetch(`https://api.themoviedb.org/3/movie/{1}/videos?api_key=8164fcac36aa4aa6ae4d054b06dbebe2&page=2`)
            .then(data => data.json())
            .then(response => response)
            .then(data =>this.setState({Upcoming: data.results}))
    }
    handleChange = event => {
        console.log(event.target.value)
        this.setState({search:event.target.value})
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8164fcac36aa4aa6ae4d054b06dbebe2&language=en-US&page=1&include_adult=false&query=${event.target.value}`)
            .then(data => data.json())
            .then(data => this.setState({ movies:data.results ? data.results : []}))
            //if data.results exists return, if not- set to an empty array
            //  .then(data =>console.log(data))
    }
    
    //use input to search movie database to pull new list of movies
    //update state of movies to new list pulled from database
    
     render(){
    console.log(this.state.movies)

        let newMovies = this.state.movies.filter(movie => movie.backdrop_path)
        console.log(newMovies, 'newMovies')
        return(
            <div>
                <label htmlFor='search'>Find: </label>
                <input id='search' type='text' onChange={this.handleChange}/>
                {/* <iframe className='video'width="560" height="315" src="https://www.youtube.com/embed/9BPMTr-NS9s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <div className='title'>
                    <h1>NETFLIX</h1>
                </div>
                <h1>New Movies</h1>
                <div className='movieRow1'>
                {newMovies.map(movie => {
                    return (
                        <div className='images' key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}></img>
                            <h1>{movie.title}</h1>
                            <Link to={{pathname:`SingleMovie/${movie.id}`, state: movie}}><button>View Movie Details</button></Link>
                        </div>)})
                }
            </div>

                <h2>Top Rated</h2>
                <div className='movieRow2'>
                {this.state.topRated.map(topRated => {
                    return (
                        <div className='images' key={topRated.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${topRated.backdrop_path}`}></img>
                            <h1>{topRated.title}</h1>
                            <Link to={{pathname:`SingleMovie/${topRated.id}`, state: topRated}}><button>View Movie Details</button></Link>
                        </div>)})
                }
                </div>

                <h3>Top Rated</h3>
                <div className='movieRow3'>
                {this.state.topRated.map(Upcoming=> {
                    return (
                        <div className='images' key={Upcoming.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${Upcoming.backdrop_path}`}></img>
                            <h1>{Upcoming.title}</h1>
                            <Link to={{pathname:`SingleMovie/${Upcoming.id}`, state: Upcoming}}><button>View Movie Details</button></Link>
                        </div>)})
                } 
                </div>  
            </div> 
        )
    }
 };


export default Netflix