# npm package run both in node and in the browser

> Idea from [Box-drawing character
](https://en.wikipedia.org/wiki/Box-drawing_character) AND [linux tree command](https://en.wikipedia.org/wiki/Tree_(command))

## install
```
npm install box-drawing

```

## example code
```
import boxDrawing from 'box-drawing';
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
}];

```

#### situation 1, like linux tree
```
console.log(boxDrawing(list));

//  result

└─ parent-folder 
    ├─ child-1 
    │    ├─ child-1-1 
    │    └─ child-1-2 
    └─ child-2 
        ├─ child-2-1 
        ├─ child-2-2 
        │    └─ child-2-2-1 
        │        ├─ child-2-2-1-1 
        │        └─ child-2-2-1-2 
        └─ child-2-3 
```

#### situation 2, with comment line
```
console.log(boxDrawing(list, 2));

// result


└─ parent-folder -------------------
    ├─ child-1 ---------------------
    │    ├─ child-1-1 --------------
    │    └─ child-1-2 --------------
    └─ child-2 ---------------------
        ├─ child-2-1 ---------------
        ├─ child-2-2 ---------------
        │    └─ child-2-2-1 --------
        │        ├─ child-2-2-1-1 --
        │        └─ child-2-2-1-2 --
        └─ child-2-3 ---------------

```

