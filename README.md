### addID

Add unique id for object or object array

#### Usage


```
// return a new value, not change the original value

addID({ a: 1 }) //{ a: 1, id: '79infuyx4400' }

addID({ a: 1 },'xx') //{ a: 1, xx: '7j5mz7h7rd00' }

addID([{ a: 1 }, { a: 2 }]) //[ { a: 1, id: '6ohrash9ud80' }, { a: 2, id: '40life1rs5w0' } ]

addID([{ a: 1 }, { a: 2 }],'xx') //[ { a: 1, xx: '3afi8qse9t40' }, { a: 2, xx: '4kuxlg8f5i00' } ]
```
