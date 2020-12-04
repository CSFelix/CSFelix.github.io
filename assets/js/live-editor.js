/*
	*********************************
	*** Functions of Menu Buttons ***
	*********************************
*/

function loadCode() {
	try {
		
		htmlCode = localStorage.getItem("htmlCode");
		cssCode = localStorage.getItem("cssCode");
		jsCode = localStorage.getItem("jsCode");

		// default code load
		if (htmlCode == null
			&& cssCode == null
			&& jsCode == null) {

			htmlCode = ""
			cssCode = ""
			jsCode = "";
		}

		document.querySelector(".editor #html-code").value = htmlCode;
		document.querySelector(".editor #css-code").value = cssCode;
		document.querySelector(".editor #js-code").value = jsCode;

		runCode();

		$("#questionDescription").hide();
	}
	catch (e) { console.log(e); }
}

function openQuestionModal() { $("#questionDescription").toggle(500); }

function sampleCode() {

	// Setting Defult Code
	htmlCode = "<!DOCTYPE html>"
		+ "<html>"
		+ "<head> <meta charset='utf-8'> <meta name='viewport' content='width=device-width,initial-scale=1.0'></head>"
		+ "<body>"
		+ "<div class='main'> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>"
		+ "</body>"
		+ "</html>"

	cssCode = "* { margin: 0;	padding: 0; }"
		+ "body { background-color: ghostwhite; }"
		+ ".main { width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; }"
		+ ".main span { width: 10px; height: 80px; margin: 0 3px; border-radius: 50px; }"
		+ ".main span:nth-child(5) { background-color: #ff414d; animation: animate0 0.7s infinite; }"
		+ ".main span:nth-child(4), span:nth-child(6) { background-color: #821752; animation: animate1 0.8s infinite; }"
		+ ".main span:nth-child(3), span:nth-child(7) { background-color: #f0a500; animation: animate2 0.9s infinite; }"
		+ ".main span:nth-child(2), span:nth-child(8) { background-color: #07689f; animation: animate3 1s infinite; }"
		+ ".main span:nth-child(1), span:nth-child(9) { background-color: #00b7c2; animation: animate4 1.1s infinite; }"
		+ "@keyframes animate0 { 0%, 100% { height: 30px; } 50% { height: 80px; } }"
		+ "@keyframes animate1 { 0%, 100% { height: 30px; } 50% { height: 100px; } }"
		+ "@keyframes animate2 { 0%, 100% { height: 30px; } 50% { height: 51px; } }"
		+ "@keyframes animate3 { 0%, 100% { height: 30px; } 50% { height: 90px; } }"
		+ "@keyframes animate4 { 0%, 100% { height: 30px; } 50% { height: 80px; } }"

	jsCode = "//There is nothing here";

	document.querySelector(".editor #html-code").value = htmlCode;
	document.querySelector(".editor #css-code").value = cssCode;
	document.querySelector(".editor #js-code").value = jsCode;

	runCode();
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
	htmlCode = tabCode(document.querySelector(".editor #html-code").value, true);
	cssCode = tabCode(document.querySelector(".editor #css-code").value, false);
	jsCode = tabCode(document.querySelector(".editor #js-code").value, true);

    var userInput =  "<!DOCTYPE html>\n"
    				+ "<html>\n\t<head>\n\t\t<title>..::Your Code::..</title>"
    				+ "\n\t\t<style>\n" + cssCode + "\n\t\t</style>"
    				+ "\n\n\t</head>"
    				+ "\n\t<body>\n"
    				+ htmlCode
    				+ "\n\t</body>"
    				+ "\n\n\t<script>\n" + jsCode + "\n\t</script>"
    				+ "\n</html>";
			
    var blob = new Blob([userInput], { type: "text/html;charset=utf-8" });
    saveAs(blob, "your_code.html");
}

function tabCode(code, htmlJsCode) {
	return_code = code.split('\n');

	// html and js code >> 2 tabs
	if (htmlJsCode) {
		for (i = 0; i < return_code.length; i++) { return_code[i] = '\t\t' + return_code[i] }
	}

	// css code >> 3 tabs
	else {
		for (i = 0; i < return_code.length; i++) { return_code[i] = '\t\t\t' + return_code[i] }
	}
	
	return_code = return_code.join('\n');
	return return_code;
}

/*
	***********************
	*** Event Listeners ***
	***********************
*/

window.addEventListener('load', loadCode);

document.querySelector("#questionButton").addEventListener("click", openQuestionModal);
document.querySelector("#sampleButton").addEventListener("click", sampleCode);
document.querySelector("#saveButton").addEventListener("click", saveCode);
document.querySelector("#deleteButton").addEventListener("click", deleteCode);
document.querySelector("#downloadButton").addEventListener("click", downloadCode);
document.querySelector("#runButton").addEventListener("click", runCode);
