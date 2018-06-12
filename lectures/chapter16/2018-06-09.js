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
      console.log('new node', n);
      if(node.pointers.length > 0) {
        let i = 0;
        console.log('pointers', node.pointers);
        // this puts the trie in alphabetical order
        while(node.pointers[i] && node.pointers[i].letter < n.letter) {
          i++;
        }
        // this is to catch for the case where the letter being added should be the first index in the pointers array
        if(i !== 0) {
          i = i - 1;
        }
        node.pointers.splice(i, 0, n);
        for(let i = 0; i < node.pointers.length; i++) {
          console.log(`pointer[${i}] == ${node.pointers[i].letter}`);
        } 
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
  // check string for each letter 
  // once we get to end of string give all possinilites at each pointer path else null
  autoComplete(str) {
    str = str.toLowerCase();
    const results = [];
    let curr = this.root;
    for (let i = 0; i < str.length; i++) {
      let foundLetter = false;
      for ( let j = 0; j < curr.pointers.length; j++) {
        if (str[i] === curr.pointers[j].letter) {
          curr = curr.pointers[j];
          foundLetter = true;
          break;
        }
      }
      if (!foundLetter) {
        return null;
      }
    }
    function recurse(node) {
      if(node.val !== null) {
        results.push(node.val);
      }
      if (node.pointers.length === 0) {
        return;
      }
      for (let pointer of node.pointers) {
        recurse(pointer);
      }
    }
    recurse(curr);
    return results.length ? results : null;
  }
}

let trie = new TrieSet();
console.log(trie.insert('HI'));
console.log(trie.insert('Hello'));
console.log(trie.insert('Hell'));
console.log(trie.insert('He'));
console.log(trie.root.pointers[0].pointers);
console.log(trie.autoComplete('helloo'));