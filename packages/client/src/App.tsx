import { LocationProvider, Router, useLocation } from '@reach/router';
import React, { useEffect } from 'react';
import { useAnalytics } from './hooks';
import { Home } from './screens/Home/Home';
import { Match } from './screens/Match/Match';

export default function App(): React.ReactElement {
    return (
        <LocationProvider>
            <RoutedApp />
        </LocationProvider>
    );
}

function RoutedApp(): React.ReactElement {
    const { pathname } = useLocation();
    const analytics = useAnalytics();

    // Initialize analytics.
    useEffect(() => {
        analytics.init();
    }, [analytics]);

    // Listen to page changes.
    useEffect(() => {
        analytics.page(pathname);
    }, [analytics, pathname]);

    return (
        <Router>
            <Home default path="/" />
            <Match path="/:roomId" />
        </Router>
    );
}
