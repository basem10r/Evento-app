import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Main from './containers/Main';
function App() {
  // user check boolean 
  let [isUserAuthenticated, setIsUserAuthenticated] = useState();

  // oninit 

  useEffect(() => {
    checkUserExist();
  }, [])

  // check user exist in the local storage 

  const checkUserExist = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsUserAuthenticated(true)
    } else {
      setIsUserAuthenticated(false)
    }
  }
  return (
    <>
      <Main isUserAuthenticated={isUserAuthenticated} />
    </>
  );
}

export default App;
