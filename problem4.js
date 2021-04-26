function variations(input)
{
    let arrIn = input.split(' ');
    let matched = [];
    let variations = [];

    for (let i = 0; i < arrIn.length; i++) {
        if (/\d/.test(arrIn[i]) && ! /^[\d]+$/.test(arrIn[i])) {
            matched.push(arrIn[i]);
        }
    }

    matched.forEach((item) => {
        let index = item.match(/\d/)['index'];
        let number = item.match(/\d/g).join('');

        if (index === 0) {
            variations.push(item.replace(number, number + '-'));
        } else {
            if (index + number.length === item.length) {
                variations.push(item.replace(number, '-' + number))
            } else {
                let s1 = item.replace(number, '-' + number);
                let s2 = item.replace(number, '-' + number + '-').replace(new RegExp("[-]+$"), "");
                let s3 = item.replace(number, number + '-').replace(new RegExp("[-]+$"), "");
                if (! variations.includes(s1)) variations.push(s1);
                if (! variations.includes(s2)) variations.push(s2);
                if (! variations.includes(s3)) variations.push(s3);
            }

        }
    });

    return {matched, variations}
}

let _input = 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options';
console.log(variations(_input));

/**
 * Out put
 * {
 *     matched: [ '132cxvx', 'mic7979', 'm98opt' ],
 *     variations: [ '132-cxvx', 'mic-7979', 'm-98opt', 'm-98-opt', 'm98-opt' ]
 * }
 */