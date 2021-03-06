'use strict';

class Node {
  constructor(token) {
    this.value = token;
    this.children = [];
    this.parent = null;
  }

  isLeaf() {
    return !this.children.length;
  }

  contains(node) {
    return this.children.findIndex((target) => node == target) >=0
  }

  appendChild(node) {
    if( this.contains(node)) {
      throw new TypeError('Node already contains the child node')
    }
    node.setParent(this)
    this.children.push(node);
    // node.setParent(this);
  }

  setParent(ancestor) {
    if(this.parent) {
      throw new TypeError('Node already a defined ancestor');
    }
    // should also check that the parent has this node as child
    // delete to three
    this.parent = ancestor;
  }

  // big up garbage collector
  removeChild(node) { 
    const index = this.children.findIndex((child) => child === node);
    // 
    if(index >= 0) {
      const leftChildren = this.children.slice(0, index);
      const rightChildren =  this.children.slice(index + 1);
      this.children = leftChildren.concat(rightChildren);
      node.parent = null;
      return true;
    }
  }
}

class Tree {
  constructor(name){
    this.name = name;
    this.current = null; 
    this.root = null;
    this.current = null;
  }

  isEmpty() {
    return !this.root
  }

  setRoot(node){
    this.root = node;
    this.setRoot = function invalidRootSet() {
      throw new ReferenceError('Tree object has already root not set')
    }
  }

  insert(node, parent){
    if(this.isEmpty()) {
      throw new ReferenceError('Tree is empty, could not find root node')
    }

    if(!node || !parent) {
      throw new TypeError('Insert require exactly two argument: the child node and the parent node in that order')
    }
    const checkParentNode = this.find(parent) 

    if(!checkParentNode) {
      throw new ReferenceError('Parent node is not in the tree')
    }

    parent.appendChild(node);
    // node.setParent(parent);
  }

  // start stree from Node(tree) children
  // method should be accessible normale from outside, not enumerable
  dfs(node, tree) {
    let queue = [];
    queue.push(...tree.children)
    let target = null;
    while (queue.length && !target) {
      const current = queue.shift();
      if( current == node ) {
        target = current
      } else if ( current.children) {
        const newQueu = [];
        newQueu.push(...current.children)
        queue = newQueu.concat(queue);
      }
    }
    return target;
  }

  delete(node) {
    const targetNode = this.dfs(node, this.root)
    if(targetNode) {
      targetNode.parent.removeChild(targetNode)
    }
    return true;
  }

  // isSame method
  find(node) {
    if(node === this.root) {
      return this.root
    }
    const targetNode = this.dfs(node, this.root)
    return  targetNode
  }

}

exports.Node = Node;
exports.Tree = Tree;


