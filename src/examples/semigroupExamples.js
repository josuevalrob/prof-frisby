import {Sum, All, First} from '../utils/semigroups'
import {Map} from 'immutable-ext'

export const res = [1, 2].concat([3]).concat('c')
export const resSum = Sum(1).concat(Sum(2)).inspect()
export const resAll = All(true).concat(All(false)).inspect()
export const resFirst = First("blah").concat(First('Icecream')).inspect()

const acct1 = Map({name:First('Nico'), isPaid:All(true), points:Sum(10), friends:['Frank']})
const acct2 = Map({name:First('Nico'), isPaid:false, points:2, friends:['Gatsby']})

export const acctResult = acct1.concat(acct2)