$(document).ready(function() { $('#main-welcome').hide().delay(250).fadeIn('slow'); }); 

function echoMenu(t, cb){
	var content = [
		{ c:'\n', d:1},
		{ c:'\n', d:1},
		{ c:"---------------------------------------"},
		{ c:"Shelby.tv / Project G.O.A.T.S."},
		{ c:"---------------------------------------"},
		{ c:'\n', d:1},
		{ c:"Please Select An Option:"},
		{ c:'\n', d:1},
		{ c:"1. Apply                 2. F.A.Q         3. About G.O.A.T.S."},
		{ c:"4. View Applicants List   5. Access Swag  6. Launch Shelby.tv  7."},
		{ c:'\n', d:1},
		{ c:'\n', d:1}
	];
	echoContent(content, t, cb);
}

function echoContent(content, t, cb){
	t.echo(content[0].c).addClass(content[0].cssClass || 'default');
	(content=content.slice(1)).length ? setTimeout( function(){ echoContent(content, t, cb); }, content[0].d || 100) : cb();
}

function executeTerm(content, t, showMenu, cb){
	t.clear();
	t.pause();
	echoContent(content, t, function(){
		if(showMenu){
			echoMenu(t, function(){
				t.resume();
				cb && cb();
			});
		} else {
			cb && cb();
		}
	});
	
}

document.onkeydown = function() {
	if(event.keyCode == 13) {
		
			$('#main-welcome').fadeOut('fast');
		
			$('#main').delay(500).hide().fadeIn('fast').terminal(function(command, term) {
				var content;

				// ------------ (0) INTERNZERO ------------
				if(command == '0'){
					var loveLine = Math.random() < 0.3 ? "LOVES YOU" : "LIKES YOU AS A FRIEND";
					content = [
						{c:'@INTERNZERO '+loveLine},
						{c:'\n'}
					];
					executeTerm(content, term, true);

				// ------------ (1) APPLY ------------
				} else if(command == '1') {
					content = [
						{c:'> APPLY'},
						{c:'coming soon'}
					];
					executeTerm(content, term, true);


				// ------------ (2) FAQ ------------
				} else if(command == '2') {
					content = [
						{c:'> F.A.Q.'},
						{c:'\n', d:1},
						{c:'\n', d:1},
						{c:'WHAT IS PROJECT G.O.A.T.S.?'},
						{c:'Project G.O.A.T.S. is a top secret interview series powered by Shelby.tv that will take place during SXSW Interactive in Austin, TX on Saturday, March 10th. We are currently accepting applications, but only a limited number of spots are available, and we will not be able to accommodate everyone. You are not required to have a SXSW badge be eligible, but you will be responsible for your transportation to and accommodations in Austin.', cssClass:'faqtext'},
						{c:'\n', d:1},
						{c:'\n', d:1},
						{c:'WHO IS THE CELBRITY GUEST?'},
						{c:'If you are selected, the identity of the celebrity guest will be revealed to you at the time of your interview.', cssClass:'faqtext'},
						{c:'\n', d:1},
						{c:'\n', d:1},
						{c:'WILL THE INTERVIEW BE FILMED AND PROMOTED FAR AND WIDE?'},
						{c:'Heck yes it will.', cssClass:'faqtext'},
						{c:'\n', d:1}
					];
					executeTerm(content, term, true);
					


				// ------------ (3) ABOUT G.O.A.T.S. ------------
				} else if(command == '3') {
					content = [
						{c:'> ABOUT G.O.A.T.S.'},
						{c:'\n', d:1},
						{c:'\n', d:1},
						{c:'LOADING GOATS INFORMATION...'},
						{c:'>', d:200},
						{c:'>', d:200},
						{c:'>', d:200}
					];
					executeTerm(content, term, false, function(){
						var ranLinks = [
							"http://lolgoats.com/",
							"http://shel.tv/t1omt9",
							"http://img.artknowledgenews.com/files2010jan/Robert-Rauschenberg-Monogram.jpg" ];
						window.location = ranLinks[Math.floor(Math.random() * ranLinks.length)];
					});



				// ------------ (4) APPLICANT LIST ------------
				} else if(command == '4') {
					content = [
						{c:'> APPLICANT LIST'},
						{c:'coming soon'}
					];
					executeTerm(content, term, true);
					
					
					
					
				// ------------ (5) ACCESS SWAG ------------
				} else if(command == '5') {
					content = [
						{c:'> STUFF WE ALL GET'},
						{c:'coming soon'}
					];
					executeTerm(content, term, true);
					
					
					
				// ------------ (6) SHELBY.TV ------------
				} else if(command == '6') {
					content = [
						{c:'> LAUNCH SHELBY.TV'},
						{c:'\n', d:1},
						{c:'\n', d:1},
						{c:'LOADING SHELBY.TV...'},
						{c:'>', d:200},
						{c:'>', d:200},
						{c:'>', d:200}
					];
					executeTerm(content, term, false, function(){
						window.location = "http://shelby.tv";
					});					



				// ------------ (7) LAVA ------------
				} else if(command == '7') {
					content = [
						{c:'> DON\'T DIG TOO DEEP'},
						{c:'you might get burned by the molten lava', cssClass:'faqtext'},
						{c:'\n'}
					];
					executeTerm(content, term, true);



				// ------------ bad command ------------
				} else {
					term.error('Unknown Command: ' + command + ' ');
				}
				
				
				//after every entry, make sure we're scrolled enough
				$("body").scrollTop($(".terminal-output").height());
				
			}, {
				greetings : "Main Screen On...\n" + "> \n" + "We have signal! \n" + "> \n\n\n",
				prompt : 'Selection:',
				height : '100%',
				width : '100%',
				onInit: function(t){ echoMenu(t); }
			});
	}
};