import axios from "axios";
import { APIResponse } from "../models/Response";
import { UserDetailsModal } from "../models/UserDetails";
import axiosInstance from "../components/configuration/axios.config";

const client = axiosInstance;

const FETCH_DETAILS_USERS = "/user/getAllUsers";
const DELETE_DETAILS_USERS = "http://localhost:8080/getAllUsers";
const CREATE_NEW_USER = "http://localhost:8080/getAllUsers";
const UPDATE_USER_DETAILS = "http://localhost:8080/getAllUsers";

export const fetchAllUsers = async (): Promise<any> => {
  const response = await client.get(FETCH_DETAILS_USERS);
  if (response.status === 200 && response.data !== null) {
    return response.data;
  }
  throw new Error("Error occured fetching user details");
};

export const deleteUsers = async (userId: number) => {
  const response = await axios.delete(
    DELETE_DETAILS_USERS + `?userId=${userId}`
  );
  if (response.status === 200 && response.data !== null) {
    return response.data;
  }
  throw new Error("Error occured while deleting details");
};

export const createNewUser = async (
  newUser: UserDetailsModal
): Promise<APIResponse<UserDetailsModal>> => {
  const response = await axios.post(CREATE_NEW_USER, newUser);
  if (response.status === 200 && response.data !== null) {
    return response.data;
  }
  throw new Error("Error coccured creating new users");
};

export const updateUserDetails = async (
  updatedUser: UserDetailsModal
): Promise<APIResponse<UserDetailsModal>> => {
  const response = await axios.post(UPDATE_USER_DETAILS, updatedUser);
  if (response.data !== null && response.status === 200) {
    return response.data;
  }
  throw new Error("Error Updating user details");
};
