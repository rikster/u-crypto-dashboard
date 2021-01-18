import './App.css';
import WelcomeMessage from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import styled, {css} from 'styled-components';

function App() {
  return (
      <AppLayout>
        <WelcomeMessage/>
      </AppLayout>
  );
}

export default App;
