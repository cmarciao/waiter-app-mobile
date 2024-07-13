import { createContext, ReactNode, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

type WebSocketContextProps = {
    subscribe: (path: string, callback: (data: unknown) => void) => void;
    publish: (path: string, data: unknown) => void;
    unsubscribe: (path: string) => void;
}

type WebSocketProviderProps = {
    children: ReactNode;
}

export const WebSocketContext = createContext({} as WebSocketContextProps);

export function WebSocketProvider({ children }: WebSocketProviderProps) {
	const socket = useRef<Socket | null>(null);

	const isWebSocketConnected = useRef(false);
	const isWebSocketConnecting = useRef(false);

	useEffect(() => {
		if(!isWebSocketConnected.current && !isWebSocketConnecting.current) {
			isWebSocketConnecting.current = true;
			
			socket.current = io('http://192.168.100.68:80', {
				transports: ['websocket'],
			});
	
			socket.current.on('connect', () => {
				isWebSocketConnected.current = true;
			});
		}
	}, []);
	
	function subscribe(path: string, callback: (data: unknown) => void) {
		socket.current?.on(path, callback);
	}

	function publish(path: string, data: unknown) {
		socket.current?.emit(path, data);
	}
	
	function unsubscribe(path: string) {
		socket.current?.off(path);
	}

	return (
		<WebSocketContext.Provider value={{
			subscribe,
			publish,
			unsubscribe
		}}>
			{children}
		</WebSocketContext.Provider>
	);
}