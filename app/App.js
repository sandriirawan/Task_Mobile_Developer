import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './Navigation';



function App() {
    React.useEffect(() => {
        SplashScreen.hide();
    });
    return <Navigation />;
}
export default App;