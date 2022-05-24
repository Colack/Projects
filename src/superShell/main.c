#include <stdio.h>
void shell() {
    // Declare the Starting Variable(s).
    int inp;
    int inp2;
    
    printf("Would you like to see the starting menu? (y = 0,n = 1)\n");
    printf(">");
    scanf("%d",&inp2);
    if (inp2 == 0) {
        printf("Welcome To superShell.\n");
        printf("superShell is a remake of megaShell, except in C.\n");
        printf("To open the help menu, type 0 into the shell.\n");
        printf("To leave, type 1.\n");
        printf("Have fun using superShell.\n");
    } else {
        
    }
    
    printf("usr/superShell");
    printf(">");
    scanf("%d",&inp);
    
    if (inp == 0) {
        printf("Hello World!");
    } else if (inp == 1) {
    }
}

int main()
{
    shell();
    return 0;
}
