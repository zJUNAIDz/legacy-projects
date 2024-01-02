
// ⚠️Code not written by me.


// #include<stdio.h>    
// void main ()    
// {    
//     int i, j,temp;     
//     int a[10] = { 10, 9, 7, 101, 23, 44, 12, 78, 34, 23};     
//     for(i = 0; i<10; i++)    
//     {    
//         for(j = i+1; j<10; j++)    
//         {    
//             if(a[j] > a[i])    
//             {    
//                 temp = a[i];    
//                 a[i] = a[j];    
//                 a[j] = temp;     
//             }     
//         }     
//     }     
//     printf("Printing Sorted Element List ...\n");    
//     for(i = 0; i<10; i++)    
//     {    
//         printf("%d\n",a[i]);    
//     }    
// }    

#include<stdio.h>  
void main ()  
{  
    int arr[100],i,n,largest,sec_largest;  
    printf("Enter the size of the array?");  
    scanf("%d",&n);  
    printf("Enter the elements of the array?");  
    for(i = 0; i<n; i++)  
    {  
        scanf("%d",&arr[i]);  
    }  
    largest = arr[0];  
    sec_largest = arr[1];  
    for(i=0;i<n;i++)  
    {  
        if(arr[i]>largest)  
        {  
            sec_largest = largest;  
            largest = arr[i];  
        }  
        else if (arr[i]>sec_largest && arr[i]!=largest)  
        {  
            sec_largest=arr[i];  
        }  
    }  
    printf("largest = %d, second largest = %d",largest,sec_largest);  
      
}  