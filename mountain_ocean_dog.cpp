#include <iostream>
#include <string>
#include <vector>

using namespace std;

class CultureConnect
{
private:
    string m_name;
    vector<string> m_connections;

public:
    CultureConnect(string name): m_name(name) { }

    void addConnection(string connection) {
        m_connections.push_back(connection);
    }

    void showConnections() {
        cout << m_name << " is connected to:" << endl;

        for(string connection : m_connections) {
            cout << connection << endl;
        }
    }
};

int main() {
    CultureConnect culture("Country");

    culture.addConnection("Asia");
    culture.addConnection("North America");
    culture.addConnection("Middle East");
    culture.addConnection("South America");

    culture.showConnections();

    return 0;
}