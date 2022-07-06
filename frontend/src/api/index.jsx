import axios from "axios";

export default getApi = url => {
    return axios
    .get(url)
    .then(res => {
        return res;
    })
    .catch(e=> {return e.response})
}

export const postApi = (url, params) => {
    return axios
    .post(url,params)
    .then(res => {return res;})
    .catch(e=> {return e.response})
}

export const putApi = (url, params) => {
    return axios.put(url, params)
    .then(res => {return res})
    .catch(e=> {return e.response})
}

export const deleteApi = url => {
    return axios
    .delete(url)
    .then(res => {return res})
    .catch(e=> {return e.response})
}