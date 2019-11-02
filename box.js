 const Box = x => ({
	map: f => Box(f(x)),
	fold: f => f(x), //remove the value from our type
	inspect: () => `Box(${x})`
})

export default Box