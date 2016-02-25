function main(particularNums,num){
  var response;
  var num1 = num%particularNums[0];
  var num2 = num%particularNums[1];
  var num3 = num%particularNums[2];
  var flag = num.toString().indexOf(particularNums[0].toString());

  var inputCheck = checkInputNums(particularNums);

  if(!inputCheck){
    response = "Invalid input";
    return response;
  }else{
    if(flag>=0){
      response = 'Fizz\n';
      return response;
    }else{
      if((num1 == 0) && (num2 != 0) && (num3 != 0)){
        response = 'Fizz\n';
        return response;
      }else if((num2 == 0) && (num1 != 0) && (num3 != 0)){
        response = 'Buzz\n';
        return response;
      }else if((num3 == 0) && (num1 != 0) && (num2 != 0)){
        response = 'Whizz\n';
        return response;
      }else if((num1 == 0) && (num2 == 0) && (num3 != 0)){
        response = 'FizzBuzz\n';
        return response;
      }else if((num1 == 0) && (num3 == 0) && (num2 != 0)){
        response = 'FizzWhizz\n';
        return response;
      }else if((num2 == 0) && (num3 == 0) && (num1 != 0)){
        response = 'BuzzWhizz\n';
        return response;
      }else if((num1 == 0) && (num2 == 0) && (num3 == 0)){
        response = 'FizzBuzzWhizz\n';
        return response;
      }else{
        response = num + '\n';
        return response;
      }
    }
  }
}

function checkInputNums(particularNums){
  if(particularNums[0] == particularNums[1]||particularNums[0] == particularNums[2]||particularNums[1] == particularNums[2]){
    return false;
  }else if(particularNums[0]>9||particularNums[1]>9||particularNums[2]>9){
    return false;
  }else if(particularNums[0]<=0||particularNums[1]<=0||particularNums[2]<=0){
    return false;
  }else{
    return true;
  }
}

module.exports = main;
