import UsersService from "@/services/UsersService";
import { useQuery } from "@tanstack/react-query";

export function useMe() {
    const { data, isFetching, isError, refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: UsersService.me
    });

    return {
        me: data,
        loadMe: refetch,
        isFetchingMe: isFetching,
        isFetchMeError: isError,
    };
}