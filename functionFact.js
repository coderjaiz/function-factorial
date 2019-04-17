function fact(n){
	if(n==0){
		return 1;
	}
	else
		return n*fact(n-1);
};
//The function above is a recursive function calculating the factorial

let n=Number(prompt("Enter the number whose factorial has to be computed"));
let facto=fact(n);
document.write(`\n The factorial of ${n} is ${facto}`);
