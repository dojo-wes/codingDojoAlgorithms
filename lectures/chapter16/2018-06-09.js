class TrieNode {
  constructor(letter=null, value=null) {
    this.val = value;
    this.letter = letter;
    this.pointers = [];
  }
}

class TrieSet {
  constructor() {
    this.root = new TrieNode('');
  }
  insert(str) {
    str = str.toLowerCase();
    let inserted = false;
    function recurse(node, idx=0) {
      if(idx === str.length) {
        if(node.val === str) {
          inserted = false;
        } else {
          node.val = str;
          inserted = true;
        }
        return;
      }
      for(let i = 0; i < node.pointers.length; i++) {
        if(str[idx] === node.pointers[i].letter) {
          return recurse(node.pointers[i], idx + 1);
        }
      }
      const n = new TrieNode(str[idx]);
      if(node.pointers.length > 0) {
        let i = 0;
        while(node.pointers[i].letter < n.letter) {
          i++;
        }
        node.pointers.splice(i-1, 0, n);
      } else {
        node.pointers.push(n);
      }
      return recurse(n, idx + 1);
    }
    recurse(this.root);
    return inserted;
  }

  contains(str) {
    str = str.toLowerCase();
    let curr = this.root;
    for(let i = 0; i < str.length; i++) {
      let foundLetter = false;
      for(let j = 0; j < curr.pointers.length; j++) {
        if(str[i] === curr.pointers[j].letter) {
          curr = curr.pointers[j];
          foundLetter = true;
          break;
        }
      }
      if(!foundLetter) {
        return false;
      }
    }
    return curr.val === str;
  }
}

let trie = new TrieSet();
console.log(trie.insert('HI'));
console.log(trie.insert('Hello'));
console.log(trie.root.pointers[0].pointers);
console.log(trie.contains('he'));