import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import About from "./About";
import Home from '../containers/Home';
import PageNotFound from "./PageNotFound";
import LoginForm from "./LoginForm";
import ArticleDetail from '../containers/ArticleDetail';import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';class App extends Component {
   render() {
      // console.log(isLoggedIn)
       console.log( 'this.props within App = ', this.props );        return (
                   <Switch>
                       {/* <Route path="/" exact component={About} /> */}
                       <Route path="/" exact component={LoginForm}/>
                       <Route path="/login" exact component={LoginForm} />

                       <Route path="/Home" exact component={Home} />
                      
                       <Route path="/Home/:id" component={ArticleDetail} />
                       <Route path="*" component={PageNotFound} />                   
                        </Switch> 
                               );
   }
}export default App;