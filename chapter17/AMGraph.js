class AMGraph {
	constructor() {
		this.adjMatrix = [[]];
		this.nodes = [];
	}
}

class Vertex {
	constructor(value) {
		this.value = value;
		this.id = undefined;
		this.connections = [];
		this.connObj = {};
	}
}

AMGraph.prototype.addVert = function(value) {
	// create new vertex
	let vert = new Vertex(value);
	this.nodes.push(vert);
	// update vertex id for lookup
	vert.id = this.adjMatrix[0].length;
	// check if there are vertices
	if(vert.id > 0) {
		this.adjMatrix[vert.id] = [];
		// loop through adjMatrix and add new vertex to each inner-array
		for(let i = 0; i < vert.id; i++) {
			this.adjMatrix[i][vert.id] = -1;
		}
		// loop through newly created vertex and add connections
		for(let i = 0; i < vert.id; i++) {
			this.adjMatrix[vert.id][i] = -1
		}
	}
	this.adjMatrix[vert.id][vert.id] = 0;
	return this;
};

AMGraph.prototype.removeVert = function(vertID) {
	if(this.nodes[vertID]) {
		this.nodes.splice(vertID, 1);
		this.adjMatrix.splice(vertID, 1);
		for(let i = 0; i < this.adjMatrix.length; i++) {
			this.adjMatrix[i].splice(vertID, 1);
			if(i >= vertID) {
				this.nodes[i].id = i;
			}
		}
		return true;
	}
	return false;
};

AMGraph.prototype.getVertVal = function(vertID) {
	return this.nodes[vertID].value;
};

AMGraph.prototype.setVertVal = function(vertID, value) {
	if(this.nodes[vertID]) {
		this.nodes[vertID].value = value;
		return true;
	}
	return false;
};

AMGraph.prototype.addEdge = function(vert1, vert2, value = 1) {
	if(this.nodes[vert1] && this.nodes[vert2]) {
		this.nodes[vert1].connections.push({
			id: vert2,
			weight: value,
			name: this.nodes[vert2].value
		});
		this.adjMatrix[vert1][vert2] = value;
		return true;
	}
	return false;
};

AMGraph.prototype.addNDEdge = function(vert1, vert2, value = 1) {
	if(this.nodes[vert1] && this.nodes[vert2]) {
		this.nodes[vert1].connObj[vert2] = {
			name: this.nodes[vert2].value,
			weight: value
		};
		// this.nodes[vert2].connObj[vert1] = {
		// 	name: this.nodes[vert1].value,
		// 	weight: value
		// };
		this.adjMatrix[vert1][vert2] = value;
		// this.adjMatrix[vert2][vert1] = value;
		return true;
	}
	return false;
};

AMGraph.prototype.isPath = function(vert1, vert2, visited = {}) {
	if(visited[vert1]) {
		console.log("already been here", vert1);
		return false;
	}
	if(this.adjMatrix[vert1][vert2] == 1) {
		console.log("found a connection", "vert1", vert1, "vert2", vert2);
		return true;
	}
	for(let i = 0; i < this.adjMatrix[vert1].length; i++) {
		if(this.adjMatrix[vert1][i] == 1) {
			visited[vert1] = true;
			if(this.isPath(i, vert2, visited)) {
				return true;
			}
		}
	}
	return false;
};

const Queue = require('../chapter6/queues.js').Queue;

AMGraph.prototype.shortestPath = function(start, end) {
	let visited = {};
	let q = new Queue();
	q.enqueue({
		node: start,
		path: [start]
	});

	while(q.head) {
		let curr = q.dequeue().data;

		if(this.adjMatrix[curr.node][end] > 0) {
			curr.path.push(end);
			return curr.path;
		}

		else {
			visited[curr.node] = true;
			for(var idx in this.adjMatrix[curr.node]) {
				if(this.adjMatrix[curr.node][idx] > 0 && !visited[idx]) {
					let newPath = curr.path;
					newPath.push(parseInt(idx));
					// console.log("currPath", newPath);
					q.enqueue({
						node: idx,
						path: newPath
					});
				}
			}
		}
	}
	return false;
};

const PriQueue = require('../chapter13/PriQueue.js').PriQueue;

AMGraph.prototype.shortestPathWeighted = function(start, end) {
	let visited = {};
	let pq = new PriQueue();
	pq.push({
		curr: this.nodes[start],
		prev: "start" 
	}, 0);

	while(pq.head) {
		let pqNode = pq.dequeue();
		let currWeight = pqNode.pri;
		let curr = pqNode.data.curr;
		let prev = pqNode.data.prev;

		// check to see if we've already been there before
		if(!(visited[curr.id]) || visited[curr.id] === 0) {
			visited[curr.id] = prev;
			// Break case
			if(curr.id === end) {
				// create result object, starting with path as the end value
				let result = {
					path: [end],
					distance: 0
				}
				// set next to end value to start off while loop. Next will go through the next node in the path, but backwards
				let next = end;
				// iterate through visited to backtrack to full path
				// console.log(visited);
				while(visited[next] !== "start") {
					// add value to front of path because list is being built in reverse order
					result.path.unshift(visited[next]);
					// make progress, for visualization uncomment console.log above while loop (currently line 181)
					next = visited[next];
				}
				// set distance
				result.distance = currWeight;
				return result;
			}
			// for in loops just give the key in the object, therefore key is merely an id for a connection
			for(let key in this.nodes[curr.id].connObj) {
				// helper vars for readability
				// connectedTo is id of current connection in for loop
				let connectedTo = this.nodes[curr.id].connObj[key];
				// connToNode is full node object of current conenction in for loop
				let connToNode = this.nodes[key];
				// weight is aggregate of full path, used for priority
				let weight = currWeight + connectedTo.weight;
				// if we haven't been to that connection yet, push it in the pq fool!
				if(!visited[connectedTo]) {
					// weight is priority, must store prev value to maintain accessibility to full path later on, curr is FULL NODE
					pq.push({ 
						curr: connToNode,
						prev: curr.id 
					}, weight);
				}
			}
		}
	}
	// We went through all those nodes for this!?
	return false;
};

let graph = new AMGraph();
graph.addVert("A").addVert("B").addVert("C").addVert("D").addVert("E");
// graph.removeVert(1);
graph.addNDEdge(0, 1, 2);
graph.addNDEdge(0, 2, 10);
graph.addNDEdge(1, 2, 2);
graph.addNDEdge(1, 4, 9);
graph.addNDEdge(2, 3, 7);
graph.addNDEdge(3, 4, 1);
console.log(graph.shortestPathWeighted(0, 4));
// console.log(graph.nodes);
// console.log(graph.nodes);
// console.log(graph.shortestPath(0, 6));
// console.log(graph.getVertVal(0), graph.setVertVal(0, "1st"), graph.getVertVal(0));
// console.log(graph.isPath(0,6));