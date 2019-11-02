import {Box} from '../utils/box'
//Composing
export const nexChartForNumberString = str =>
	Box(str)
		.map(s => s.trim())
		.map(r => new Number(r))
		.map(i => i + 1)
		.map(i => String.fromCharCode(i))
		.fold(c => c.toLowerCase())


//Composing multiple args
const moneyToFLoat = str =>
	Box(str)
	.map(str => str.replace(/\$/g, ''))
	.map(r => parseFloat(r))

const percentToFloat = str =>
	Box(str.replace(/\%/g, ''))
	.map(r => parseFloat(r))
	.map(n => n * 0.01)

export const applyDiscount = (price, discount) =>
	moneyToFLoat(price) //return a wrapped box
	.fold(cost =>
		percentToFloat(discount) //returns the discount
			.fold(savings =>
					cost - cost * savings)) //apply the discount
