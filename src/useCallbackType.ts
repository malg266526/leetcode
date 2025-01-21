
const useCallback = <T,>(callback: T, dependencies: any[]) => callback

const useMemo = <T,>(callback: () => T, dependencies: any[]) => callback()

const testFunction = useMemo(() => 5, []);
const result = testFunction;