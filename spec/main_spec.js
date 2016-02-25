"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    var particularNums = [3,5,7];
    var invalidInput = [3,3,7];
``
    it("Test_case_1", function(){

        var result = main(particularNums,9);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_case_2", function(){

        var result = main(particularNums,5);
        var expect_string = 'Buzz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_case_3", function(){

        var result = main(particularNums,7);
        var expect_string = 'Whizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_case_4", function(){

        var result = main(invalidInput,9);
        var expect_string = 'Invalid input';

        expect(expect_string).to.equal(result);
    });

    it("Test_case_5", function(){

        var result = main(particularNums,15);
        var expect_string = 'FizzBuzz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_case_6", function(){

        var result = main(particularNums,21);
        var expect_string = 'FizzWhizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_case_7", function(){

        var result = main(particularNums,35);
        var expect_string = 'BuzzWhizz\n';

        expect(expect_string).to.equal(result);
    });

});
