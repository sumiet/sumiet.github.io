"use strict";


var output = document.getElementById("output");
var post = document.getElementById("post");
var cmdName = document.getElementById("cmdName");
var errorMsg ='<div class="row"> Invalid command!<br />Type <i>help</i> to get list of available commands.</div>';
var userName= "guest_user:~";
var defaultPath = userName + "$";

var commands = {
	cat: {
		objective:[],
		tech:[
			function() {
				output.innerHTML +=  '<div class="row"><br /><b>Languages:</b> ANSI C, C++, JAVA<br/ ><b>Other:</b> MATLAB, Photoshop<br/ ><br /></div>'	;
			}
		],
		edu:[],
		nri:[],
		oes:[],
		uber:[],
		tnp: [
			function() {
				output.innerHTML +=  '<div class="row"><br /><b>Languages:</b> ANSI C, C++, JAVA<br/ ><b>Other:</b> MATLAB, Photoshop<br/ ><br /></div>'	;
			}
		],
		blab: [],
		nta: [],
		extra:[],
		gains:[],
		others:[]

	},

	cd: [
		function(args) {
			var dir = getPwd(cmdName.innerHTML);
			console.log(dir);
			
			if(dir == "$") {
				cmdName.innerHTML = getNewPwd(args);
			} else if (dir != "$" && args == "..") {
				cmdName.innerHTML = getNewPwd(args);
			} else {
				output.innerHTML+="No such file or directory";
			}
		}
	],

	visit: {
		linkedin: [	function() {visitURL("http://in.linkedin.com/in/sumitagarwal24")}],
		git: [	function() {visitURL("https://github.com/sumiet")}],
		fb: [	function() {visitURL("https://fb.com/sumiet24")}],
		google: [	function() {visitURL("http://lmgtfy.com/?q=Sumit+Agarwal+BIT+Mesra")}]
	},

	id:[
		function() {
			output.innerHTML+='<div class="row" ><b>Sumit Agarwal</b><br /><i>Near Dr. Arun Kumar, Police Line Road<br />Sadar Bazar, Chaibasa, Jharkhand-833201<br />+91-9674133903, +91-8084903903<br /><a href="mailto:sumit1268.11@bitmesra.ac.in"  target="_top" style="text-decoration:none; color:#000000;" >sumit1268.11@bitmesra.ac.in</a><br /><a style="text-decoration:none; color:#000000;" href="http://in.linkedin.com/in/sumitagarwal24" target="_blank">in.linkedin.com/in/sumitagarwal24</a></i></div>';
		}
	],

	ls:[ 
		function() {
			output.innerHTML+="list of files";
		}
	],

	help: [ 
		function() {
			output.innerHTML += "Commands supported are:<br /><table>	<tr>		<td>cat &lt;file_name&gt;</td>		<td>To veiw the available files</td>	</tr>	<tr>		<td>cd &lt;folder_name&gt;</td>		<td>Move to the specified folder path</td>	</tr><tr>		<td>cd &lt;..&gt;</td>	<td>Move to previous folder</td></tr><tr><td>help</td><td>List of available commands</td>	</tr>	<tr>		<td>ls</td>		<td>List of available files</td>	</tr>	</table><br />";
		}
	],

	clear: [ 
			function() {
				output.innerHTML="";
			}
	],

	feedback: {

	}
};


function getPwd(path) {
	var directory  = path.split('~');
	return directory[1].trim();
}

function getNewPwd(folder) {
	console.log(folder+"bkgb");
	if(folder == '..') {
		return userName+"$ ";	
	}
	else {
		return userName+"/"+folder+"$ ";	
	}
}

function visitURL(url) {
	var win = window.open(url, '_blank');
	win.focus();
}


function enterAction() {

	var keyPressed = event.keyCode || event.which;

        //if ENTER is pressed
        if(keyPressed==13)
        {
        	output.innerHTML +=  '<div class="row">'+cmdName.innerHTML+post.value+'</div>';	
        	var cmd = post.value.trim();
        	var keywords = cmd.split(' ');
        	if(keywords[0] == 'cd') {
        		commands[keywords[0]][0](keywords[1]);
        	} else if(commands.hasOwnProperty(keywords[0])) {
        		switch (keywords.length){
        		case 1: if( typeof commands[keywords[0]][0] == 'function') {
        					commands[keywords[0]][0]();
        				} else {
        					output.innerHTML += errorMsg;
        				}
        				break;
        		case 2: let cat = commands[keywords[0]];
        				if(cat.hasOwnProperty(keywords[1])){
							cat[keywords[1]][0]();
        				} else {
        					output.innerHTML += errorMsg;
        				}
        				break;
        		default:  output.innerHTML +=  errorMsg;
        		}	
        	} else {
        		output.innerHTML +=  errorMsg;
        	}
        	post.value="";
        	window.scrollTo(0,document.body.scrollHeight);
        }
        else
        {
            return false;
        }		
};

function clickAction() {
	post.focus();
};





/* Window/ document level events */


window.onload = function init() {
	console.log("initialized");

	output.innerHTML = '<div class="row">Console Browser!!</div>'	;
	
	post.focus();
	
}

post.addEventListener("keypress", enterAction);
document.addEventListener("click", clickAction);
