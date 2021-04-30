import {API} from "../../../Backend"


export const fetchData = () => {
    return fetch(`${API}postData/postShow/`, {method:"GET"})
    .then(response => {
        // console.log('API CALLING fetch data', response);
        return response.json();
    })
    .catch(err => console.log(err))
}