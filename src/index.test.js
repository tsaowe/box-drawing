
const boxDraw = require('./index');

const list = [{
  name: 'parent-folder',
  children: [{
    name: 'child-1',
    children: [{
      name: 'child-1-1',
    }, {
      name: 'child-1-2',
    }]
  }, {
    name: 'child-2',
    children: [{
      name: 'child-2-1',
    }, {
      name: 'child-2-2',
      children: [{
        name: 'child-2-2-1',
        children: [{
          name: 'child-2-2-1-1',
        }, {
          name: 'child-2-2-1-2',
        }]
      }]
    }, {
      name: 'child-2-3',
    }]
  }]
}
]

console.log(boxDraw(list));
console.log(boxDraw(list, 2));
