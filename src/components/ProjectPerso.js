import React, {Component} from 'react'; 
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl'; 
import Plantdocaz from '../image/projets/plantdocaz.png';
import OlympeParc from '../image/projets/olympeparc.png';
import TapnDie from '../image/projets/tapndie.png';

class ProjectDev extends Component {
    render () {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {/* Project 1 */}
                <Card shadow={5} style={{minwidth: '450', margin: '10px auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${OlympeParc})`, backgroundSize: 'cover', backgroundPosition: '50% 25%'}}>Olympe Parc</CardTitle>
                    <CardText>
                        Site de préréservatoin de billet pour un parc d'attractions.
                        <br/>
                        Langage utilisé : HTML, CSS, PHP, MySQL
                    </CardText>
                    <CardActions border>
                        <Button><a href='https://github.com/Louise-Perez/OlympeParc'  style={{color: '#5F9EA0'}}>GitHub</a></Button>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minwidth: '450', margin: '10px auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Plantdocaz})`, backgroundSize: 'cover', backgroundPosition: '50% 25%'}}></CardTitle>
                    <CardText>
                        Site d'annonce en ligne favorisant le dons de plantes
                        <br/>
                        Langage utilisé : HTML, CSS, PHP, MySQL
                    </CardText>
                    <CardActions border>
                        <Button><a href='https://github.com/Louise-Perez/PlantDocaz'  style={{color: '#5F9EA0'}}>GitHub</a></Button>
                    </CardActions>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minwidth: '450', margin: '10px auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${TapnDie})`, backgroundSize: 'cover', backgroundPosition: '50% 25%'}}>Tap N Die</CardTitle>
                    <CardText>
                        Idle game réalisé en groupe.<br/>
                        (Site non responsive) <br/>
                        Langage utilisé : HTML, CSS, Java Script
                    </CardText>
                    <CardActions border>
                        <Button><a href='https://github.com/Louise-Perez/Tap-N-Die'  style={{color: '#5F9EA0'}}>GitHub</a></Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default ProjectDev; 