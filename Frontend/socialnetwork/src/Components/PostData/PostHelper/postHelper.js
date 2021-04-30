import {API} from "../../../Backend"


export const fetchData = () => {
    return fetch(`${API}postData/postShow/`, {method:"GET"})
    .then(response => {
        // console.log('API CALLING fetch data', response);
        return response.json();
    })
    .catch(err => console.log(err))
}

export const createPostData = (id,userData) =>{

    const formData = new FormData();
    for (const name in userData){
        formData.append(name, userData[name])
    }

    return fetch(`${API}postData/postCreate/${id}/`,{
        method:"POST",
        body:formData  
    })
    .then((response) =>{
        console.log("Innnnnnnnn this", response);
        return response.json();
    })
    .catch(err => console.log(err))
}