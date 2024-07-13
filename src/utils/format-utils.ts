import { OrderState } from "@/types/Order";
import { ResponseError } from "@/types/ResponseError";
import { AxiosError } from "axios";

export function formatPrice(price: number) {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(price);
}

export function formatOrderStateToIcon(orderState: OrderState) {
    switch(orderState) {
        case OrderState.WAITING: {
            return '🕒';
        }

        case OrderState.PREPARING: {
            return '👨‍🍳';
        }

        default: {
            return '✅';
        }
    }
}

export function formatOrderStatusColor(orderState: string): string {
	switch (orderState) {
		case OrderState.WAITING: {
			return '#D76C30';
		}

		case OrderState.PREPARING: {
			return '#D76C30';
		}

		case OrderState.FINISHED: {
			return '#30D787';
		}

		default: {
			return '#666666';
		}
	}
}

export function formatOrderStateToOrderMessage(orderState: string): string {
	switch (orderState) {
		case OrderState.WAITING: {
			return 'Na fila';
		}

		case OrderState.PREPARING: {
			return 'Em produção';
		}

		case OrderState.FINISHED: {
			return 'Pronto';
		}

		default: {
			return 'Finalizado';
		}
	}
}

export function formatOrderStateToNotificationMessage(orderState: string): string {
	switch (orderState) {
		case OrderState.WAITING: {
			return 'Na fila';
		}

		case OrderState.PREPARING: {
			return 'Em produção';
		}

		default: {
			return 'Pronto';
		}
	}
}

export function formatAxiosErrorToResponseError(error: unknown): ResponseError {
	const axiosError = error as AxiosError;
	return axiosError.response?.data as ResponseError;
}