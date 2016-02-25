function main(particularNums,num){
  var response;
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

module.exports = main;
