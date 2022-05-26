#include <stdio.h>

int inp;
int inp2;
int inp3;
int inp4;
char dir;
int temp;
    
void slashN() {
    printf("\n");
}

void starting() {
    printf("== superShell ==\n");
    slashN();
    printf("Type 0 to open the Help Menu.\n");
    printf("Type 1 to close superShell.\n");
    slashN();
        
    inp4 = 1;
}

void starting2() {
    slashN();
    printf("== Starting Message ==");
    slashN();
    printf("Welcome To superShell.\n");
    printf("superShell is a remake of megaShell, except in C.\n");
    printf("To open the help menu, type 0 into the shell.\n");
    printf("To leave, type 1.\n");
    printf("Have fun using superShell.\n");
    slashN();
        
    inp3 = 1;
}

void shell() {
    // Conditional that checks iff its okay to show the start screen.
    if (inp4 == 1) {
        
    } else {
        starting();
    }
    
    // Ask if the user wants to see the starting menu.
    if (inp3 == 1) {
        
    } else {
        printf("Would you like to see the starting menu? (y = 1, n = 0)\n");
        printf(">");
        scanf("%d",&inp2);   
    }
    
    // Conditional that checks if the answer is 1, then goes from there.
    if (inp2 == 1) {
        starting2();
    } else {
        // Dont show the starting menu.
        
        inp3 = 1;
    }
    
    // Print the default statement.
    printf("usr/superShell");
    printf(">");
    scanf("%d",&inp);
    
    if (inp == 0) {
        // Print the Help Menu.
        printf("== Info ==\n");
        slashN();
        printf("Welcome to superShell, a remake of megaShell.\n");
        printf("superShell does not share some commands with\n");
        printf("megaShell, so look at the documentation and\n");
        printf("guides before attempting to use superShell.\n");
        slashN();
        printf("== Commands ==\n");
        slashN();
        printf("0 - Display the Help Menu.\n");
        printf("1 - Exit superShell.\n");
        slashN();
        shell();
    } else if (inp == 1) {
        // Exit the shell
    } else if (inp == 2) {
        
    }
}

int main()
{
    slashN();
    shell();
    slashN();
    return 0;
}
