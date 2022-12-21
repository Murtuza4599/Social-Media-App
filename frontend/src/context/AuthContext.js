import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "6378da67947dd14884f92975",
    username: "jane",
    email: "jane@gmail.com",
    password: "$2b$10$wuQNcYcW/ZoiVPvpelUUfeDyQgAL6bcXkR5zwsAoKKSlRo4IyUazq",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    isAdmin: false,
    followings: [],
    city: "New York",
    desc: "Hey Friends!!",
    from: "Madrid",
    relationship: 1,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
