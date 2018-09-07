// Autogenerated using npm run gen KegDetail
/*
* Copy to other files
* import KegDetail from './KegDetail';
* <KegDetail/>
*/
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

class KegDetail extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = props;
    this.remaining = this.state.remaining;
  }

  render(){
    return (
      <Main>
        <Keg>
          <Name>{this.state.name}
            <ul>
              <Details>Brewer: {this.state.brewer}</Details>
              <Details>Desc: {this.state.description}</Details>
              <Details>ABV: {this.state.abv}</Details>
              <Details>Price: ${this.state.price}</Details>
              <Details>In-Stock: {this.state.remaining} pints</Details>
              <Button className="btn btn-primary" onClick={() => this.sellPints()}>Sell</Button>
            </ul>
          </Name>
        </Keg>
      </Main>
    );
  }

  sellPints()
  {
    console.log(this.state.remaining);
    let tempRemains = parseInt(this.state.remaining);
    tempRemains--;
    this.setState({
      remaining: tempRemains.toString()
    });
  }
}

export default KegDetail;

const Main = styled.div`

`;

const Keg = styled.ul`
text-align: left;
display: flex;
flex-direction: column;
justify-content: left;
align-items: start;
background-color: lightgrey;
color: black;
`;

const Name = styled.li`
`;

const Details = styled.li`
`;

const Button = styled.button`

`;

KegDetail.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
};
