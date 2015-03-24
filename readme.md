# Decrypt Effect

### Overview

Use **decrypt.js** to transform some random text like "5y5pvh2SZdHMQutybUTXGPhc#1d" into "decrypt_effect.js examples!".

### How It Works

Let's say you have a header you want to unscramble in front of your users:

	<h3>5y5pvh2SZdHMQutybUTXGPhc#1d</h3>

Using jQuery, simply create a jQuery object and call the custom **decrypt_effect** method like so:

	$("h3").decrypt_effect({
		decrypted_text: "decrypt_effect.js examples!";
	});

### Installation

`<script src="path/to/jquery.js"></script>`
`<script type="text/javascript" src="path/to/decrypt.js"></script>`

### Options

You can pass in a custom speed (in milliseconds) for the decryption effect.

	$("h3").decrypt_effect({
		speed: 100,
		decrypted_text: "decrypt_effect.js examples!";
	});

By default, the effect occurs in 30 milliseconds.

### Dependencies

Decrypt.JS requires jQuery. It's only been tested with versions 1.11 and 2.1.