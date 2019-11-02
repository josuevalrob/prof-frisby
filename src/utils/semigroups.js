export const Sum = x => ({
	x,
	concat: ({x:y}) => Sum(x+y),
	inspect: () => `Sum(${x})`}
)

export const All = x => ({
	x,
	concat: ({x:y}) => All(x&&y),
	inspect: () => `All(${x})`
})
//always keep the first one
export const First = x => ({
	x,
	concat: ()  => First(x),
	inspect: () =>`All(${x})`
})