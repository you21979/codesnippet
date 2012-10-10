#include <stdio.h>

typedef enum{
    FRUITS_TYPE_UNKNOWN = 0,
    FRUITS_TYPE_BANANA,
    FRUITS_TYPE_APPLE,
    FRUITS_TYPE_ORANGE,
    FRUITS_TYPE_WATERMELON,

    SIZEOF_FRUITS_TYPE,
}FRUITS_TYPE;

void init(char **list){
    int i;
    for(i=0;i<SIZEOF_FRUITS_TYPE;++i){
        switch(i){
        case FRUITS_TYPE_BANANA:
            list[i] = "BAD";
            break;
        case FRUITS_TYPE_APPLE:
            list[i] = "GOOD";
            break;
        case FRUITS_TYPE_ORANGE:
            list[i] = "GOOD";
            break;
        case FRUITS_TYPE_WATERMELON:
            list[i] = "GOOD";
            break;
        default :
            list[i] = "UNKOWN";
            break;
        }
    }
}

int main(int argc, char *argv[]){

    char *list[ SIZEOF_FRUITS_TYPE ];
    init(list);

    printf("%s\n","FAVORITE BANANA?");
    printf("BANANA is %s\n", list[FRUITS_TYPE_BANANA]);
    return 0;
}

