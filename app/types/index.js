export type IndexHeightItem = {
	[string]: number
}

export type GridType = {
	[number]: Array<IndexHeightItem>
}

export type Params = {
	columnMargin: number,
	columnWidth: number,
	containerMaxWidth: number,
	containerSelector: string,
	itemSelector: string,
	transitionDuration: string,
	transitionTimingFunction: string
}
