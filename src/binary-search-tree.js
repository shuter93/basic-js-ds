const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (!this.roots) {
      return this.roots = null
    }

    return this.roots;
    // remove line with error and write your code here
  }

  add( data ) {
    this.roots = addWithin(this.roots, data);

    function addWithin (node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
    // remove line with error and write your code here
  }

  has( data ) {
    return searchWithin(this.roots, data);

    function searchWithin (node, data) {

      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
    // remove line with error and write your code here
  }

  find( data ) {
    return findWithin (this.roots, data);

    function findWithin (node, data) {

      if (!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return data < node.data ?
      findWithin(node.left, data) :
      findWithin(node.right, data);
    }
    // remove line with error and write your code here
  }

  remove( data ) {
    this.roots = removeNode(this.roots, data);

    function removeNode(node, data) {
      if ( !node ) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;

      }
    }
    // remove line with error and write your code here
  }

  min() {

    if (!this.roots) {
      return;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }

    return node.data;
    // remove line with error and write your code here
  }

  max() {

    if (!this.roots) {
      return;
    }

    let node = this.roots;
    while(node.right) {
      node = node.right;
    }

    return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};