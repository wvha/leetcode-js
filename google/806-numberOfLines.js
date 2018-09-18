
var numberOfLines = function(widths, S) {
    let lines = 1;
    let width = 0;
    for (let i = 0; i < S.length; i++) {
        let length = widths[S.charCodeAt(i) - 97];
        if (width + length > 100) {
            lines++;
            width = length;
        } else {
            width += length;
        }
    } return [lines, width];
};
