import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import style from '../CSS/skills.module.css';
import Html5Logo from '../image/html5.png';
import Css3 from '../image/css3.png';
import Bootstrap from '../image/bootstrap.png';
import JS from '../image/js.png';
import ReactLogo from '../image/react.png';
import PhpLogo from '../image/php.png';
import MySQL from '../image/mysql.png';
import Symfony from '../image/symfony.png';
import Git from '../image/git.png';
import Illustrator from '../image/illustrator.png';
import Indesign from '../image/indesign.png';
import Linux from '../image/linux.png';
import MacOs from '../image/macOs.png';
import Photoshop from '../image/photoshop.png';
import PremierePro from '../image/premierePro.png';
import Trello from '../image/trello.png';
import Wordpress from '../image/wordpress.png';

class Skills extends Component {
    render () {
        return (
            <div className={style.skillBody}>
                <Grid className={style.skillGrid}>
                    <Cell col={6} style={{textAlign: 'center'}}>
                        <h2 className={style.title}> Techniques</h2>
                        <ul>
                            <li> 
                                <img src={Git} alt="Git" title="Git"/> | 
                                <img src={Linux} alt="Linux" title="Linux"/> | 
                                <img src={MacOs} alt="MacOs" title="MacOS"/>
                            </li>
                            <li> 
                                <img src={Photoshop} alt="Photoshop" title="Photoshop"/>| 
                                <img src={Indesign} alt="Indesign" title="Indesign"/> | 
                                <img src={Illustrator} alt="Illustrator" title="Illustrator"/>
                            </li>
                            <li>
                                <img src={PremierePro} alt="PremierePro" title="Premiere Pro"/> | 
                                <img src={Trello} alt="Trello" title="Trello"/> | 
                                <img src={Wordpress} alt="Wordpress" title="Wordpress"/>
                            </li>
                        </ul>
                    </Cell>
                    <Cell col={6} style={{textAlign: 'center'}}>
                        <h2 className={style.title}> Compétences</h2>
                        <ul>
                            <li> 
                                <img src={Html5Logo} alt="HTML5" title="HTML5"/> | 
                                <img src={Css3} alt="CSS3" title="CSS3"/>  | 
                                <img src={Bootstrap} alt="Bootstrap" title="Bootstrap"/> 
                            </li>
                            <li> 
                                <img src={JS} alt="JavaScript" title="JavaScript"/>  | 
                                <img src={ReactLogo} alt="React" title="React"/>  
                            </li>
                            <li> 
                                <img src={PhpLogo} alt="Php" title="PHP"/>  | 
                                <img src={MySQL} alt="MySQL" title="MySQL"/>  | 
                                (<img src={Symfony} alt="Symfony" title="Symfony"/> )
                            </li>
                        </ul>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills; 