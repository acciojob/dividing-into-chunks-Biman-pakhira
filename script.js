const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
let sum =0;
let newarr =[];
let mainarr= [];
for(let i = 0; i<arr.length; i++){
		if((sum+=arr[i])<=n){
			newarr.push(arr[i])
		}else{
			mainarr.push(newarr);
			newarr=[arr[i]];
			sum=arr[i];
		
		}
	} mainarr.push(newarr);
	return mainarr;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
