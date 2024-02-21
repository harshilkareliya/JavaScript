#include<stdio.h>

main(){
	
	int i,j,tc;
	
	for(i=5;i>=1;i--){ // n
		for(j=1;j<=i;j++){ // (m-n)*3
			printf("*"); 
		}
		printf("\n");
	}
	printf("Time Complexity :- %d",tc);
	
}
