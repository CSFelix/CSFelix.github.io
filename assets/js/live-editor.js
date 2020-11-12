/*
	*********************************
	*** Functions of Menu Buttons ***
	*********************************
*/

function loadCode() {
	try {
		document.querySelector(".editor #html-code").value = localStorage.getItem("htmlCode");
		document.querySelector(".editor #css-code").value = localStorage.getItem("cssCode");
		document.querySelector(".editor #js-code").value = localStorage.getItem("jsCode");
	}
	catch (e) { console.log(e); }
}

function saveCode() {
	localStorage.setItem("htmlCode", document.querySelector(".editor #html-code").value);
	localStorage.setItem("cssCode", document.querySelector(".editor #css-code").value);
	localStorage.setItem("jsCode", document.querySelector(".editor #js-code").value);

	alert("Code Saved!");
}

function deleteCode() {
	try {
		localStorage.clear();

		document.querySelector(".editor #html-code").value = "";
		document.querySelector(".editor #css-code").value = "";
		document.querySelector(".editor #js-code").value = "";

		alert("The Saved Code was Deleted!");
	}
	catch (e) { console.log(e); }
}

function runCode() {
        let htmlCode = document.querySelector(".editor #html-code").value;
        let cssCode = "<style>" + document.querySelector(".editor #css-code").value + "</style>";
        let jsCode = document.querySelector(".editor #js-code").value;
        let output = document.querySelector(".editor #output");
        
        output.contentDocument.body.innerHTML = cssCode + htmlCode;
        output.contentWindow.eval(jsCode);
}	

function downloadCode() {

    var userInput =  "<!DOCTYPE html>\n"
    				+ "<html>\n\t<head>\n\t\t<title>..::Your Code::..</title>"
    				+ "\n\t\t<style>\n\t\t\t" + document.querySelector(".editor #css-code").value + "\n\t\t</style>"
    				+ "\n\n\t</head>"
    				+ "\n\t<body>\n\t\t"
    				+ document.querySelector(".editor #html-code").value
    				+ "\n\t</body>"
    				+ "\n\n\t<script>\n\t\t" + document.querySelector(".editor #js-code").value + "\n\t</script>"
    				+ "\n</html>";
			
    var blob = new Blob([userInput], { type: "text/html;charset=utf-8" });
    saveAs(blob, "your_code.html");
}

/*
	***********************
	*** Event Listeners ***
	***********************
*/

window.addEventListener('load', loadCode);

document.querySelector("#saveButton").addEventListener("click", saveCode);
document.querySelector("#deleteButton").addEventListener("click", deleteCode);
document.querySelector("#downloadButton").addEventListener("click", downloadCode);
document.querySelector("#runButton").addEventListener("click", runCode);