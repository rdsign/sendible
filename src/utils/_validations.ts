export const validateDate = (date: string, time: string) => {
    const dt = new Date();
    const currentDate = dt.toLocaleDateString('en-GB').split('/').join('');
    const currentTime = dt.getHours();
    const currentMinutes = dt.getMinutes();

    const incoming = parseInt(`${date.split('/').join('')}${time.split(':').join('')}`, 10);
    const current = parseInt(`${currentDate}${currentTime}${currentMinutes}`, 10);

    return incoming > current;
};

// export const validateTime = (time: string) => {
//     const date = new Date();
//     const currentDate = date.toLocaleDateString('en-GB');
//     const currentTime = date.getHours();
//     const currentMinutes = date.getMinutes();

//     console.log(currentDate, currentTime, currentMinutes);
// };
