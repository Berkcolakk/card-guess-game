export interface IChapters {
    easy: IChapterInfo
    normal: IChapterInfo
    hard: IChapterInfo;
}

export interface IChapter {
    chapterId: number;
    cardsCount: number;
}
export interface IChapterInfo {
    intervalMs: number;
    chapters: IChapter[]
}
export interface ICards {
    id: number;
    imagePath: string;
    name: string;
}