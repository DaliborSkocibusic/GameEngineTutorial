#include <Hazel.h>

namespace Hazel {

	// Need to change to dll functino
	//void Print();

	__declspec(dllimport) void Print();

}

void main() {

	Hazel::Print();
}

//Up to here

//			https://youtu.be/meARMOmTLgE?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT&t=669


// https://youtu.be/meARMOmTLgE?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT&t=699