#include <stdio.h>
int main(void)
{
    int a,b=0,c=1,i;
    int max=10;

    for(i=1;i<=max;i++){
        printf("%d\n", b);

        a = b+c;
        b = c;
        c = a;
    }
    return 0;
}
