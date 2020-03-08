module.exports = function toReadable(num) {
    let nums = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }

    if (num === 0) return 'zero';

    num = num.toString().split('');

    if (num.length === 1) {
        return nums[num[0]]
    } else if (num.length === 2) {

        if (num[0] === '1') {
            return nums[num[0] + num[1]]
        } else if (num[1] == '0') {
            return nums[num[0] + 0];
        } else {
            return nums[num[0] + 0] + ' ' + (nums[num[1]])
        }

    } else if (num.length === 3) {

        let base = nums[num[0]] + ' ' + nums[100];

        if (num[1] === '0' && num[2] !== '0') {
            return base + ' ' + nums[num[2]]
        } else if (num[1] === '1') {
            return base + ' ' + nums[num[1] + num[2]]
        } else if (num[1] !== '1' && num[1] !== '0' && num[2] === '0') {
            return base + ' ' + nums[num[1] + 0]
        } else if (num[1] !== '1' && num[1] !== '0' && num[2] !== '0') {
            return base + ' ' + nums[num[1] + 0] + ' ' + (nums[num[2]])
        } else {
            return base
        }
    }
}