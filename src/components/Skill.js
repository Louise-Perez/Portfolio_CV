import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import style from '../CSS/skills.module.css';
import Html5Logo from '../image/skills/html5.png';
import Css3 from '../image/skills/css3.png';
import JS from '../image/skills/js.png';
import ReactLogo from '../image/skills/react.png';
import PhpLogo from '../image/skills/php.png';
import MySQL from '../image/skills/mysql.png';
import Git from '../image/git.png';
import NodeJs from '../image/skills/nodejs.png';
import Illustrator from '../image/skills/illustrator.png';
import Indesign from '../image/skills/indesign.png';
import Linux from '../image/skills/linux.png';
import MacOs from '../image/skills/macOs.png';
import Photoshop from '../image/skills/photoshop.png';
import PremierePro from '../image/skills/premierePro.png';
import Trello from '../image/skills/trello.png';
import Wordpress from '../image/skills/wordpress.png';

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
                                <img src={Css3} alt="CSS3" title="CSS3"/>
                            </li>
                            <li> 
                                <img src={NodeJs} alt="Node Js" title="NodeJs"/>   |    
                                <img src={JS} alt="JavaScript" title="JavaScript"/>  | 
                                <img src={ReactLogo} alt="React" title="React"/> 
                                
                            </li>
                            <li> 
                                <img src={PhpLogo} alt="Php" title="PHP"/>  | 
                                <img src={MySQL} alt="MySQL" title="MySQL"/>
                            </li>
                        </ul>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills; 