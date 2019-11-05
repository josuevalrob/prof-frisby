import {Sum, All, First} from '../utils/semigroups'
import {Map, List} from 'immutable-ext'

// export const res = [1, 2].concat([3]).concat('c')
export const resSum = Sum(1).concat(Sum(2)).inspect()
export const resAll = All(true).concat(All(false)).inspect()
export const resFirst = First("blah").concat(First('Icecream')).inspect()

// export const res = [Sum(1), Sum(2), Sum(3)].reduce((acc, x)=>acc.concat(x), Sum.empty() ).inspect()

export const resList = List.of(Sum(1), Sum(2), Sum(3)).fold(Sum.empty()).inspect()

// export const res = Map({brian:3, sra:5})
//                     .map(Sum)
//                     .fold(Sum.empty()).inspect()

export const res = Map({brian:3, sra:5}).foldMap(Sum, Sum.empty()).inspect()