function validEmail(str) {
  //your JS code here.
	
	let input = str;
  let regex = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/i;
  return regex.test(input);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
