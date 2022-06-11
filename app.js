const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0)



const findMin = (...args) => Math.min(...args)


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})



const doubleAndReturnArgs = (arr, ...arg) => [...arr, ...args.map(v => v * 2)]



const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}


const extend = (array1, array2) => [...array1, ...array2]


let newObj = {...obj}
newObj[key] = val;
return newObj;


let newObj = {...obj}
delete newObj[key]
return newObj;


const combine = (obj1, obj2) => {return {...obj1, ...obj2}}



const update = (obj) => {return {...obj, [key]: val}}