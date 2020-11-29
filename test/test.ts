const sinon = require("sinon");
const assert = require("assert");
const flatTest = require("../flatten");

describe("array flatten test", function () {
    let log: any;
    const sandbox = sinon.createSandbox();

    beforeEach(function () {
        log = sandbox.spy(console, 'log');
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("should output error when input is not an array", function () {
        flatTest.flatten("not an array");
        assert(log.calledWith("Sorry, the input should be an array"));
    });

    it("should flat the array when input is an array", function () {
        flatTest.flatten("[ 1, [ 2, [ 3 ] ], 4 ]");
        assert(log.calledWith([1, 2, 3, 4]));
    });

    it("should print out empty array when input is an empty array", function () {
        flatTest.flatten("[]");
        assert(log.calledWith([]));
    });
});