# Component Guide
## Use as Needed
* import PropTypes from 'prop-types';
* import styled from 'styled-components';

## Prop Type Examples

```
[component-name].propTypes = {
 [variable-name]: PropTypes.string,
};
```

exampleArray: PropTypes.array,  
exampleBoolean: PropTypes.bool,  
exampleFunction: PropTypes.func,  
exampleNumber: PropTypes.number,  
exampleObject: PropTypes.object,  
exampleString: PropTypes.string,  
exampleSymbol: PropTypes.symbol,  
exampleReactElement: PropTypes.element,  
exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),  
exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),  
exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),  
optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),  

## Styled Examples

```
<Main className="card">  
  <ButtonTest className="btn"Test</ButtonTest  
</Main>  
```
```
const ButtonTest = styled.button`  
  background-color: red;  
  &:hover ${ButtonTest}  
  {  
    background-color: teal;  
  }  
`;  
```
```
const Main = styled.div`  
  background-color: #ecf0f1;  
  font-family: sans-serif;  
  padding-top: 50px;  
  `  
;  
```

## Stateless Example

```
function ExampleFunctionalComponent(props){
  return (
    <div>
      <h1>I am a standard functional component!</h1>
      <p>Here are props I receive from my parent:</p>
      <ul>
        <li>{props.examplePropOne}</li>
        <li>{props.examplePropTwo}</li>
      </ul>
    </div>
  );
}

export default ExampleFunctionalComponent;
```

### Class Example

```
class ExampleClassComponent extends React.Component {
  render() {
    return (
        <div>
          <h1>I am a stateful, class-based component!</h1>
          <p>These are props sent by my parent component:</p>
          <ul>
            <li>{this.props.examplePropOne}</li>
            <li>{this.props.examplePropTwo}</li>
         </ul>
       </div>
    );
  }
}

export default ExampleClassComponent;
```
