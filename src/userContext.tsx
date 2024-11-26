import React, { createContext, useContext, useState } from 'react';
import { allUsers } from './data/users';
import {UserType,UserContextType} from './types/user'


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserType[]>(allUsers.slice(0, 3)); // By default, the first three users will be added to the group users list.
  return (<UserContext.Provider value={{ users, allUsers, setUsers }}>{children}</UserContext.Provider>);
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  };
  return context;
};
