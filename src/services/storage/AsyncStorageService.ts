import AsyncStorage from "@react-native-async-storage/async-storage";
import { IStorageService } from "./StorageService";

export class AsyncStorageService implements IStorageService {
    setData(key: string, value: string): Promise<void> {
        return AsyncStorage.setItem(key, value);
    }
    async getData<T>(key: string): Promise<T | null> {
        const data = await AsyncStorage.getItem(key);

        if(data) {
            try {
                return JSON.parse(data) as T;
            } catch {
                return data as T;
            }
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