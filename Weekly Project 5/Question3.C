#include<stdio.h>

main(){
	
	int n,i,ans;
	printf("Enter number :- ");
	scanf("%d",&n);
	
	if(n==0 || n==1){
		ans = 1;
	}
	
	for(i=2;i<=n/2;i++){
		if(n%i==0){
			ans = 1;
			break;
		}		
	}
	
	if(ans == 1){
		printf("%d is not prime number",n);
	}
	else{
		printf("%d ia a prime number",n);
	}
	
}
