import React, { useState, memo } from 'react';
import UserRegistration from './components/UserRegistration'
import GreenLightRedLight from './components/GreenLightRedLight';
import './App.css';

function App() {
  const [userData, setUserData] = useState();

  const handleStartGame = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      {!userData ? (
        <UserRegistration onStartGame={handleStartGame} />
      ) : (
        <GreenLightRedLight userData={userData} />
      )}
    </div>
  );
}

export default memo(App);
