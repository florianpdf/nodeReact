import React from 'react';
import Gift from './Gift';
import GiftService from './GiftService';
import MailService from './MailService';
import './GiftsManager.css';

export default class GiftsManager extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            gifts: [],
            error: false,
            sending: false
        };
        
        this.removeGift = this.removeGift.bind(this);
        this.add = this.add.bind(this);
        this.updateName = this.updateName.bind(this);
        this.sendMail = this.sendMail.bind(this);
        this.load();
    
    }
    
    async load() {
        const gifts = await GiftService.get();
        this.setState({ gifts });
      }

    async removeGift(id) {
        await GiftService.delete(id);
        this.load();
    }

    async add(evt) {
        evt.preventDefault();
        if (!this.giftName.value) {
            this.setState({error: true});
            return;
        }

        await GiftService.add(this.giftName.value);
        this.giftName.value = '';
        this.giftName.focus();
        this.setState({error: false});
        this.load();
    }

    updateName(evt) {
        this.setState({name: evt.target.value});
    }

    getRawHTML($el) {
        const parser = new DOMParser();
        const $newEl = parser.parseFromString($el.innerHTML, 'text/html');
        
        $newEl.querySelectorAll('.remove').forEach(el => el.remove());
        return $newEl.body.innerHTML;
    }

    async sendMail(evt) {
        evt.preventDefault();

        this.setState({sending: true});
        await MailService.send(this.getRawHTML(document.querySelector('.GiftsWrapper')));
        this.setState({sending: false});
    }
    
    render() {
        let error = '';
        if (this.state.error)
            error = <div className="error">Il faut demander un cadeau pour pouvoir l'ajouter à la liste du Père Noël</div>;
        
        return (
            <div>
                <div className="GiftsManager">
                    <form onSubmit={this.add}>
                        <div className="formField">
                            <input type="text" placeholder="Prénom" onChange={this.updateName} autoFocus={true}/>
                        </div>
                        <div className="formField">
                            <input type="text" placeholder="Ton cadeau" ref={el => this.giftName = el} autoFocus={true}/>
                            <button type="Il faut demander un cadeau pour pouvoir l'ajouter à la liste du Père Noëlsubmit"> Ajouter </button>
                            {error}
                        </div>
                    </form>

                    <div className="GiftsWrapper">
                        <p>Cher Père Noël,</p>
                        <p>Tu trouveras la liste des cadeaux que je veux pour Noël !<br />En espérant que tu puisses tous me les apporter</p>
                        <ul>
                            {this.state.gifts.map(gift =>
                                <Gift key={gift.id} id={gift.id} name={gift.name} remove={this.removeGift} />
                            )}
                        </ul>
                        <p className="signature">{this.state.name}</p>
                        <p>PS: J'ai été très sage cette année, promis !</p>
                    </div>
                </div>
                <button type="button" onClick={this.sendMail} className="mail">
                    {!this.state.sending && "Dear Santa Florian, send me my gifts"}
                    {this.state.sending && "Envoi au Père Noël, attends un peu"}
                </button>
            </div>

        );
    }
    
}