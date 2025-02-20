import { FailedResponse, SuccessResponse } from "../constants/response";
import { axiosInstance } from "./axios";

export const getRequest = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    if (response.data?.status) {
      return SuccessResponse(response?.data?.data, response?.data?.message);
    } else if(response.status == 200){
      return SuccessResponse(response?.data, response?.data?.message);
    } else {
      return FailedResponse(
        response?.data?.message || "Some error occured",
        response?.data
      );
    }
  } catch (error: any) {
    return FailedResponse(
      error?.response?.data?.message || "Some error occured",
      error?.response?.data
    );
  }
};


export const postRequest = async (data: any, url: string) => {
  try {
    const response = await axiosInstance.post(url, data);
    console.log(response)
    if (response.data?.status) {
      return SuccessResponse(response?.data?.data, response?.data?.message);
    } else {
      return FailedResponse(
        response?.data?.message || "Some error occured",
        response?.data
      );
    }
  } catch (error: any) {
    console.log("response error", error);
    return FailedResponse(
      error?.response?.data?.message || "Some error occured",
      error?.response?.data
    );
  }
};
