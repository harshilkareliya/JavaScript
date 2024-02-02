#include<stdio.h>

main(){
	
	int i,n,first=0,second=1,sum;
	
	printf("Enter number for Fibonaci :- ");
	scanf("%d",&n);
	printf("Fibonaci series :- 0 1 ");
	for(i=2;i<	n;i++){
		sum = first + second;
		first = second;
		second = sum;
		printf("%d ",sum);		
	}
		
}
