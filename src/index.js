
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
    this.children.push(node);
  }

  setParent(ancestor) {
    if(this.parent) {
      throw new TypeError('Node already a defined ancestor');
    }
    // should also check that the parent has this node as child
    // delete to three
    this.parent = ancestor;
  }

  removeChild(node) { 
    const index = this.children.findIndex((child) => child === node);
    // 
    if(index >= 0) {
      const leftChildren = this.children.slice(0, index);
      const rightChildren =  this.children.slice(index + 1);
      this.children = leftChildren.concat(rightChildren);
      return true;
    } else {
      // trow exception ? 
      return false; 
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

  // isRoot() {
  //   if(!this.root) {
  //     throw new ReferenceError('Tree object is empty')
  //   }
  //   return this.current !== this.root;
  // }



  // insert(parent, node){
  //   this.size +=1;
  // }

}

exports.Node = Node;
exports.Tree = Tree;


