//Output a prompt
process.stdout.write('prompt > ');

//the stdin 'data event fires aftera user types in a line
process.stdin.on('data', (data) => {
  //if pwd then print pwd

  //else print
  const cmd = data.toString().trim(); //remove the new line

  if(cmd === 'pwd'){
    console.log(`Current directory: ${process.cwd()}`);
  }else{
    process.stdout.write('You typed: ' + cmd);
  }

    process.stdout.write('\nprompt > ');
});
