var Queue = require("./queue.js");

function Graph(data) {
  this.data = data;
  this.vertices = {};
}

Graph.prototype.createGraph = function(){

  // format this.data to look like the expected result
  for (var i = 0; i < this.data.length; i++) {
    this.vertices[i] = { edges: this.data[i] };
  }
  return this.vertices;
};

Graph.prototype.addVertexWithEdges = function(edges) {
  var vertices = this.vertices;
  var nextIndex = this.data.length;

  vertices[nextIndex] = { edges: edges };

  for (var i = 0; i < edges.length; i++) {
    vertices[edges[i]].edges.push(nextIndex);
  }
  this.vertices = vertices;
  return this.vertices;
}

Graph.prototype.deleteVertex = function(vertexToDelete) {
  var vertices = this.vertices;
  var vertexIndex;
  var indexOfVToDelete;

  // delete vertexToDelete
  for (var index in vertices) {
    vertexIndex = vertices[index].edges.indexOf(vertexToDelete);
    if (vertexIndex !== -1) {
      // console.log(vertexIndex);
      vertices[index].edges.splice(vertexIndex, 1);
      // console.log(vertices);
    }
  }
  this.vertices[vertexToDelete] = undefined;

  this.vertices = vertices
  return this.vertices;
}

Graph.prototype.initializeDistances = function(inputVertices) {
  // add a distance property to each vertex and set it to -1
  // we'll do this so that we can keep track of
  // visited vertexes in our BFS
  for (var vertex in inputVertices) {
    inputVertices[vertex].distance = -1;
  }
  return inputVertices;
}

Graph.prototype.getDistances = function(source) {
  var vertices = this.vertices;
  this.initializeDistances(vertices);

  //implement BFS

  return vertices;
}

Graph.prototype.shortestPath = function(start,end) {
  var distance = this.getDistances(start)

  // return the distance of the end vertex
}


module.exports = Graph;
