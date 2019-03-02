import axios from 'axios';
const url = `https://localhost:44371/api/CarShow/GetMakeAsync`;

export default class imagesAPI {
    static fetchCars = () => axios.get(url);
}