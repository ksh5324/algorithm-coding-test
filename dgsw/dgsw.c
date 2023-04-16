#include<stdio.h>
#include<math.h>

int main(){
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);

    if(c >= (a+b)){
        printf("0");
        return 1; 
    }

    int S = (a+b+c)/2;
    int value = S*(S-a)*(S-b)*(S-c);
    printf("%d", (int)ceil(sqrt(value)));
}