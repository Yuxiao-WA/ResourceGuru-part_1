const flatten = function (input: string) {
    const flatArray = function (arr: Array<any>, result: Array<any> = []) {
        for (let i = 0; i < arr.length; i++) {
            const value: any = arr[i];
            if (Array.isArray(value)) {
                flatArray(value, result);
            } else {
                result.push(value);
            }
        }
        return result;
    };
    try {
        const arrToFlat = JSON.parse(input);
        if (Array.isArray(arrToFlat)) {
            console.log(flatArray(arrToFlat));
        } else {
            throw {};
        }
    } catch (error) {
        console.log("Sorry, the input should be an array");
    }

};

module.exports.flatten = flatten;