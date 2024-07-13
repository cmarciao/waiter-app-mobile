import { useContext } from 'react';
import { WebSocketContext } from '../contexts/WebSocketContext';

export function useWebsocket() {
	return useContext(WebSocketContext);
}
