export type TDefaultData = Record<string, string>;

export type TDefaultArr = Record<string, string | number>[];

export type TResponseData = Record<string, TDefaultData | TDefaultArr>;

export type TNav = (TDefaultData & { id: number; pics: TDefaultData[]; })[];
