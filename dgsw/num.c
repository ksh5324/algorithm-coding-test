#include<stdio.h>
#include<string.h>

int main(){
    int num;
    scanf("%d", &num);

    int count = 0;

    for(int i=1; i<=num; i++){
        char str[10] = {0,};
        int s = 0;
        for(int j=i;j>0; j/=10){
            int a = j%10;
            if(a == 3 || a == 6 || a == 9){
                str[s++] = 'X';
            }else{
                switch (a)
                {
                    case 1:
                        str[s++] = '1';
                        break;
                    case 2:
                        str[s++] = '2';
                        break;
                    case 4:
                        str[s++] = '4';
                        break;
                    case 5:
                        str[s++] = '5';
                        break;
                    case 7:
                        str[s++] = '7';
                        break;
                    case 8:
                        str[s++] = '8';
                        break;
                    case 0:
                        str[s++] = '0';
                        break;
                }
                
            }
        }

        char strs[100] = {0,};

        if(strchr(str, 'X')){
            int t = 0;
            for(int z = 1; z <= strlen(str); z++){
                if(str[strlen(str) - z] == 'X'){
                    strs[t++] = str[strlen(str) - z];
                }
            }
        }else{
            for(int z = 0; z < strlen(str); z++){
                strs[z] = str[strlen(str) - z - 1];
            }
        }


        if(num<10){
            printf("%2s", strs);
        }
        if(num<100){
            printf("%3s", strs);
        }else{
            printf("%4s", strs);
        }
        count++;
        if(count == 10){
            count = 0;
            printf("\n");
        }
    }

}