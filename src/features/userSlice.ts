import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetailsModal } from "../models/UserDetails";
import { createNewUser, fetchAllUsers } from "../services/user.service";

interface userState {
  users: UserDetailsModal[];
  isLoading: boolean;
  isError: string | null;
}

const initialState: userState = {
  users: [],
  isLoading: false,
  isError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserDetailsModal[]>) => {
      state.users = action.payload;
    },

    addUsers: (state, action: PayloadAction<UserDetailsModal>) => {
      state.users.push(action.payload);
    },

    deleteUsers: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.userId != action.payload);
    },
  },
});

export const { setUsers, addUsers, deleteUsers } = userSlice.actions;

export const fetchUsers = async (dispatch: any) => {
  const response = await fetchAllUsers();
  dispatch(setUsers(response.data));
};

export const createNewUsers = async (
  dispatch: any,
  userDetails: UserDetailsModal
) => {
  const response = await createNewUser(userDetails);
  dispatch(addUsers(response.data[0]));
};

export const deletUsers = (): Promise<boolean> => {
  return new Promise((resolve) => {
    resolve(true);
  });
};

export default userSlice.reducer;
