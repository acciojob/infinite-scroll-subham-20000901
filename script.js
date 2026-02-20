//your code here!

let container = document.getElementById("infi-list");
let count = 1;
for(let i=0; i<=9; i++){
	let li = document.createElement("li");
	li.innerText = "Item " + count++;
	container.appendChild(li);
	
}

container.addEventListener("scroll", function(){
	if(container.scrollTop + container.clientHeight >= container.scrollHeight){
		for(let i=0; i<2; i++){
			let li =  document.createElement("li");
			li.innerText = "Item " + count++;
			container.appendChild(li);
		}
	}
})
