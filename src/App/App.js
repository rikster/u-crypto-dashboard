import './App.css';
import WelcomeMessage from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import styled, {css} from 'styled-components';

const MyButton = styled.div`
    color: green;
    ${props => props.primary && css`
      color: palevioletred;
    `}
`

function App() {
  return (
      <AppLayout>
        <WelcomeMessage/>
        <MyButton> Hello </MyButton>
          <MyButton primary> Hello </MyButton>
      </AppLayout>
  );
}

export default App;
