#include "crc32.h"
int main(int argc, void *argv[]){
    char buf[] = "abcdefg";
    unsigned int ret = 0;
    make_crc_table();
    ret = crc32(buf, sizeof(buf));
    printf("%u\n", ret);
    return 0;
}
