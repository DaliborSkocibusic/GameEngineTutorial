

namespace Hazel {

	// Need to change to dll functino
	//void Print();

	__declspec(dllimport) void Print();

}



void main() {

	Hazel::Print();
}