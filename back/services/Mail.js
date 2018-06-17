const nodemailer = require('nodemailer');
const stripTags = require('striptags');

class Mail {
    constructor(user, pass) {

        // Aller sur: https://ethereal.email si les identifiants ne fonctionnent plus 
        // Les messages ne sont pas réellement envoyés via SMTP.
        // Allez sur: https://ethereal.email/messages (en utilisant les identifiants plus bas) pour voir les messages "envoyés"
        this.user = user;
        this.transport = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: { user, pass }
        });
    }

    send(to, html) {
        const date = new Date();
        const subject = `Père Noël - Liste de cadeaux pour Noël ${date.getUTCFullYear()}`;
        
        const config = {
            from: this.user,
            to,
            subject,
            text: stripTags(html),
            html
        };

        return this.transport.sendMail(config);
    }
}

module.exports = new Mail('jnmldefsvj5lym5p@ethereal.email', 'mXmUcAPm4mfTzAJqpY');