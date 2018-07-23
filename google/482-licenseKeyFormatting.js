var licenseKeyFormatting = function(S, K) {
    let chars = S.split('-').join('').split('');
    let i = chars.length - K;

    while (i > 0) {
        chars.splice(i, 0, '-');
        i-= K;
    }
    return chars.join('').toUpperCase();
};

