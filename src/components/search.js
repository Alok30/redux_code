import React, { Component } from "react";
import logo from "./logo.png";
import ArticleDetail from '../containers/ArticleDetail'
import "../../src/index.css";
import { logout, isLoggedIn, LoggedIn } from "../services/auth";
import { Link } from "react-router-dom";
import { getArticles } from "../services/article";
import { getsections } from "../services/section";
import {getsearch} from "../services/section";  
import {
    FETCH_SECTIONS, FETCH_SECTIONS_SUCCESS, FETCH_SECTIONS_FAILURE, FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
} from "../actions/constants";
import { getSectionsThunk, getArticlesThunk } from "../actions/creators";
import './Home.css';
import Logo from './timeswire1.png'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
const apiKey = `api_key=073aded0b53d4df480aadaa0c7e4f589`
const baseUrl = `http://apiproxy.nl-demo.com/tmdb/3`;
const movieListUrl = `${baseUrl}/search/movie`;

class SearchList extends Component {
    constructor(props){
        super(props)
        this.state=
        {
         query:'',
         start_date:'',
         end_date:'',
        };
        this.queryInputRef=React.createRef();
        this.createdInputRef=React.createRef();
        this.endInputRef=React.createRef();
    }
    onSearch=(event)=>{
        console.log(this.state)
        event.preventDefault();
        this.props.dispatch( getArticlesThunk( this.state.query,this.state.start_date,this.state,start_date,this.state.end_date ) );
        // this.setState({
        //     query:this.queryInputRef.current.value,
        //     submit:true
        // }
        // )
    }

    clear=()=>{
        this.queryInputRef.current.value='';
        this.createdInputRef.current.value='';
        this.endInputRef.current.value='';
    }

    updateQuery = () => {
        this.setState({
            query: this.queryInputRef.current.value,
            start_date:this.createdInputRef.current.value,
            end_date:this.endInputRef.current.value
        });
    }
    render() {
        let el;
        switch( this.props.searchMovies.isLoading ) {
            case SEARCH_MOVIES_LIST:
                el = (
                    <div className="alert alert-dark">
                        search details are being loaded...
                    </div>
                );
                break;
            case SEARCH_MOVIES_LIST_SUCCESS:
                el = (  <tbody>
                        {this.props.searchMovies.movies.results.length!=0?
                            this.props.searchMovies.movies.results.slice(1,4).map( movie=>{
                            return(
                            <tr>
                                <td>{movie.title}</td>
                                <td><Link to={`/home/${movie.id}`} component={MovieDetails}><i className="fa fa-external-link"></i></Link></td>
                            </tr>
                            )})
                            :<div className="alert alert-dark">There is no result for your search</div>
                        }
                        </tbody>
                    );
                break;
            case SEARCH_MOVIES_LIST_FAILURE:
                el = (
                    <div className="alert alert-danger">
                        Something went wrong. search details could not be fetched.
                        <hr />
                        {/* {this.state.error.message} */}
                    </div>
                );
                
                break;
            default:
                el = (
                    <div className="alert alert-info">
                        Page is loading...
                    </div>
                );
        }

        return (
        <div className="col-6 border ml-auto">
                <span className="side-icon">
                    <i className="fa fa-search search" aria-hidden="true"></i>
                </span>
                <div className="custom-div-2" style={{width: '74%'}}>
                    <form method="POST" onSubmit={this.onSearch}>
                        <h3>Search Movies</h3>
                            <input type="text" style={{width: '100%'}} className="form-control-sm" placeholder="&#128269;search"
                            aria-label="search" ref={this.queryInputRef} onChange={this.updateQuery}/>
                            <button type="submit" style={{marginTop: '8px'}} onClick={this.clear} className="btn-orange btn-sm btn-block">Search</button>
                        
                    </form>
                    
                    <div className="custom-div extra-width">
                        <table className="table table-borderless">
                        <h3 style={{color: 'black',paddingTop: '13px',fontSize: '14px',  marginRight: '-5px',marginBottom: '0' }}>Matching Results</h3>
                        {el} 
                        {/* {
                            this.state.submit?<SearchList query={this.state.query} />:<div></div>
                        } */}
                        {/* table here */}
                        </table>
                    </div>
                </div> 
        </div>      
        )
    }
    componentDidMount() 
        {
            this.props.dispatch( getSearchMoviesListThunk('avengers') );
        }
}

