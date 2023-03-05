function processData(input) {
    input = input.split("\n");

    count = input[0];

    input = input[1].split(" ");

    let sum = 0;
    let dict = {};

    for (x in input) {
        dict[Number.parseFloat(input[x])] = 1;
    }

    for (x in input) {
        dict[Number.parseFloat(input[x])] += 1;
    }

    // Calc mean
    for (x in input) {
        sum += Number.parseFloat(input[x]);
    }

    let maxKey,
        maxValue = 0,
        max = 0;

    for (const [value, key] of Object.entries(dict)) {
        if (value > max) {
            maxValue = value;
            maxKey = key;
        }
    }

    console.log("Max Key: " + maxKey + "   Max Value: " + maxValue);

    console.log("Dict is: " + JSON.stringify(dict));

    console.log(sum / count);

    // Calc median
    // console.log("Sorted input: " + input.sort(((a,b) => a - b )))

    leftMed = Number.parseFloat(input.sort((a, b) => a - b)[count / 2 - 1]);
    // console.log("Left med: " + leftMed)

    let righMed = leftMed;

    if (count % 2 == 0) {
        rightMed = Number.parseFloat(input.sort((a, b) => a - b)[count / 2]);
        // console.log("right med: " + rightMed)
    }

    let median = leftMed / 2 + rightMed / 2;
    console.log(median);

    console.log(input.sort((a, b) => a - b)[0]);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
