import axios, { AxiosResponse } from "axios";
import api from "../..";
import { IUser } from "../../../App";

type getUsersParams = {
  include: string;
  results: number;
};

type getUsersResponse = {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
  results: IUser[];
};

const getUsers = async ({ include, results }: getUsersParams) => {
  try {
    const users = await api.get<getUsersResponse>("/", {
      params: { inc: include, results },
    });

    return users.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
    // retry req
  }
};

export { getUsers };
