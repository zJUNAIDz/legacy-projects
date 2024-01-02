#include <stdio.h>
#include <string.h>
#include <conio.h>
int main(){
    int num;
    printf("Enter the number : ");
    scanf("%d",&num);
    for(int i = 1; i <= 10; i++){
        int multiple = num*i;
        printf("%d x %d = %d\n",num,i,multiple);
    }
 
    // int n = 5;
    // int m = 10;

    // printf("%s",(n<m)?"true":"false");
    
}