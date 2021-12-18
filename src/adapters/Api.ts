import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class Api {
  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({});
    this.http.interceptors.request.use(this.requestInterceptor);
    const [successHandler, errorHandler] = this.responseInteceptor();
    this.http.interceptors.response.use(successHandler, errorHandler);
  }
  requestInterceptor = (config: AxiosRequestConfig) => {
    // attach token
    return config;
  };

  responseInteceptor = () => {
    return [
      (resp: AxiosResponse) => {
        // Response with status code 2xx
        return resp;
      },
      (resp: AxiosResponse) => {
        // Response with outside status code 2xx
        console.log(resp.data);
        return resp;
      },
    ];
  };

  get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, data: object): Promise<AxiosResponse<T>> {
    return this.http.post<T>(url, data);
  }

  put<T>(url: string, data: object): Promise<AxiosResponse<T>> {
    return this.http.put<T>(url, data);
  }

  delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.http.delete<T>(url);
  }
}
