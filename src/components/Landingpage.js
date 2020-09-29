import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import style from '../CSS/landing.module.css';
import Linkedin from '../image/linkedin.png';
import Git from '../image/git.png';
import Skill from './Skill';
import Resume from './Resume';
import Footer from './Footer';

class Landing extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: '0px', padding: '0px' }}>
                <Grid className={style.landingGrid}>
                    <Cell col={12}>
                    <div className={style.socialLinks}>
                        <h1 className={style.title}> Louise Perez</h1>
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/louise-perez-b41a90123/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="Linkedin" title="Linkedin"/>
                        </a>
                        {/* Git */}
                        <a href="https://github.com/Louise-Perez" target="_blank" rel="noopener noreferrer">
                            <img src={Git} alt="Git" title="Git"/>
                        </a>
                        </div>

                        <div className={style.bannerText}>
                            <h1> Développeuse Web</h1>
                        </div>
                    </Cell>
                    <Cell col={12} style={{marginTop: '200px'}}>
                        <div style={{marginTop: '-25px', marginLeft: '-20px', height: '100%'}}>
                            <Skill />
                        </div>
                    </Cell>
                    <Cell col={12} >
                        <div style={{marginTop: '-25px', marginLeft: '-20px'}}>
                            <Resume/>
                        </div>
                    </Cell>
                    <Cell col={12} style={{marginTop: '-20px'}} >
                        <div style={{paddingTop: '-25px', marginLeft: '-20px'}}>
                            <Footer/>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing; 