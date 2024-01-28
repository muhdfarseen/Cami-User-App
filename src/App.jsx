import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {

  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">

        <SignUp />
        <Login/>

      </MantineProvider>
    </>
  )
}

export default App
