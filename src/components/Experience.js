import React , { Component} from 'react'; 
import { Grid, Cell } from 'react-mdl';

class Experiences extends Component {
    render () {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear}</p>
                </Cell>
                <Cell col={8}> 
                   <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                   <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experiences;