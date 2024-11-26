import React, { createContext, useContext, useState } from 'react';
import { users as initialUsers } from './data/users';

type User = {
  id: string;
  name: string;
  role: string;
};

type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // @ts-ignore
  const [users, setUsers] = useState<User[]>(initialUsers);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
