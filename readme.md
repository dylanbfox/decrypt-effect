# decrypt.js - Simple Decrypt (Unscramble) Text Effect

### Overview

Use **decrypt.js** to unscramble some random text like *"5y5pvh2SZdHMQutybUTX"* into *"decrypt.js examples!"* right in front of your users.

### How It Works

Let's say you have some text *"decrypt_effect.js examples!"* you want to unscramble in front of your users. You start by replacing your text with some random text like so:

	<h3>5y5pvh2SZdHMQutybUTXGPhc#1d</h3>

Using jQuery, simply create a jQuery object and call the custom **decrypt_effect** method that `decrypt.js` provides, passing in the actual text as an option:

	$("h3").decrypt_effect({
		decrypted_text: "decrypt_effect.js examples!";
	});

Then fire up your webpage, and watch the text magically unscramble in front of your eyes! Whoa!

For now, you just need to make sure the scrambled text and the real text (decrypted_text option in the above example) have the same number of characters. Otherwise, an error will be thrown (see coming soon).

[See some examples of decrypt.js in action here](http://dylanbfox.github.io/decrypt-effect/).

### Examples

[See some examples of decrypt.js in action here](http://dylanbfox.github.io/decrypt-effect/).

### Installation

**1. Include jQuery**
`<script src="path/to/jquery.js"></script>`

**2. Include decrypt.js**
`<script type="text/javascript" src="path/to/decrypt.js"></script>`

### Options

**Speed**

You can pass in a custom speed (in milliseconds) for the decryption effect.

	$("h3").decrypt_effect({
		speed: 100,
		decrypted_text: "decrypt_effect.js examples!";
	});

By default, the effect occurs in 30 milliseconds.

**Callback**

You can pass a callback to `decrypt_effect` that'll be fired when the unscrambling is finished.

	$("h3").decrypt_effect({
		decrypted_text: "callback example!",
		callback: function(){
			alert("all done!");
			// maybe do some other stuff
		},
	});
 
### Dependencies

Decrypt.JS requires jQuery. It's only been tested with versions 1.11 and 2.1.

### Coming Soon

- Support for mismatched character counts
- ... 