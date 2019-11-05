export const Sum = x => ({
	x,
	concat: ({x:y}) => Sum(x+y),
	inspect: () => `Sum(${x})`}
)
Sum.empty = () => Sum(0)

export const All = x => ({
	x,
	concat: ({x:y}) => All(x&&y),
	inspect: () => `All(${x})`
})
All.empty = () => All(false)

//always keep the first one
export const First = x => ({
	x,
	concat: ()  => First(x),
	inspect: () =>`All(${x})`
})