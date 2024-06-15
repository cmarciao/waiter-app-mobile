/**
 * Artificial delay to simulate a waiting time.
 * 
 * @param timeInMillis waiting time in millis seconds.
 * @returns A promise that will be resolved after the waiting time.
 */
export async function sleep(timeInMillis: number = 1000) {
    return new Promise((res) => setTimeout(res, timeInMillis));
}