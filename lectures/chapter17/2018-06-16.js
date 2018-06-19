var getId = (function (n) {
  return function () {
    n += 1;
    return n;
  }
}(0));

class ELVertex {
  constructor(value) {
    this.id = getId();
    this.val = value;
  }
}

class ELGraph {
  constructor() {
    this.edgeList = [];
    this.vertices = {};
  }

  addVertex(value) {
    const v = new ELVertex(value);
    this.vertices[v.id] = v;
    return v.id;
  }

  removeVertex(vertID) {
    if(this.vertices[vertID]) {
      delete this.vertices[vertID];
      return true;
    }
    return false;
  }

  getVertexValue(vertID) {
    if(this.vertices[vertID]) {
      return this.vertices[vertID].val;
    }
  }

  setVertexValue(vertID, value) {
    if(this.vertices[vertID]) {
      this.vertices[vertID].val = value;
      return true;
    }
    return false;
  }

  addEdge(vertID1, vertID2, value) {
    if(!this.vertices[vertID1] || !this.vertices[vertID2]) {
      return false;
    }
    let exists = false;
    for(let i = 0; i < this.edgeList.length; i++) {
      if(this.edgeList[i][0] == vertID1 && this.edgeList[i][1] == vertID2) {
        exists = true;
      }
    }
    if(exists) {
      return false;
    }
    this.edgeList.push([vertID1, vertID2, value]);
    return true;
  }

  removeEdges(vertID) {
    let count = 0;
    for(let i = 0; i < this.edgeList.length; i++) {
      if(this.edgeList[i][0] == vertID || this.edgeList[i][1] == vertID) {
        this.edgeList.splice(i, 1);
        i--;
        count++;
      }
    }
    return count;
  }

  removeEdge(vertID1, vertID2) {
    for(let idx in this.edgeList) {
      if (this.edgeList[idx][0] == vertID1 && this.edgeList[idx][1] == vertID2) {
        this.edgeList.splice(parseInt(idx, 10), 1);
        return true;
      }
    }
    return false;
  }

  getEdgeValue(vertID1, vertID2) {
    for (let i = 0; i < this.edgeList.length; i++) {
      if (this.edgeList[i][0] == vertID1 && this.edgeList[i][1] == vertID2) {
        return this.edgeList[i][2];
      }
    }
  }

  setEdgeValue(vertID1, vertID2, value) {
    for (let i = 0; i < this.edgeList.length; i++) {
      if (this.edgeList[i][0] == vertID1 && this.edgeList[i][1] == vertID2) {
        this.edgeList[i][2] = value;
        return true;
      }
    }
    return false;
  }

  adjacent(vertID1, vertID2) {
    for (let i = 0; i < this.edgeList.length; i++) {
      if (this.edgeList[i][0] == vertID1 && this.edgeList[i][1] == vertID2) {
        return true;
      }
    }
    return false;
  }

  neighbors(vertID) {
    let neighbors = [];
    for (let i = 0; i < this.edgeList.length; i++) {
      if (this.edgeList[i][0] == vertID) {
        neighbors.push(this.edgeList[i][1]);
      }
    }
    return neighbors;
  }

  // Given a generalized graph and two vertex IDs, return whether a path exists from first to second vertex.
  // Second: on success, return array of vertex IDs representing one possible path.If none exist, return [].
  isReachable(vertID1, vertID2, curr=null, path=[]) {
    if(curr == vertID1) {
      return [];
    }
    if(curr == vertID2) {
      path.push(curr);
      return path;
    }
    let result = [];
    curr = curr || vertID1;
    for(let edge of this.edgeList) {
      if(edge[0] == curr) {
        path.push(edge[0]);
        result.push(this.isReachable(vertID1, vertID2, edge[1], path));
      }
    }
    return result;
  }
  isReachable2(vertID1, vertID2) {
    let result = [];
    let that = this;
    function recurse(vertID1, vertID2, visited={}, path=[]) {
      visited[vertID1] = true;
      path.push(vertID1);
      if(vertID1 == vertID2) {
        result = path;
        return;
      }
      for(let edge of that.edgeList) {
        if(edge[0] == vertID1 && !visited[edge[1]]) {
          path.concat(recurse(edge[1], vertID2, visited, path));
        }
      }
    }
    recurse(vertID1, vertID2);
    return result;
  }
}

let el = new ELGraph();
el.addVertex('A');
el.addVertex('B');
el.addVertex('C');
el.addVertex('D');

el.addEdge('1', '2', 9);
el.addEdge('2', '1', 3);
el.addEdge('1', '8', 9);
el.addEdge('2', '4', 5);
el.addEdge('3', '4', 1);

console.log(el.isReachable2(1, 4));

el.removeEdge(2);
// console.log(el);