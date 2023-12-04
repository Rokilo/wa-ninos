import axios from "axios";

export default axios.create({
    baseURL: 'https://webninos.cl:4000/'
});