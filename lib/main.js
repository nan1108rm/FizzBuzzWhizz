function main(particularNums,num){
  var response;

  if(particularNums[0] == particularNums[1]||particularNums[0] == particularNums[2]||particularNums[1] == particularNums[2]){
    response = "Invalid input";
    return response;
  }else if(particularNums[0]>9||particularNums[1]>9||particularNums[2]>9){
    response = "Invalid input";
    return response;
  }else{
    if(num%particularNums[0] == 0){
      response = 'Fizz\n';
      return response;
    }
    if(num%particularNums[1] == 0){
      response = 'Buzz\n';
      return response;
    }
    if(num%particularNums[2] == 0){
      response = 'Whizz\n';
      return response;
    }
  }
}

module.exports = main;
