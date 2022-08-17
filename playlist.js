window.onload = init;

function init() {
	let button = document.querySelector("#addButton");
	button.onclick = GetSongButton;
}

function GetSongButton() {
	let inputText = document.querySelector("#songTextInput");
	let songTitle = inputText.value;
	if(songTitle == ""){
		alert('Add song');
	}else{
		let li = document.createElement("li");
		li.textContent = songTitle;
		let ul = document.querySelector("ul");

		ul.appendChild(li);
	}
}