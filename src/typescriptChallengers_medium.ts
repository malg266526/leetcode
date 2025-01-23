// Get Return Type

type MyReturnType<T extends (...args: any) => unknown> = T extends (...args: any) => infer S ? S : never

// Omit

type MyOmit<T, K> = {[P in keyof T as P extends K ? never : P] : T[P]}

// problem with readonly

type CorrectKeys<T, K extends keyof T> = { [ P in keyof T ]: P extends K ? never : P }[keyof T]

type MyOmit2<T, K extends keyof T> = { [Key in CorrectKeys<T, K> ]: T[Key] }

// third

type FilteredKeys<Keys extends string | number | symbol, Omitted extends string> = Keys extends Omitted ? never : Keys

type MyOmit3<Obj extends Record<any, any>, OmitedKeys extends string> = {
    [K in FilteredKeys<keyof Obj, OmitedKeys>]: Obj[K]
}

// Readonly 2

type MyReadonly<T, K extends keyof T = keyof T> = { readonly [Key in K] : T[Key]} & Omit<T, K>
