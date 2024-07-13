export function pastTime(data: Date) {
    const now = new Date();
    const difference = now.getTime() - data.getTime();

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
        return `Há ${hours} hora${hours === 1 ? '' : 's'}`;
    } else if (minutes > 0) {
        return `Há ${minutes} minuto${minutes === 1 ? '' : 's'}`;
    } else {
        return `${seconds} segundo${seconds === 1 ? '' : 's'}`;
    }
}