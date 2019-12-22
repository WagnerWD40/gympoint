import React, { useState, useMemo, useEffect } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import createRouter from './routes';

import { UserContext } from './store/UserContext';

export default function App() {
    const [ id, setId ] = useState(null);

    useEffect(() => {
        async function recoverIdFromStorage() {
            const storedId = await AsyncStorage.getItem('@gympoint');

            if (storedId) {
                setId(storedId);
            };
        };

        recoverIdFromStorage();
    }, []);

    const providerId = useMemo(() => ({ id, setId }), [id, setId]);

    const Routes = createRouter(id);

    return (
        <>
            <StatusBar backgroundColor='#FFF' />
            <UserContext.Provider value={providerId} >
                <Routes />
            </UserContext.Provider>
        </>
    );
};