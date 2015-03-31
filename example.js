$(document).ready(function(){

	$("#examples h1").decrypt_effect({
		decrypted_text: "decrypt.js examples!",
	});

	$("#examples #slow-example button").on("click", function(){
		$("#slow-example h3").decrypt_effect({
			speed: 100,
			decrypted_text: "sloooooooow example"
		});
	});

	$("#examples #fast-example button").on("click", function(){
		$("#fast-example h3").decrypt_effect({
			speed: 10,
			decrypted_text: "fast example!"
		});
	});

	$("#examples #custom-example button").on("click", function(){
		var speed = $("input#speed").val();
		$("#custom-example h3").decrypt_effect({
			speed: speed,
			decrypted_text: "custom speed example",
		});
	});

	$("#examples #callback-example button").on("click", function(){
		var speed = $("input#speed").val();
		$("#callback-example h3").decrypt_effect({
			decrypted_text: "callback example!",
			callback: function(){
				alert("all done!");
				$("#examples #callback-example button").fadeOut();
			},
		});
	});				

});