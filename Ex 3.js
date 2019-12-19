
1.
var num = 5;
    var strNum = String(num);
    var max = 0;
    var min = 0;
    for (i = 0; i < strNum.length; i++) {
        if (strNum[i] > max) {
            max = strNum[i]
            min = max
        }

        if (strNum[i] < min) {
            min = strNum[i]

        }

    }
    console.log(max)
    console.log(min)
    var result = max - min;
    console.log(result)


2.
var num = 152;
    var strNum = String(num);
    var max = 0;
    var min = 0;
    for (i = 0; i < strNum.length; i++) {
        if (strNum[i] > max) {
            max = strNum[i]
            min = strNum[i-1]
        }

        if (strNum[i] < min) {
            min = strNum[i]

        }

    }
    console.log(max)
    console.log(min)
    var result = max - min;
    console.log(result)

3.    
var num = 4593653;
    var strNum = String(num);
    var max = 0;
    var min = 0;
    for (i = 0; i < strNum.length; i++) {
        if (strNum[i] > max) {
            max = strNum[i]
            min = max
        }

        if (strNum[i] < min) {
            min = strNum[i]

        }

    }
    console.log(max)
    console.log(min)
    var result = max - min;
    console.log(result)