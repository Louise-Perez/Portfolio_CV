import React, {Component} from 'react'; 
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl'; 
import Lesvieillesvis from '../image/projets/lesvieillesvis.png';
import SiteCV from '../image/projets/siteCV.png';

class ProjectPro extends Component {
    render () {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {/* Project 1 */}
                <Card shadow={5} style={{minwidth: '450', margin: '10px auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Lesvieillesvis})`, backgroundSize: 'cover', backgroundPosition: '40% 25%' }}></CardTitle>
                    <CardText>
                        Réalisation d'un site vitrine pour un artisan. 
                        <br/>
                        CMS : Wordpress
                    </CardText>
                    <CardActions border>
                        <Button><a href="https://lesvieillesvis.com" style={{color: '#5F9EA0'}}>Lien vers le site</a></Button>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minwidth: '450', margin: '10px auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${SiteCV})`, backgroundSize: 'cover', backgroundPosition: '40% 25%' }}></CardTitle>
                    <CardText>
                        Réalisation d'un site CV. 
                        <br/>
                        Langage : ReactJs
                    </CardText>
                    <CardActions border>
                        <Button><a href="https://louise-perez.fr" style={{color: '#5F9EA0'}}>Lien vers le site</a></Button>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                {/* <Card shadow={5} style={{minwidth: '450', margin: '10px auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', backgroundColor:'#000000'}}></CardTitle>
                    <CardText>
                        
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                </Card> */}

            </div>
        )
    }
}

export default ProjectPro; 