(function($){
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var random_i = Math.floor(Math.random() * i);
	        var temp = array[i];	        
	        array[i] = array[random_i];
	        array[random_i] = temp;
	    }
	    return array;
	}

	$.fn.decrypt_effect = function(options){
		if (options === undefined){
			throw "No options defined!";
		}

		if (options.speed) {
			var speed = options.speed;
		} else {
			var speed = 30;
		}

		var node = $(this);
		var starting_text = node.text();
		var decrypted_text = options.decrypted_text;
		if (starting_text.length != decrypted_text.length) {
			throw "Decrypted text length doesn't match fake text length!";
		}
		var indexes = [];

		for (var i=0, len=starting_text.length; i < len; i++){
			indexes.push(i);
		}
		var psuedorandom_indexes = shuffleArray(indexes);
		var z = 0;
		var decryptText = setInterval(function(){
			starting_text = node.text(); // reset
			var real_text = decrypted_text;
			if (z < psuedorandom_indexes.length){
				var random_index = psuedorandom_indexes[z];
				console.log(random_index);
				var first_half = starting_text.substring(0, random_index);
				var substitution = real_text.substring(random_index, random_index+1);
				var second_half = starting_text.substring(random_index+1);
				var new_text = first_half + substitution + second_half;
				node.text(new_text);
				z++;
			} else {
				// options.callback();
				clearInterval(decryptText);
			}
		}, speed);
	}
})(jQuery);