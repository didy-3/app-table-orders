import axios, { type AxiosRequestConfig } from "axios";
import notify from "devextreme/ui/notify";
import {useMainStore} from '@/store/index'
/**
 * 
 * @param {String} method 
 * @param {String} url 
 * @param {Object | String} data 
 * @param {Object} params 
 * @param {Function} successCallback 
 * @param {Function} errorCallback 
 */
export function axiosReq (
    method: string,
    url: string, 
    data={}, 
    params={}, 
    successCallback?: ((data:any) => void)| undefined, 
    errorCallback?: (() => void) | undefined, 
):Promise<void> {    
    let main = useMainStore()
    const options:AxiosRequestConfig = {
        method: method,
        url: url,
        headers: {
                "Content-Type": "application/json",
                Token: `${main.token}`,
        },
        params: params,
        data: data,
    };
    return axios
        .request(options)
        .then((data) => {
            successCallback ? successCallback(data.data) : ''            
        })
        .catch(function (error) {
            errorCallback ? errorCallback() : '' 
            notify(error.response.data, "error", 5000);
        });
}

export default axiosReq