import axios from 'axios';
import { getAuthToken } from './auth';
const articlesUrl=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content/all/all.json?api-key=073aded0b53d4df480aadaa0c7e4f589`;
const baseUrl=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content.json?api-key=073aded0b53d4df480aadaa0c7e4f589&url=`
// http://api.nytimes.com/svc/search/v2/articlesearch.json
const baseUrl1='http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content/all/all.json?limit=7';
const apiKey = `api_key=073aded0b53d4df480aadaa0c7e4f589`;
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
export function getArticles(query,start_date,end_date) {
    return axios.get( `${baseUrl1}?${apiKey}&q=${query}&begin_date=${start_date}&end_date=${end_date}`, getAxiosAuthenticatedEnpointOptions() )
        .then( response =>{
           return response.data 
        } )

};
// export function getArticles(query,start_date,end_date) {
//     return axios.get( `${baseUrl1}?${apiKey}&q=${query}&begin_date=${start_date}&end_date=${end_date}`, getAxiosAuthenticatedEnpointOptions() )
//         .then( response =>{
//            return response.data 
//         } )

// };
export function getArticle( url ) {
    return axios.get( `${baseUrl}${url}`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data )
}
// export function getSearchMoviesList(query){
//     return axios.get( `${searchMovieUrl}?${apiKey}&query=${query}&page=1`, getAxiosAuthenticatedEnpointOptions() )
//         .then( response => response.data )
// }
// export function getsearch(query1,query2,query3){
//     return axios.get(` sectionsUrl&q=${query1}&begin_date=${query2}&end_date=${query3}`, getAxiosAuthenticatedEnpointOptions() )

//     .then( response =>{

//        return response.data 

//     } )

// }