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

//  Length of Tuple

type Length<T> = T extends readonly any[] ? T['length'] : Length<T>

// Exclude

type MyExclude<T, U extends keyof T> = T extends U ? never : T

// Awaited

type MyAwaited<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U>
        ? U extends PromiseLike<any>
            ? MyAwaited<U>
            : U
        : never

// If

type If<C, T, F> = C extends true ? T : F

// Concat

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]