import fs from 'fs'
import path from 'path'

import {fromNullable, tryCatch} from '../utils/either'

export const findColor = name =>
	fromNullable({red:'#ff4444', blue:'#3b5998', yellow: '#fff68f'}[name])

export const findColorResult = () =>
  findColor('blue')
    .map( c => c.slice(1))
    .fold(e => 'no color',
          c => c.toUpperCase())


// export const getPort = () => {
//   try {
//     const str = fs.readFileSync(path.resolve(__dirname, '../config.json'));
//     const config = JSON.parse(str)
//     return config.port
//   } catch(e) {
//     return 3000
//   }
// }
export const getPort = () =>
  tryCatch(() =>
    fs.readFileSync(path.resolve(__dirname, '../config.json')))
  .chain(c => tryCatch(()=>JSON.parse(c))) 
    //? what about if the file doesnt have a json(?)
    // we need to check if the function return something or not... tryCatch again 🦸‍♂️
    // however the map will  force us to fold twice, one for the right and other for the left
    // but chain will return one of them. 
  .fold(
    e => 3000,
    c => c.port)