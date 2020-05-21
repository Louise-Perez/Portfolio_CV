import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import ProjectDev from './ProjectPerso';
import ProjectPro from './ProjectPro';
import style from '../CSS/projects.module.css'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab : 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return (
                <div> <ProjectDev /></div>
            )
        } 
        else if(this.state.activeTab === 1) {
            return (
                <div>
                 <ProjectPro />
                </div>
            )
        } 
    }

    render () {
        return (
            <div className={style.projectBody}>
                <Tabs style={{backgroundColor: 'white', marginTop: '60px'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Projets</Tab>
                    <Tab>Pro</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects; 