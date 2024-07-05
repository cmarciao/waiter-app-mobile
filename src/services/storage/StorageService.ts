export type IStorageService = {
    setData(key: string, value: string): Promise<void>;
    getData<T>(key: string): Promise<T | null>
    removeData(key: string): Promise<void>;
    clearAll(): Promise<void>;
}

class StorageService implements IStorageService {
    private storageService?: IStorageService;

    initialize(storageService: IStorageService) {
        this.storageService = storageService;
    }

    setData(key: string, value: string): Promise<void> {
        return this.storageService!.setData(key, value);
    }

    getData<T>(key: string): Promise<T | null> {
        return this.storageService!.getData(key);
    }

    removeData(key: string): Promise<void> {
        return this.storageService!.removeData(key);
    }

    clearAll(): Promise<void> {
        return this.storageService!.clearAll();
    }
}

export default new StorageService();
