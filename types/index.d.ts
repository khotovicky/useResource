declare function useResource<T>(callback: () => Promise<T>): {
    isLoading: boolean;
    data: T | undefined;
    error: undefined;
    mutate: (mutateData: (data?: T) => T) => void;
};

export { useResource };
