SHELL    = /bin/bash
CXXFLAGS = -Wall -Wshadow -fsanitize=address -fsanitize=undefined -O2 -std=c++17
CXX      = g++
EM++ = "$(HOME)/src/emsdk/upstream/emscripten/em++"

all: graph.out
	@

test: graph.out
	./graph.out

graph.out: graph.cpp
	$(CXX) $(CXXFLAGS) -DTEST -o $@ $^

graph.js: graph.cpp
	$(EM++) $^ -o $@ -sLINKABLE=1 -sEXPORT_ALL=1

graph.html: graph.cpp
	$(EM++) -o $@ $^ -O3                                  \
		--shell-file html_template/shell_minimal.html \
		-sMODULARIZE                                  \
		-sEXPORTED_FUNCTIONS=_from_edgelist           \
		-s "EXPORTED_RUNTIME_METHODS=['ccall']"

clean:
	$(RM) -r core *~ *.o *.out *.exe *.wasm *.html graph.js

distclean: clean
	$(RM)
