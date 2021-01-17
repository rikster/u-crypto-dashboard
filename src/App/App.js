import './App.css';
import WelcomeMessage from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import styled from 'styled-components';

const MyButton = styled.div`
    color: green;    
`

function App() {
  return (
      <AppLayout>
        <WelcomeMessage/>
        <MyButton> Hello </MyButton>
      </AppLayout>
  );
}

export default App;
