export type prefecture = {
    prefCode: number;
    prefName: string;
};

export type populationDataPerYear = {
    year: number;
    value: number;
    rate?: number;
};

export type populationDataPerLabel = {
    data: populationDataPerYear[];
};

export type populationData = {
    label: string;
    data: populationDataPerLabel[];
};
