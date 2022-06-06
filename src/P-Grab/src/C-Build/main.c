#include <stdio.h>
#define MAX_LIMIT 20

void slashN() {
    printf("\n");
}

int main() 
{
    char str[MAX_LIMIT];
    printf("Enter Username: ");
    fgets(str, MAX_LIMIT, stdin);
    printf("https://github.com/%s.png?size=1000", str);

    return 0;
}
