import axios from 'axios';
import { getAuthToken } from './auth';
const sectionsUrl=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content/section-list.json?api-key=073aded0b53d4df480aadaa0c7e4f589`;

const axiosOptions = {

    timeout: 20000

};



const getAxiosAuthenticatedEnpointOptions = () => ({

    ...axiosOptions, headers: {

        'x-nl-auth': getAuthToken(),

        'Content-type': 'application/json'

    }

});



const getAxiosAuthenticatedEnpointWithJsonPayloadOptions = () => ({

    ...axiosOptions, headers: {

        'x-nl-auth': getAuthToken(),

        'Content-type': 'application/json'

    }

});



export function getSections() {

    return axios.get( sectionsUrl, getAxiosAuthenticatedEnpointOptions() )

        .then( response =>{

           return response.data 

        } )

};
// fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101
// export function getsearch(query1,query2,query3){
//     return axios.get(` sectionsUrl&q=${query1}&begin_date=${query2}&end_date=${query3}`, getAxiosAuthenticatedEnpointOptions() )

//     .then( response =>{

//        return response.data 

//     } )

// }
