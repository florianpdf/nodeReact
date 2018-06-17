import axios from 'axios';

class MailService {

    constructor() {
        this.baseApi = 'http://localhost:3000/mails';
    }

    send(html) {
        return axios.post(this.baseApi, {
            to: 'florian@wildcodeschool.fr',
            message: html
        });
    }
    
}

export default new MailService();