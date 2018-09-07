// Autogenerated using npm run gen App
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Inventory from './Inventory';
import Error404 from './Error404';
import KegDetail from './KegDetail';

function App(){
  return (
    <Main className="container">
      <HeadOne className="jumbotron">Welcome to The Tap</HeadOne>
      <Header/>
      <Switch>
        <Route exact path='/' component={Inventory} />
        <Route exact path='/keg' component={KegDetail} />
        <Route component={Error404} />
      </Switch>
    </Main>
  );
}

export default App;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;

const HeadOne = styled.h1`
color: navy;
text-align: center;
`;

/*
* Copy to other files
* import App from './App';
* <App/>
*/
