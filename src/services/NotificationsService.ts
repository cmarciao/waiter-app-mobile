import { api } from "./utils/api";
import { Notification } from "../types/Notification";

class NotificationsService {
    async listAll(): Promise<Notification[]> {
        const response = await api.get<Notification[]>('/notifications');
        return response.data;
    }
}

export default new NotificationsService();