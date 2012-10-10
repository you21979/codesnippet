#include <stdio.h>
#include <time.h>

int main(int argc, char *argv[])
{
    char buf[1024];
    time_t t = time(NULL);
    struct tm *ts = localtime(&t);

    printf("%d\n",t);
    strftime(buf, sizeof(buf), "%a %Y-%m-%d %H:%M:%S %Z", ts);
    printf("%s\n",buf);

    return 0;
}
