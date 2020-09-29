import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import style from '../CSS/resume.module.css';
import Formations from './Formation';
import Experiences from './Experience';
import Hobbies from './Hobbies';
import Portrait from '../image/portrait.png'

class Resume extends Component {
    render () {
        return (
            <div className={style.resumeBody}>
                <Grid  className={style.resumeGrid}>
                    <Cell col={4} className={style.resume}>
                        <div style={{textAlign: 'center'}}>
                            <img src={Portrait} alt="Portrait Louise Perez" style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '1em'}}>Louise Perez</h2>
                        <h4> Développeuse Web </h4>
                        <hr className={style.separator}/>
                        <p className={style.introduction}> Mes différents diplômes me permettent de lier mes compétences en <strong>communication</strong> et en <strong>publicité</strong> à mon métier de <strong>développeuse web</strong>. 
                        Polyvalente, je peux conduire un projet de son maquettage à sa production. 
                        <br/><br/>
                        A côté du développement web, je pratique l'escalade depuis plus de 12 ans, 
                        c'est un sport qui me permet d'avoir <strong>un certain contrôle et une bonne confiance en moi</strong>. 
                        Dans un besoin d'indépendance, je me forme régulièrement aux pratiques de <strong>premiers secours</strong>, 
                        au bushcraft et à enrichir mes connaissances en matière de vie <strong>autonome</strong>.</p>
                        <hr className={style.separator}/>
                    </Cell>
                    <Cell col={8} className={style.resumeCell}>

                        <h2> Formations </h2>
                        <Formations
                            startYear={2019}
                            endYear={2020}
                            schoolName="Développeur Web stagiaire - ADRAR Formation Montpellier"
                            schoolDescription="HTML - CSS - JS - PHP - MySQL. Progression personnalisée, pratique d'un apprentissage en autonomie."
                        />

                        <Formations
                            startYear={2016}
                            endYear={2017}
                            schoolName="Master 1 Responsable de communication et publicité - Sup de Pub - Bordeaux "
                            schoolDescription="Option Direction artistique. Logiciel PAO - Montage vidéo - Campagne de publicité - Stratégie de communication"
                        />

                        <Formations
                            startYear={2013}
                            endYear={2016}
                            schoolName="Licence Information - Communication - Université Paul Valery - Montpellier "
                            schoolDescription="Option Réalisation graphiques et Création de site Web - Stratégie de communication - Communication Interne, Externe - Communication Evenementielle"
                        />

                        <hr style={{borderTop: "3px solid #5F9EA0"}} />

                        <h2> Expériences</h2>

                        <Experiences startYear={2020}
                            endYear={20202}
                            jobName="Développeur React JS / Node JS - Fleach "
                            jobDescription="Création et amélioration des composants - Gestion des bugs et des temps de requêtes - Création d’une API REST - Création d’une application mobile en React Native
                            Langage : React JS , Node JS."
                        />

                        <Experiences startYear={2019}
                            endYear={2019}
                            jobName="Hotesse d'accueil - Truffaut Mauguio "
                            jobDescription="Gestion d'une équipe de 8 personnes (haute saison) - Gestion de la clientèle - Gestion du standard téléphonique et des retours marchandises."
                        />

                        <Experiences startYear={2018}
                            endYear={2018}
                            jobName="Vendeuse - La Cure Gourmande - Aigues-Mortes / Le Grau du Roi"
                            jobDescription="Gestion de la surface de vente en totale autonomie - Réalisation des objectifs de vente fixés - Présentation de groupe ( jusqu'à 50 personnes - Gestions des stocks et livraisons."
                        />

                        <Experiences startYear={2017}
                            endYear={2017}
                            jobName="Directrice Artistique Junior - Raum Production - Montpellier  "
                            jobDescription="Adaptabilité - Réactivité face aux imprévus - Gestion du stress - Sens de l'organisation - Gestion de projet - Community Manager."
                        />

                        <hr style={{borderTop: "3px solid #5F9EA0"}} />
                        <h2>Intérêts</h2>
                        <Hobbies />    
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume; 