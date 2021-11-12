# pathsOf
Get object paths to tree leafs

```
      a
     / \
    b   B
   /   / \
  c   C   D
 /
d
ì
```

paths:
```
- a.b.c.d
- a.B.C
- a.B.D
```

```
const object = {
  a: {
    b: {
      c: {
        d: 1
      }
    },
    B: {
      C: 2,
      D: 3
    }
  }
};

for (const [path,value] of pathsOf(object)){
  console.log(path.join('.'),'=',value);
}
// results:
/*
a.b.c.d = 1 
a.B.C = 2
a.B.D = 3
*/
```

```
const arr = [
  [
   [
    [1]
   ],
  ],
  [
   [2],
   [3]
  ],
 ];

for (const [path,value] of pathsOf(arr)){
  console.log(path.join('.'),'=',value);
}
// results:
/*
0.0.0.0 = 1
1.0.0 = 2
1.1.0 = 3
*/
```
