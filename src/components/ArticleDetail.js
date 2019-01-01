import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { getArticleDetailsThunk } from '../actions/creators';
import { FETCH_ARTICLE_DETAILS, FETCH_ARTICLE_DETAILS_SUCCESS, FETCH_ARTICLE_DETAILS_FAILURE } from '../actions/constants';
import PrivateRoute from './PrivateRoute';
import './Home.css'
import timeswire1 from './timeswire1.png';
class ArticleDetail extends Component {
    render() {
        console.log("==================")
        console.log(this.props)
        let el;
        //let { slug_name,section,subsection,title } = this.props.articleDetails.article.results || {};
        switch (this.props.articleDetails.isLoading) {
            case FETCH_ARTICLE_DETAILS:
                el = (
                    <div className="alert alert-dark">
                        Product details are being loaded...
                    </div>
                );
                break;
            case FETCH_ARTICLE_DETAILS_SUCCESS:
                el = (
                    <div className="Body_css">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                {/* {this.props.articleDetails.article.results[0].slug_name} */}
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <br />
                                        <h3>{this.props.articleDetails.article.results[0].title}</h3>
                                        {(new Date()).toLocaleDateString('en-GB', this.props.articleDetails.article.results[0].created_date )}
                                        {/* {new date('en-GB', { 
                                         year: 'numeric', 
                                           month: 'long', 
                                           day: '2-digit' 
                                          }).format(this.props.articleDetails.article.results[0].created_date)} */}
                                        <img src={this.props.articleDetails.article.results[0].multimedia[3].url}></img>
                                         
                                        <img src={this.props.articleDetails.article.results[0].thumbnail_standard} />

                                        <p>{this.props.articleDetails.article.results[0].abstract}</p>
                                        <hr />

                                        <div>

                                        </div>
                                        <h3>{this.props.articleDetails.article.results[0].section}</h3>
                                        {this.props.articleDetails.article.results[0].subsection}
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                );

                break;

            case FETCH_ARTICLE_DETAILS_FAILURE:

                el = (

                    <div className="alert alert-danger">

                        Something went wrongs. Product details could not be fetched.

                        <hr />

                        {this.state.error.message}

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
            <div className="container">
                <div className="nav navbar-expand-lg  navbar_css_first " >
                    <img className="logo logo_css" src={timeswire1} alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                {/* <a className="nav-link " href="#">Home</a> */}
                            </li>
                            <li>

                            </li>
                        </ul>

                    </div>

                </div>

                {el}

            </div>
        );
    }



    componentDidMount() {

        this.props.dispatch(getArticleDetailsThunk(this.props.location.pathname.slice(6)));

    }

}



export default ArticleDetail;