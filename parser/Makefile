SHELL    = /bin/bash
CXXFLAGS = -Wall -Wshadow -fsanitize=address -fsanitize=undefined -O2 -std=c++17
CXX      = g++

EM++ = "$(HOME)/src/emsdk/upstream/emscripten/em++"

DEPS     = 
OUTPUT   = graph.wasm
OBJ      = graph.o

# Compile with clang
COMPILE_FLAGS = -Wall                               \
	--target=wasm32                             \
	-Os                                         \
	-nostdlib                                   \
	-fvisibility=hidden                         \
	-std=c++17                                  \
	-ffunction-sections                         \
	-fdata-sections                             \
	-DPRINTF_DISABLE_SUPPORT_FLOAT=1            \
	-DPRINTF_DISABLE_SUPPORT_LONG_LONG=1        \
	-DPRINTF_DISABLE_SUPPORT_PTRDIFF_T=1        \
	-I/usr/include/c++/12                       \
	-I/usr/include/x86_64-linux-gnu/c++/12      \
	-I/usr/include/c++/12/backward              \
	-I/usr/local/include                        \
	-I/usr/lib/llvm-14/lib/clang/14.0.0/include \
	-I/usr/include/x86_64-linux-gnu             \
	-I/usr/include

all:
	@

# wasm-ld in apt package: lld
$(OUTPUT): $(OBJ) Makefile
	wasm-ld -o $(OUTPUT)            \
		--no-entry              \
		--strip-all             \
		--export-dynamic        \
		--allow-undefined       \
		--initial-memory=131072 \
		-error-limit=0          \
		--lto-O3                \
		-O3                     \
		--gc-sections           \
		$(OBJ)


%.o: %.cpp $(DEPS) Makefile
	clang++ -c               \
		$(COMPILE_FLAGS) \
		-o $@            \
		$<

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

# test.wasm: graph.cpp
# 	clang++ $^                                             \
# 		--compile --target=wasm32-unknown-unknown-wasm \
# 	        --optimize=3                                   \
# 		-I/usr/include/x86_64-linux-gnu/c++/12         \
# 		-I/usr/include/c++/12                          \
# 		--output $@

clean:
	$(RM) -r core *~ *.o *.out *.exe graph.wasm graph.html graph.js

distclean: clean
	$(RM)
