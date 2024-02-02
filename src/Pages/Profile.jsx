import React, { useEffect, useState } from 'react';
import { Tabs, rem } from '@mantine/core';
import { IconHome, IconUserCircle, IconMessage, IconBus, IconSettings } from '@tabler/icons-react';
import Home from '../TabComponents/Home';
import Busmap from '../TabComponents/Busmap';
import Messages from '../TabComponents/Messages';
import ProfileSettings from '../TabComponents/ProfileSettings';

function Profile() {
  const iconStyle = { width: rem(15), height: rem(15) };
  const [tabListBackgroundColor, setTabListBackgroundColor] = useState('');

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (prefersDarkMode) {
        setTabListBackgroundColor('#242424'); 
      } else {
        setTabListBackgroundColor('white'); 
      }
    };

    handleColorSchemeChange();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleColorSchemeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  return (
    <div>
      <Tabs defaultValue="busmap" inverted>

        <Tabs.Panel value="home"> <Home /> </Tabs.Panel>
        <Tabs.Panel value="busmap"> <Busmap /> </Tabs.Panel>
        <Tabs.Panel value="messages"> <Messages /> </Tabs.Panel>
        <Tabs.Panel value="profilesettings"> <ProfileSettings /> </Tabs.Panel>

        <Tabs.List style={{ position: 'fixed', bottom: 0, background: tabListBackgroundColor, height: '50px', width: '100%', zIndex: 1000 }} grow>
          {/* <Tabs.Tab value="home" leftSection={<IconHome style={iconStyle} />}> </Tabs.Tab> */}
          <Tabs.Tab value="busmap" leftSection={<IconBus style={iconStyle} />}> </Tabs.Tab>
          <Tabs.Tab value="messages" leftSection={<IconMessage style={iconStyle} />}> </Tabs.Tab>
          <Tabs.Tab value="profilesettings" leftSection={<IconUserCircle style={iconStyle} />}> </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}

export default Profile;
