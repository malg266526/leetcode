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

// Includes

type IsBoolean<T extends boolean> = (true  | false) extends T ? true : false;
type b11 = IsBoolean<boolean>;
type b12 = IsBoolean<true>;
type b13 = IsBoolean<false>;

type isExact<T, U> = [T] extends [U] ? [U] extends [T] ? true : false :false;

// failuje dla readonly - non readonly

type Includes<T extends any[], U> =
    T extends [] ? false : T extends [infer First, ...infer Rest] ?
        isExact<U, T[0]> extends true ? true : Includes<Rest, U> : never;

// not always working - problems with boolean & true/false

type Includes2<T extends readonly any[], U> = {
    [P in T[number]]: true
}[U] extends true ? true : false;

// Push

type Push<T extends any[], U> = [...T, U]

// Unshift

type Unshift<T extends unknown[], U> = [U, ...T]

// Parameters

type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : never