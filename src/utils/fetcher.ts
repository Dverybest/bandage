import { BASE_URL } from "@/config";
import { objectToQueryString } from "./objectToQueryString";

type IParam = {
  url: string;
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  data?: BodyInit;
  params?: Record<string, string | number>;
  headers?: HeadersInit;
};

export const fetcher = async <T>({
  url,
  method,
  data,
  headers,
  params,
}: IParam): Promise<T> => {
  try {
    console.log({ params }, objectToQueryString(params));

    const response = await fetch(
      `${BASE_URL}${url}?${objectToQueryString(params)}`,
      {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
