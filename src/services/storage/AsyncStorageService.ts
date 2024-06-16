import AsyncStorage from "@react-native-async-storage/async-storage";
import { IStorageService } from "./StorageService";

export class AsyncStorageService implements IStorageService {
    setData(key: string, value: string): Promise<void> {
        return AsyncStorage.setItem(key, value);
    }
    async getData<T>(key: string): Promise<T | null> {
        const data = await AsyncStorage.getItem(key);

        if(data) {
            return JSON.parse(data);
        }

        return null;
    }

    removeData(key: string): Promise<void> {
        return AsyncStorage.removeItem(key);
    }
    
    clearAll(): Promise<void> {
        return AsyncStorage.clear();
    }

}