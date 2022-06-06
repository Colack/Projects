#include <stdio.h>
#define MAX_LIMIT 20

int hasAppeared;
int menu;
int answer;

int num1;
int num2;
int ans2;

void calculator() {
    console("== Welcome to Calculator Mode! ==");
    console("1 - Calculate");
    console("2 - Exit");
    scanf("%d",&answer);
    if (answer ==1) {
        calculate();
    } else if (answer == 2) {
        start();
    } else {
        console("Invalid Input!");
        start();
    }
}

void calculate() {
    console("1st Number:");
    scanf(%d,&num1);
    console("2nd Number:");
    scanf(%d,&num2);
    int ans = num1 + num2;
    slashN();
    printf("%d",ans);
    scanf(%d,&ans2);
    if (ans2 == 1) {
        start();
    } else {
        start();
    }
}

void slashN() {
    printf("\n");
}

void clearAll() {
    menu = 0;
    hasAppeared = 0;
    answer = 0;
}

void console(char str[MAX_LIMIT]) {
    slashN();
    printf("%s", str);
}

void start() {
    
    if (hasAppeared == 0) {
        
        console("== Welcome to Jack's Calculator ==");
        
        hasAppeared = 1;
        
        console("1 - Calculator");
        console("2 - Credits");
        console("3 - Exit");
        
    } else {
        
        console("1 - Calculator");
        console("2 - Credits");
        console("3 - Exit");
        
    }
    
    slashN();
    scanf("%d",&menu);
    if (menu == 1) {
        calculator();
    } else if (menu == 2) {
        console("== Credits ==");
        console("Code - Colack (Jack)");
        console("Compiler - GCC");
        start();
    } else if (menu == 3) {
        console("Aborting...");
    } else {
        console("Invalid Input!");
        start();
    }
    
}

int main()
{
    clearAll();
    start();
    return 0;
}
