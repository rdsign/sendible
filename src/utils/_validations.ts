export const parseDate = (date: string): number => {
    const raw = date.split('/');
    return new Date(parseInt(raw[2], 10), parseInt(raw[1], 10) - 1, parseInt(raw[0]), 10).getTime();
};

export const parseTime = (time: string): number => {
    return parseInt(time.split(':').join(''), 10);
};

export const validateDate = (date: string, time: string): boolean => {
    const ndt = new Date();
    const newTime = ndt.getHours();
    const newMinutes = String(ndt.getMinutes()).padStart(2, '0');

    const incoming = parseDate(date) + parseTime(time);
    const current =
        parseDate(ndt.toLocaleDateString('en-GB')) + parseInt(`${newTime}${newMinutes}`, 10);

    return incoming > current;
};
