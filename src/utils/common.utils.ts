export function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}
export const generateUniqueNumbers = (count: number,chapterTotalCardCount:number) => {
    const addedNumbers = [] as number[];
    const randomNumbers = [] as number[];

    let loop = true;
    while (loop) {
        const random = Math.floor(Math.random() * count);
        if (!addedNumbers.includes(random)) {
            randomNumbers.push(random)
            addedNumbers.push(random);
        }
        if (chapterTotalCardCount === randomNumbers.length) {
            loop = false;
        }
    }
    console.log(randomNumbers)
    return randomNumbers;
}