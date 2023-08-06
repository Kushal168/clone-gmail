
import axios from 'axios';

const API_URI = 'http://localhost:8000';

const API_GMAIL = async (UrlObject, payload, type) => {
    // const { params, urlParams, ...body } = requestData;

    return await axios({
        method: UrlObject.method,
        // url: `${API_URI}/${UrlObject.endpoint}`,
        url: `${API_URI}/${UrlObject.endpoint}/${type}`,
        data: payload
    })
}
// const API_GMAIL = async (UrlObject, requestData = {}, type) => {
//     const { params, urlParams, ...body } = requestData;

//     return await axios({
//         method: UrlObject.method,
//         url: `${API_URI}/${UrlObject.endpoint}/${type}`,
//         data: requestData
//     })
// }

export default API_GMAIL;