var graph = require('./graph.js');

graph().then((instance) => {
  console.dir(instance);
  // var g = instance._from_edgelist("[[2,4],[1,3],[2,4],[1,3]]", true);
  console.dir(instance._from_edgelist);
  var g = instance.ccall('from_edgelist');
  // null,
  // ["string"],
  // ["[[2,4],[1,3],[2,4],[1,3]]"]);
  console.dir(g);
});
