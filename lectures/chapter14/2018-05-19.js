String.prototype.hashCode = function() {
  let hash = 0;
  if(this.length == 0) return hash;
  for(i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }
  return hash;
}
function mod(input, div) {
  return (input % div + div) % div;
}

class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.table = [];
    for(let i = 0; i < capacity; i++) {
      this.table.push([]);
    }
    // this.table = [[], [], [[“myKey”, 42]]]
    this.numKeys = 0;
  }

  add(key, val) {
    if(this.contains(key)) {
      for (let pair of this.table[mod(key.hashCode(), this.capacity)]) {
        if (pair[0] === key) {
          pair[1] = val;
        }
      }
    } else {
      this.table[mod(key.hashCode(), this.capacity)].push([key, val]);
      this.numKeys++;
    }
    return this;
  }

  findKey(key) {
    for (let pair of this.table[mod(key.hashCode(), this.capacity)]) {
      if(pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  }

  contains(key) {
    for (let pair of this.table[mod(key.hashCode(), this.capacity)]) {
      if (pair[0] === key) {
        return true;
      }
    }
    return false;
  }

  isEmpty() {
    return !this.numKeys ? true : false;
  }

  getLocation(key) {
    const subArr = this.table[mod(key.hashCode(), this.capacity)];
    for (let i = 0; i < subArr.length; i++) {
      if (subArr[i][0] === key) {
        return {
          tableIdx: mod(key.hashCode(), this.capacity),
          subArrIdx: i,
        };
      }
    }
    return null;
  }

  remove(key) {
    const location = this.getLocation(key);
    if(location) {
      const subArr = this.table[location.tableIdx];
      const len = subArr.length;
      if(len > 1) {
        const temp = subArr[len - 1];
        subArr[len - 1] = subArr[location.subArrIdx];
        subArr[location.subArrIdx] = temp;
      }
      this.numKeys--;
      return subArr.pop()[1];
    }
    return undefined;
  }

  loadFactor() {
    return this.numKeys / this.capacity;
  }

  grow() {
    this.capacity = Math.trunc(this.capacity * 1.5);
    let temp = new HashMap(this.capacity);
    for(let subArr of this.table) {
      if(subArr.length > 0) {
        for(let pair of subArr) {
          temp.add(pair[0], pair[1]);
        }
      }
    }
    this.table = temp.table;
    temp = null;
    return this;
  }

  setSize(newCap) {
    this.capacity = newCap;
    let temp = new HashMap(this.capacity);
    for (let subArr of this.table) {
      if (subArr.length > 0) {
        for (let pair of subArr) {
          temp.add(pair[0], pair[1]);
        }
      }
    }
    this.table = temp.table;
    temp = null;
    return this;
  }
}

let hm = new HashMap(5);
// console.log(hm.isEmpty());
hm.add("pizza", "good").add("sushi", "great").add("stale crackers", "bad").add("sushiii", "fishy");
// console.log(hm.isEmpty());
// console.log(hm);
// console.log(hm.remove('pizza'));
console.log(hm.findKey("sushi"));
console.log(hm.setSize(5));