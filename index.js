// IIFE: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function () {
	const modal = document.getElementById("myModal");

	// Get the button that opens the modal
	const btn = document.querySelector(".playVideo");

	// NOTE: add event for the open modal button
	btn.onclick = () => {
		modal.style.display = "block";
	}

	// Get the <span> element that closes the modal
	const span = document.getElementsByClassName("close")[0];

	//get the iframe from  youtube

	const playVid = document.querySelector(".video")


	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
		// NOTE: reassiging the "src" attribute will make the video stop when the modal is closed
		playVid.setAttribute("src", playVid.getAttribute("src"));
	}




	const close1 = document.getElementsByClassName("close1")[0];

	const modal1 = document.getElementById("myModal-1");

	// Get the button that opens the modal
	const btn1 = document.querySelector("#modal-1");


	btn1.onclick = function () {
		modal1.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	close1.onclick = function () {
		modal1.style.display = "none";
	}

	// ------------



	const modal2 = document.getElementById("myModal-2");

	// Get the button that opens the modal
	const btn2 = document.querySelector("#modal-2");


	btn2.onclick = function () {
		// NOTE: Empty function body?
		modal2.style.display = "block";
	}
	// NOTE: Don't forget to check for variable declaration before use
	const close2 = document.querySelector(".close2");

	close2.onclick = function () {
		modal2.style.display = "none";
	}


	//   -------------
	// NOTE: Delcare modal3 before Using it
	const modal3 = document.querySelector("#myModal-3");
	const close3 = document.getElementsByClassName("close3")[0];


	// Get the button that opens the modal
	let btn3 = document.querySelector("#modal-3");
	btn3.onclick = () => {
		modal3.style.display = "block";
	};

	close3.onclick = function () {
		modal3.style.display = "none";
	}
	//   -------------
	const close4 = document.getElementsByClassName("close4")[0];

	const modal4 = document.getElementById("myModal-4");

	// Get the button that opens the modal
	const btn4 = document.querySelector("#modal-4");
	// NOTE: mising event for the close modal 4 button
	close4.onclick = () => {
		modal4.style.display = "none";
	}
	btn4.onclick = function () {
		modal4.style.display = "block";
	}
})();