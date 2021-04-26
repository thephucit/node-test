Array.prototype.mysort = function() {
    const stringRE = /^[A-Za-z]+$/
    const numberRE = /^[\d]+$/
    const symbolRE = /^[^\w\s]/;

    return this.sort(function(a, b) {
        var aIsNumeric = numberRE.test(a);
        var aIsString  = stringRE.test(a);
        var aIsSymbol  = symbolRE.test(a);

        var bIsNumeric = numberRE.test(b);
        var bIsString  = stringRE.test(b);
        var bIsSymbol  = symbolRE.test(b);

        if (aIsNumeric) {
            if (bIsNumeric) {
                return parseInt(a, 10) - parseInt(b, 10);
            } else if (bIsString) {
                return -1;
            } else if (bIsSymbol) {
                return -1;
            }
        }

        if (aIsString) {
            if (bIsNumeric) {
                return 1;
            } else if (bIsString) {
                return a.localeCompare(b);
            } else if (bIsSymbol) {
                return -1;
            }
        }

        if (aIsSymbol) {
            if (bIsNumeric) {
                return 1;
            } else if (bIsString) {
                return 1;
            } else if (bIsSymbol) {
                return a.localeCompare(b);
            }
        }
    })
};

console.log(["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"].mysort());