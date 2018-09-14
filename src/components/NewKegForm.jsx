/*
* Copy to other files
* import NewKegForm from './NewKegForm';
* <NewKegForm/>
*/
import styled from 'styled-components';
import { v4 } from 'uuid';
// import { Link, Switch, Route } from 'react-router-dom';

function NewKegForm(props)
{
  let _name, _brewer, _description, _abv, _price, _remaining;
  _name = _brewer = _description = _abv = _price = _remaining = null;

  function handleNewKegFormSubmission(event)
  {
    event.preventDefault();
    let newKeg = {
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value,
      id: v4()
    }
    props.onClickPushKeg(newKeg);
    _name.value = _brewer.value = _description.value = _abv.value = _price.value = _remaining.value = '';
  }

  return (
    <Main className="container">
      <form className="row" onSubmit={handleNewKegFormSubmission}>
        <input
          className="col-md"
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name = input;}}/>
        <input
          className="col-md"
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          className="col-md"
          id='description'
          placeholder='Keg Description'
          ref={(input) => {_description = input;}}/>
        <input
          className="col-md"
          id='abv'
          placeholder='ABV amount'
          ref={(input) => {_abv = input;}}/>
        <input
          className="col-md"
          id='price'
          placeholder='Price per Pint'
          ref={(input) => {_price = input;}}/>
        <input
          className="col-md"
          id='remaining'
          placeholder='Begining Stock'
          ref={(input) => {_remaining = input;}}/>
        <button className="col-md-3" type='submit' >Help!</button>
      </form>
    </Main>
  );
}

NewKegForm.propTypes = {
  // [variable-name]: PropTypes.string,
  onClickPushKeg: PropTypes.funct,
};

export default NewKegForm;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
