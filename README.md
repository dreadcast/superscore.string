# superscore.string

Underscore.String mixins

## Usage

### Node environment
```
npm install superscore.string
```

Then in your scripts:
```javascript
var s = require('superscore.string');
```


### Browser environment
```
bower install superscore.string
```
Then include these files into your documents
```html
<script src="bower_components/superscore.string/dist/lowerdash.js"></script>
<script src="bower_components/underscore.string/lib/underscore.string.js"></script>
```

## API

### Superscore.String provides the following methods :

* `String truncate(String str, Number max, [Object options])`
	Truncate a string before `atChar`
	* `str` string to truncate
	* `max` string max length
	* `options`
		* `options.trail` leading string, default to `…`
		* `options.atChar` if provided, cut string before it

	```javascript
	s.truncate('The quick brown fox jumps over the lazy dog', 20, {
		atChar: ' '
	});
	// "The quick brown fox…"
	
	s.truncate('The quick brown fox jumps over the lazy dog', 17);
	// "The quick brown f…"
	```
	
* `Boolean anymatch(String str, Array matchers)`
	Test provided string against [anymatch](https://github.com/es128/anymatch) expression(s) (Node only)
	```javascript
	console.info(s.anymatch('The quick brown fox jumps over the lazy dog', ['over', /^the/]))
	//false
	
	console.info(s.anymatch('The quick brown fox jumps over the lazy dog', ['over', /^The/]))
	// true
	```
	
* `String random(Number length)`
	Generates a random string of `length` length 