import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import PasswordReset from './Pages/PasswordReset';
import Profile from './Pages/Profile';

function App() {

  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">

        {/* <SignUp />
        <Login/>
        <PasswordReset/>*/}

        <Profile/>

        

      </MantineProvider>
    </>
  )
}

export default App
