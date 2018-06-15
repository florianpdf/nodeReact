import axios from 'axios';

class GiftService {

    constructor() {
        this.baseApi = 'http://localhost:3000/gifts';
    }

    get(id) {
        if (!id) {
            return axios.get(this.baseApi).then(res => res.data);
        }
    }

    add(name) {
        return axios.post(this.baseApi, {name});
    }

    delete(id) {
        return axios.delete(`${this.baseApi}/${id}`);
    }
    
}

export default new GiftService();