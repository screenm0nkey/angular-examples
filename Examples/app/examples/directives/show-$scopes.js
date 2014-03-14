"use strict"

var $root = $('[ng-app]'),
    data = $root.data();

console.log(data.$scope.$id, $root[0]);
console.log('\t', data, '\n');

function walkTheDOM(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walkTheDOM(node, func);
    node = node.nextSibling;
  }
}

// Example usage: Process all Text nodes on the page
walkTheDOM(document.body, function (node) {
    if (node.nodeType === 1) { // Is it a Text node?
      var data = $(node).data();
      if (data.hasOwnProperty('$scope')) {
        console.log(data.$scope.$id, node);
        console.log('\t', data, '\n');
      }
    }
  });