/*
* Copy to other files
* import NewKegForm from './NewKegForm';
* <NewKegForm/>
*/
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function NewKegForm(){
  return (
    <Main>
      <h1>NewKegForm Component Created Successfully</h1>
    </Main>
  );
}

/*
NewKegForm.propTypes = {
  [variable-name]: PropTypes.string,
};
*/

export default NewKegForm;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
