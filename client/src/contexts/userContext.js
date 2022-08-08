import {createContext, useContext} from 'react';

export const UserContext = createContext({});


// Custom Hook
export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
};
