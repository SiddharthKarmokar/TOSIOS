import { LocationProvider, Router } from '@reach/router';
import React from 'react';
import { HomeScreen } from './screens/Home/Home';
import { GameScreen } from './screens/Match/Game';

export default function App(): React.ReactElement {
    return (
        <LocationProvider>
            <RoutedApp />
        </LocationProvider>
    );
}

function RoutedApp(): React.ReactElement {
    return (
        <Router>
            <HomeScreen default path="/" />
            <GameScreen path="/:roomId" />
        </Router>
    );
}
