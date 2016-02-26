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

    var particularNums1 = [2,5,7];
    var particularNums2 = [2,3,4];
    var invalidInput1 = [3,3,7];
    var invalidInput2 = [3,23,27];

    it("Test_multiple_for_2_withParticularNums1", function(){

        var result = main.checkStuNum(particularNums1,2);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_2_withParticularNums2", function(){

        var result = main.checkStuNum(particularNums2,2);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_5_withParticularNums1", function(){

        var result = main.checkStuNum(particularNums1,5);
        var expect_string = 'Buzz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_3_withParticularNums2", function(){

        var result = main.checkStuNum(particularNums2,9);
        var expect_string = 'Buzz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_7_withParticularNums1", function(){

        var result = main.checkStuNum(particularNums1,63);
        var expect_string = 'Whizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_2and5_withParticularNums1", function(){

        var result = main.checkStuNum(particularNums1,10);
        var expect_string = 'FizzBuzz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_2and3_withParticularNums2", function(){

        var result = main.checkStuNum(particularNums2,6);
        var expect_string = 'FizzBuzz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_2and7_withParticularNums1", function(){

        var result = main.checkStuNum(particularNums1,14);
        var expect_string = 'FizzWhizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_2and4_withParticularNums2", function(){

        var result = main.checkStuNum(particularNums2,8);
        var expect_string = 'FizzWhizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_5and7_withParticularNums1", function(){

        var result = main.checkStuNum(particularNums1,35);
        var expect_string = 'BuzzWhizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_257_withParticularNums1", function(){

        var result = main.checkStuNum(particularNums1,70);
        var expect_string = 'FizzBuzzWhizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_multiple_for_234_withParticularNums2", function(){

        var result = main.checkStuNum(particularNums2,48);
        var expect_string = 'FizzBuzzWhizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_num_contain_2", function(){

        var result = main.checkStuNum(particularNums1,12);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_num_contain_2_multiple_for_2And5", function(){

        var result = main.checkStuNum(particularNums1,20);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_num_contain_2_multiple_for_2And7", function(){

        var result = main.checkStuNum(particularNums1,42);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_num_contain_2_multiple_for_3And4", function(){

        var result = main.checkStuNum(particularNums2,12);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_num_contain_2_multiple_for_234", function(){

        var result = main.checkStuNum(particularNums2,24);
        var expect_string = 'Fizz\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_num_not_multiple_for_2/5/7", function(){

        var result = main.checkStuNum(particularNums1,53);
        var expect_string = '53\n';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_invalid_input1", function(){

        var result = main.main(invalidInput1);
        var expect_string = 'Invalid input';

        expect(expect_string).to.equal(result);
    });

    it("Test_for_invalid_input2", function(){

        var result = main.main(invalidInput2);
        var expect_string = 'Invalid input';

        expect(expect_string).to.equal(result);
    });



    /*it("", function(){
      sinon.spy(console, 'log');

      sinon.stub(main, "").returns("100");
      main.printSong();

      expect(main.singParagraphOfBeerSong).to.have.been.calledWith(99);

      var result = _.flatten(console.log.args).join("\n");
      var expect_string = "99";
      expect(expect_string).to.equal(result);
    });*/

});
