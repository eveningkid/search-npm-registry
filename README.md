# search-npm-registry
Quickly query NPM registry.  

## How to use?
```js
const searchNpmRegistry = require('search-npm-registry');

(async () => {
  const results = await searchNpmRegistry()
    .text('react')
    .size(5)
    .search();

  // results = [{ name: 'react', description: '...', ... }, ...]
  console.log(results);
})();
```

## API
Calling `searchNpmRegisty` will return an instance of `SearchNpmRegistry`.
You then can chain all the required options before searching modules:  
- `.text(string)`
- `.size(integer)`, limit
- `.from(integer)`
- `.quality(float)`, `.popularity(float)`, `.maintenance(float)`

When you're all set, simply call `.search()`. You'll get a `Promise` object from it.  
[Need more information about search parameters?](https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get-v1search)  

## License
MIT @ eveningkid
