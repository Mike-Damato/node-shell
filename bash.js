const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

//Output a prompt
process.stdout.write('prompt > ');

//the stdin 'data event fires aftera user types in a line
process.stdin.on('data', (data) => {
  //if pwd then print pwd

  //else print

  const input = data.toString().trim();//
  const inputs = input.split(' ');
  const cmd = inputs[0];

  if(cmd === 'cat' && inputs.length >=1){
    const fileName = inputs[1];
    cat(fileName);
  }
  else if(cmd === 'pwd'){
    pwd();
  }else if(cmd === 'ls'){
    ls();
  }
  else{
    process.stdout.write('You typed: ' + cmd);
  }
    process.stdout.write('\nprompt > ');
});
