export const date = (value: string): string => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1')
        .replace(/(\/\d{4})\d+?$/, '$1');
};

export const time = (value: string): string => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1:$2')
        .replace(/(\d{2})(\d)/, '$1')
        .replace(/(\/\d{2})\d+?$/, '$1');
};
