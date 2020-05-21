import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <div>
                <Layout>
                    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize: '16px'}} to="/">Louise Perez</Link> } scroll>
                        <Navigation>
                            {/* <Link to="/competences">Compétences</Link>
                            <Link to="/resume">Parcours</Link> */}
                            <Link to="/projects">Portfolio</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Louise Perez</Link> } >
                        <Navigation>
                            {/* <Link to="/competences">Compétences</Link>
                            <Link to="/resume">Parcours</Link> */}
                            <Link to="/projects">Portfolio</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <Main/>
                    </Content>
                </Layout>
            </div>
        );
    }
}
export default App;