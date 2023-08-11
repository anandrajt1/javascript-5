// // TO CHECK IF A NUMBER IS PRIME OR NOT

// const number = parseInt(prompt("Enter a positive number: "));
// // The isPrime variable is used to store a boolean value: either true or false.
// let isPrime = true;

// // The condition number % i == 0 checks if the number is divisible by numbers other than 1 and itself.

// for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         isPrime = false;
//         // The isPrime variable is set to false if the number is not a prime number.
//         break;
//     }
// }
// // The isPrime variable remains true if the number is a prime number.

// if (isPrime) {
//     console.log(`${number} is a prime number`);
// } else {
//     console.log(`${number} is a not prime number`);
// }
// // END HERE






// PRINT ALL PRIME NOS LESS THAN N- IN CONSOLE

// function check whether a number
// is prime or not


// function isPrime(n)
// {
// 	// Corner case
// 	if (n <= 1)
// 		return false;
        

// 	// Check from 2 to n-1
// 	for (let i = 2; i < n; i++){
//         if (n % i == 0) {
//             return false;
//         }
        
//     }
		

// 	return true;
// }
// // Function to print primes

// let n = parseInt(prompt("Enter a positive number greater than 1: "));
// function printPrime(n)
// { if(n<=1){
//     console.log('are u stupid?enter a postive integer greater than 1!!')
// }
// 	else{
//         for (let i = 2; i <= n; i++) {
//             if (isPrime(i)){
//                 console.log(i );   
//                 //  document.write(i +" "); -to get output in browser page
//             }
                
//         }
//     }
// }
// 	printPrime(n);


// USER INTRACTION


function isPrime(n)
{
	// Corner case
	if (n <= 1)
		return false;
        

	// Check from 2 to n-1
	for (let i = 2; i < n; i++){
        if (n % i == 0) {
            return false;
        }    
    }		
	return true;
}
document.getElementById('btn').onclick=function(){
    let n=document.getElementById('inp').value

     if(n<=1){
    document.getElementById('result').innerHTML="are u stupid?enter a no greater than 1!"
}
	else{
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)){
                document.write(i + " ");
                
                //  document.write(i +" "); -to get output in browser page
            }
                
        }
    }
    document.getElementById('inp').value=""
}







