### Homeworks

1. Common mistakes
   - Global variables should be outside the component
   - Using `.map`
   - Fragments vs Div: Don't use fragments unless you REALLY need them

Yes ✅
```javascript
<>
    <div>item 1</div>
    <div>item 2</div>
</>
```

Yes ✅
```javascript
<div className="container">
    <div>item 1</div>
    <div>item 2</div>
</div>
```

No ❌
```javascript
<>
    <div>
        <div>item 1</div>
        <div>item 2</div>
    </div>
</>
```

No ❌
```javascript
<>
    <div>item 1</div>
</>
```



1. Questions
1. How to read parameters from URL ?

### State

1. Example: input with name
   1. Just a variable (doesn't work)
   1. Use state
1. Example: input with name + input with age
   1. Show that it can be done with one state variable
1. Example: 2 states of the card
1. Example: render Cats as a list
1. Example: add new Cats (from list)
1. Example: props drilling
   1. move change of names to the parent component
   2. add another component that uses the list