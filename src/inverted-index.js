const getPrimes = (n) => {

	var isPrime = function(n) {
	  for(var i = 2; i < n; i++)
	  {
	    if(n % i === 0)
	    {
	      return false ;
	    }  
	  }
	  return true;
	}

	  var arrOfPrimeNums = [];
	  if(typeof (n) !== 'number' || (n) < 2) {
	    return 'Invalid input';
	  }
	  
	  for(var j = 2; j <= n; j++) {
	    if(isPrime(j)) {
	      arrOfPrimeNums.push(j);
	    }
	  }
	  return arrOfPrimeNums;   
	}
};

module.exports=