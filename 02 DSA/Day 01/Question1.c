#include<stdio.h>

main(){
	int n,i,ans,tc=1;
	printf("Enter number :- ");
	scanf("%d",&n);
	
	if(n==0 || n==1){
		ans = 1;
//		tc++;
	}
	
	for(i=2;i<=n/2;i++){  // 3
//		tc+=2; // 1
		if(n%i==0){ // 2
			ans = 1; // 1
//			tc++; 
			break;
		}		
	}
	
	if(ans == 1){
		printf("%d is not prime number\n",n);
		printf("Time Complexity :- %d",tc);
	}
	else{
		printf("%d ia a prime number\n",n);
		printf("Time Complexity :- %d",tc);
	}
}
