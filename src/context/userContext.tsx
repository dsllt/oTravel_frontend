'use client';
import { UserDTO } from '../domain/models/user';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

type UserContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  displayProfile: boolean;
  setDisplayProfile: Dispatch<SetStateAction<boolean>>;
  userData: UserDTO;
  setUserData: React.Dispatch<React.SetStateAction<UserDTO>>;
};

const userDTODefaultValue: UserDTO = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  image: '',
  is_admin: false,
  created_at: '',
};

export const UserContext = createContext<UserContextType>({
  isLogged: false,
  setIsLogged: () => {},
  displayProfile: false,
  setDisplayProfile: () => {},
  userData: userDTODefaultValue,
  setUserData: () => {},
});

type Props = {
  children: React.ReactNode;
};

function UserProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState(false);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [userData, setUserData] = useState<UserDTO>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    is_admin: false,
    created_at: '',
  });

  useEffect(() => {}, []);

  const userInfo = {
    isLogged,
    setIsLogged,
    displayProfile,
    setDisplayProfile,
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
