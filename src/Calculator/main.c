#include <stdio.h>

int hasAppeared;
int menu;

void calculator() {
    
    
    
}

void clearAll() {
    menu = 0;
    hasAppeared = 0;
}

void start() {
    
    if (hasAppeared == 0) {
        
        printf("== Welcome to Jack's Calculator ==");
        
        hasAppeared = 1;
        
        printf("1 - Calculator");
        printf("2 - Settings");
        printf("3 - Exit");
        
    } else {
        
        printf("1 - Calculator");
        printf("2 - Settings");
        printf("3 - Exit");
        
    }
    
    scanf("%d",&menu);
    
    if (menu == 1) {
        
    } else if (menu == 2) {
        
    } else if (menu == 3) {
        
    } else {
        
        printf("Invalid Input!");
        
        start();
        
    }
    
}

int main()
{
    clearAll();
    start();
    return 0;
}
