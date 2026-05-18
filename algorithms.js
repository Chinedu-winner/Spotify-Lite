function isPalindrome(str) {
    if (typeof str !== 'string') return false;

    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}

function capitalizeTitle(title) {
    if (typeof title !== 'string') return '';

    return title
        .split(' ')
        .map(word => {
            if (!word) return '';
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}

function sumDurations(arr) {
    if (!Array.isArray(arr)) return 0;

    return arr.reduce((total, song) => {
        const duration =
            song && typeof song.duration === 'number'
                ? song.duration
                : 0;

        return total + duration;
    }, 0);
}

function findLongestSong(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    return arr.reduce((longest, song) => {
        if (!song || typeof song.duration !== 'number')
            return longest;

        if (!longest || song.duration > longest.duration)
            return song;

        return longest;
    }, null);
}

module.exports = {
    isPalindrome,
    capitalizeTitle,
    sumDurations,
    findLongestSong,
};
