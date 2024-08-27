import { api } from "./utils/api";
import { Notification } from "@/types/Notification";

class NotificationsService {
    async listAll(): Promise<Notification[]> {
        const response = await api.get<Notification[]>('/notifications');
        return response.data;
    }

    async hasNewNotification() {
        const response = await api.get('/notifications/has-notifications');
        return response.data;
    }

    async read(): Promise<void> {
        const response = await api.patch('/notifications/read');
        return response.data;
    }
}

export default new NotificationsService();
