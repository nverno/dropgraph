// #include <emscripten/emscripten.h>
#include <vector>
#include <string>
#include <map>
#include <set>

using std::vector;
using std::string;
using std::map;
using std::set
;
using graph = map<int,vector<int>>;

extern "C" {
    // EMSCRIPTEN_KEEPALIVE
    graph from_edgelist(string s, bool undirected = true) {
        const int n = s.size();
        map<int,set<int>> res;
        int first = 0, a = -1;
        for (int i = 0; i < n; ++i) {
            if (isdigit(s[i])) {
                int num = s[i] - '0';
                while (++i < n && isdigit(s[i])) {
                    num = 10*num + (s[i]-'0');
                }
                if (first) {
                    res[a].insert(num);
                    if (undirected)
                        res[num].insert(a);
                } else {
                    a = num;
                }
                first ^= 1;
            }
        }
        graph g;
        for (auto& [u,v] : res) {
            g[u] = vector<int>(begin(v), end(v));
        }
        return g;
    }
}

#ifdef TEST
#include <iostream>
using std::cout;

int main(int argc, char *argv[]) {
    graph g = from_edgelist("[[2,4],[1,3],[2,4],[1,3]]");
    for (auto& [u,v] : g) {
        cout << u << ": ";
        for (auto& x : v) {
            cout << x << " ";
        }
        cout << "\n";
    }
    return 0;
}
#endif
