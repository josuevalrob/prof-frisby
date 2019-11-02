import Box from './box'
//Composing
const nexChartForNumberString = str =>
	Box(str)
		.map(s => s.trim())
		.map(r => new Number(r))
		.map(i => i + 1)
		.map(i => String.fromCharCode(i))
		.fold(c => c.toLowerCase())

console.log(nexChartForNumberString('64'))