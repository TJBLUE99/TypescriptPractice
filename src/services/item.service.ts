import axios from "axios";
import { Item } from "../models/Item";
import { APIResponse } from "../models/Response";

export const fetchAllItems = async (): Promise<APIResponse<Item>> => {
  const response = await axios.get("/getItems");
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Something went wrong while fetching items...");
};

export const DeleteItemsById = async (
  itemId: number
): Promise<APIResponse<Item>> => {
  const response = await axios.delete(`/deleteById/id=${itemId}`);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Something went wrong while deleting items...");
};

export const fetchItemById = async (): Promise<APIResponse<Item>> => {
  const response = await axios.get("/getById");
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Something went wrong while fetching item...");
};

export const createNewItem = async (
  itemPayload: Item
): Promise<APIResponse<Item>> => {
  const response = await axios.post("/createNewItem", itemPayload);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Something went wrong while fetching items...");
};

export const updateItem = async (
  updatedPayload: Item
): Promise<APIResponse<Item>> => {
  const response = await axios.post("/getItems", updatedPayload);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Something went wrong while fetching items...");
};
