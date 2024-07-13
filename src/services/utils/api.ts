import axios from 'axios';
import StorageService from '../storage/StorageService';
import { storageNames } from '../../constants/storage-names';

const baseURL = 'http://192.168.100.68:3333/';
const api = axios.create({
    baseURL
});

api.interceptors.request.use(async (config) => {
    const token = await StorageService.getData(storageNames.accessToken);
    
    config.headers['User-Agent'] = 'mobile';
    
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { api };
