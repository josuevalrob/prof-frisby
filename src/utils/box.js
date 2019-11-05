 /**
	* basically captures something in a context.
	* @param {*} x anything.
	*/
export const Box = x => ({
	/**
	 * Return a function wrapped in a Box that will
	 * be called by the next function
	 */
	map: f => Box(f(x)), //identity functor (?)
	/**
	 * remove the value from our type
	 */
	fold: f => f(x),
	inspect: () => `Box(${x})`
})
/**
 * Will take a g for a function.
 * None of this will run if you dont pass a function. 
 * fold is pulling the trigger.
 * @param {function} g
 */
export const LazyBox = g => ({
	fold: f => f(g()),
	map: f => LazyBox(()=>f(g()))
})