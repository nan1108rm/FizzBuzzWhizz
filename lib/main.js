function main(num){
  var response;
  if(num%3 == 0){
    response = 'Fizz\n';
    return response;
  }
  if(num%5 == 0){
    response = 'Buzz\n';
    return response;
  }
  if(num%7 == 0){
    response = 'Whizz\n';
    return response;
  }
}

module.exports = main;
