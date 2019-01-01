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
class Home extends Component {
    constructor(props){
        super(props);
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
    getsearch=(event)=>{
        event.preventDefault();
        this.props.dispatch(getArticlesThunk(this.props.query,this.props.start_date,this.props.end_date));
        // getsearch(this.state)
        //         .then(data=>this.props.history.push('/Home'))
        //         .catch(error=>alert("Wrong Keyword"));
    }
    updateKeyword=()=>{
        this.setState({
            query:this.queryInputRef.current.value,
            start_date:this.createdInputRef.current.value,
            end_date:this.endInputRef.current.value
        });
    }
    clear=()=>{
        this.queryInputRef.current.value='';
        this.createdInputRef.current.value='';
        this.endInputRef.current.value='';
    }
    logout = () => {
        this.props.history.push("/login");
    };
    render() {
        let el, ar;
        switch (this.props.articleList.isLoading) {
            case FETCH_ARTICLES:
                ar = (
                    <div className="alert alert-default">
                        Articles are being loaded...
          </div>
                );
                break;
            case FETCH_ARTICLES_SUCCESS:

                ar = (
                    <div className="conatiner container_body">

                        <div >
                            
                           
                            {this.props.articleList.articles.results.slice(1, 10).map(articles => {
                                return (
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <img className=" img_css_container"
                                                src={articles.thumbnail_standard} alt={articles.title} />                                      </div>
                                        <div className="col-md-8">
                                            <b>{articles.title}</b>
                                            <p>{articles.abstract}</p>
                                            <Link to={`/Home/${articles.url}`} component={ArticleDetail} >
                                                More
                                             </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
                break;
            case FETCH_ARTICLES_FAILURE:
                ar = (
                    <div className="alert alert-danger">
                        Something went wrong. Sections could not be fetched.
            <hr />
                        {this.props.articleList.error.message}
                    </div>
                );
                break;
            default:
                ar = <div className="alert alert-info">Page is loading...</div>;

        }
        return (

            <div >

                <div className="nav navbar-expand-lg navbar1_css">

                    <img className="logo logo_css" src={Logo} alt="" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                        aria-label="Toggle navigation"
                    >

                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </div>
                <div >
                <h5><b>Article Search</b></h5>
                <div className="conatiner">
                            <nav className="navbar navbar-light bg-light justify-content-between " style={{ marginTop: '-56px' }}>
                                <a className="navbar-brand">Home</a>
                                <form className="form-inline">
                                    <button onClick={this.logout}>
                                        Logout
                                    </button>
                                </form>
                            </nav>
                            <div className="conatiner">
                                <form  onClick={this.search}>
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <h6>Search Keyword</h6>
                                            <div class="input-group">
                                                <input type="text" className="form-control" placeholder="Enter the Keywords" ref={this.queryInputRef}
                                                onChange={this.updateKeyword} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h6>Before</h6>
                                            <div className="input-group">
                                                <i className="far fa-calendar-alt" aria-hidden="true"></i>
                                                <input type="text" className="form-control" placeholder="Date Of Article" ref={this.createdInputRef} onChange={this.updateKeyword}/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h6>After</h6>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Date Of Article" ref={this.endInputRef} 
                                                onChange={this.updateKeyword}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <h6>News Desk</h6>
                                            <div class="dropdown">
                                                <button className="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Select
                                              </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <button className="dropdown-item" type="button">Action</button>
                                                    <button className="dropdown-item" type="button">Another action</button>
                                                    <button className="dropdown-item" type="button">Something else here</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h6>Section</h6>
                                            <div class="dropdown">
                                                <button className="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Select
                                              </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <button className="dropdown-item" type="button">Action</button>
                                                    <button className="dropdown-item" type="button">Another action</button>
                                                    <button className="dropdown-item" type="button">Something else here</button>
                                                </div>
                                            </div>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-primary btn-sm" style={{ width: '80px' }}>Search</button>
                                                
                                                <button type="button" className="btn btn-secondary btn-sm" onClick={this.clear}style={{ width: '80px' }}>Clear </button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h6>Type</h6>
                                            <div class="dropdown">
                                                <button className="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Select
                                              </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <button className="dropdown-item" type="button" >Action</button>
                                                    <button className="dropdown-item" type="button">Another action</button>
                                                    <button className="dropdown-item" type="button">Something else here</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                </div>
                            </div>
                    {ar}
                     <div className="footer css_footer">
                        <div className="row">
                            <div className="col-md-4">
                                <h6>About</h6>
                                <p>
                                    It is a great feeling. Be it the Boxing day, be it the any other day, I always wanted to play Test cricket and I made my debut against South Africa in January this year. I made my (ODI) debut against Australia in 2016, so to play Test cricket here was a big deal for me. I am really happy to contribute to the team's success
                   </p>
                            </div>
                            <div className="col-md-4">
                                <h6>Quick Links</h6>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Privacy Policy</p>
                                            <p>Terms & Conditions</p>
                                            <p>
                                                Help Center
                    </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Community</p>
                                            <p>Documentation</p>
                                            <p>Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h6>get in touch</h6>
                                <input type="text"></input>
                                <div className="row">
                                    <div className="col-md-7">
                                        Social Links
                   </div>
                                    <div className="col-md-5">
                                        <i class="fab fa-facebook"></i>
                                        <i class="fab fa-linkedin"></i>
                                        <i class="fab fa-google"></i>
                                        <ScrollUpButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                   
               </div>
                </div>
            </div>
        );

    }
    componentDidMount() {

        // this.props.dispatch(getSectionsThunk());

        this.props.dispatch(getArticlesThunk(null,null,null));

    }

}



export default Home;