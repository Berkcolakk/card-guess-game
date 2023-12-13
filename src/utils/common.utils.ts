export function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

export const generateUniqueNumbers = (count: number, chapterTotalCardCount: number) => {
    const randomNumbers = [] as number[];

    let loop = true;
    while (loop) {
        const random = Math.floor(Math.random() * count);
        if (!randomNumbers.includes(random)) {
            randomNumbers.push(random)
        }
        if (chapterTotalCardCount === randomNumbers.length) {
            loop = false;
        }
    }
    return randomNumbers;
}