export type UserType = {
    id: string;
    name: string;
    role: string;
  };
  
export type UserContextType = {
    users: UserType[];
    allUsers: UserType[];
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
};