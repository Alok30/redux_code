import axios from 'axios';
import { getAuthToken } from './auth';
const articlesUrl=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content/all/all.json?api-key=073aded0b53d4df480aadaa0c7e4f589`;
const baseUrl=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content.json?api-key=073aded0b53d4df480aadaa0c7e4f589&url=`
// http://api.nytimes.com/svc/search/v2/articlesearch.json
const axiosOptions = {
    timeout: 20000
};
const getAxiosAuthenticatedEnpointOptions = () => ({
    ...axiosOptions, headers: {
        'x-nl-auth': getAuthToken(),
        'Content-Type' : 'application/json'
    }
});
const getAxiosAuthenticatedEnpointWithJsonPayloadOptions = () => ({
    ...axiosOptions, headers: {
        'x-nl-auth':+ getAuthToken(),
        'Content-type': 'application/json'
    }
});
export function getArticles() {
    return axios.get( articlesUrl, getAxiosAuthenticatedEnpointOptions() )
        .then( response =>{
           return response.data 
        } )

};
export function getArticle( url ) {
    return axios.get( `${baseUrl}${url}`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data )
}
