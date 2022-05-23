#include <iostream>
#include <string>

void process(std::string const & line);

int main()
{
    for (std::string line; std::cout << "APP > " && std::getline(std::cin, line); )
    {
        if (!line.empty()) { process(line); }
    }

    std::cout << "Goodbye.\n";
}
