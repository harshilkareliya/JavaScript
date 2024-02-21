#include<stdio.h>

int factorial_number(int n){
	if(n<=1){
		return 1;
	}
	else{
		return n * factorial_number(n-1);
	}
}

main(){
	
	int i,n;
	
	printf("Enter Number for factorial :- ");
	scanf("%d",&n);
	
	printf("Factorial number is :- %d",factorial_number(n));
	
}
