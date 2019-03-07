import axios from 'axios';
const url = `https://localhost:44394/api/CarShow/GetMakeAsync`;

export default class imagesAPI {
    static fetchCars = () => axios.get(url);
}