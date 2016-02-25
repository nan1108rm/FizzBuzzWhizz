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

    it("Test_for_3", function(){

        var result = main(particularNums,9);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_5", function(){

        var result = main(particularNums,5);
        var expect_string = 'Buzz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_7", function(){

        var result = main(particularNums,7);
        var expect_string = 'Whizz\n';

        expect(expect_string).to.equal(result);
    });
});
