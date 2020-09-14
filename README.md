# hotswap.js
Hotswap content on a page based on a jQuery selector.
Loads an URL, pick the content of a selector and put it in the

## Usage:

The js function can be used standalone
hotswap(src-url, selectors);
```
<div id="some-container">This stuff will be replaced with the content in #some-container on https://example.com</div>
<div id="this-too">This stuff will be replaced with the content in #this-too on https://example.com</div>
<script>
hotswap('https://example.com', '#somecontainer, #this-too');
</script>
```

Or it can be used with a html attribute:
```
<a href="https://example.com" data-hotswap="#some-container, #this-too">
<div id="some-container">This stuff will be replaced with the content in #some-container on https://example.com</div>
<div id="this-too">This stuff will be replaced with the content in #this-too on https://example.com</div>
```
