import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactContactForm from 'react-mail-form';
import style from '../CSS/contact.module.css';
import '../App.css';
import Linkedin from '../image/linkedin.png';
import Git from '../image/git.png';


class Contact extends Component {
    render () {
        return (
            <div className={style.contactBody}>
                <Grid className={style.contactGrid}>
                    <Cell col={6}>
                            <h1> Louise Perez</h1>
                            <h2>Développeuse Web</h2>
                            <p className={style.dispo} > Disponibilité Montpellier, Nimes et ses alentours</p>
                        <div className={style.contactList}>
                            <div className={style.socialLinks}>
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/louise-perez-b41a90123/" target="_blank" rel="noopener noreferrer">
                                <img src={Linkedin} alt="Linkedin" title="Linkedin"/>
                            </a>
                            {/* Git */}
                            <a href="https://github.com/Louise-Perez" target="_blank" rel="noopener noreferrer">
                                <img src={Git} alt="Git" title="Git"/>
                            </a>
                            </div>
                        </div>
                    </Cell>
                    <Cell col={6}>
                    <h3> Contactez moi </h3>
                        <hr/>
                    <ReactContactForm 
                    to="contact@louise-perez.fr"
                    titlePlaceholder="Object"
                    contentsPlaceholder="Votre message..."
                    buttonText="Envoyer un mail"
                    className={style.formulaire}
                    />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact; 