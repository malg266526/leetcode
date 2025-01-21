// Pick

type MyPick<T, K extends keyof T> = {[key in K]: T[key] }

// Readonly

type MyReadonly<T> = {
    readonly [key in keyof T] : T[key]
}

// Tuple To Object

type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

// First of Array

type First<T extends any[]> = T extends [] ?  never : T[0]