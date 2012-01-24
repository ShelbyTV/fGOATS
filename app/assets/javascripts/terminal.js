$(document).ready(function() { $('#main-welcome').hide().delay(100).fadeIn('slow'); }); 

function echoMenu(t, cb){
	var content = [
		{c:'\n', d:1},
		{c:'\n', d:1},
		{c:"---------------------------------------"},
		{c:"Shelby.tv / Project G.O.A.T.S."},
		{c:"---------------------------------------"},
		{c:'\n', d:1},
		{c:"Please Select An Option:"},
		{c:'\n', d:1},
		{c:"1. Apply", d:1},
		{c:"2. F.A.Q", d:1},
		{c:"3. About G.O.A.T.S.", d:1},
		{c:"4. View Applicant Count", d:1},
		{c:"6. Launch Shelby.tv", d:1},
		{c:'\n', d:1},
		{c:'\n', d:1}
	];
	echoContent(content, t, cb);
}

function echoContent(content, t, cb){
	t.echo(content[0].c).addClass(content[0].cssClass || 'default');
	(content=content.slice(1)).length ? setTimeout( function(){ echoContent(content, t, cb); }, content[0].d || 100) : (cb && cb());
}

function executeTerm(content, t, showMenu, cb){
	t.clear();
	t.pause();
	echoContent(content, t, function(){
		if(showMenu){
			echoMenu(t, function(){
				t.resume();
				//after every entry, make sure we're scrolled enough
				$("body").scrollTop($(".terminal-output").height());
				
				cb && cb();
			});
		} else {
			cb && cb();
		}
	});
	
}

var termLoader = function() {
	if(event.keyCode == 13) {
		
			$('#main-welcome').fadeOut('fast');
		
			$('#main').delay(200).hide().fadeIn('fast').terminal(function(command, term) {
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
						{c:'\n'},
						{c:'PLEASE HIT \'ENTER\' WHEN YOU HAVE COMPLETED EACH FIELD'},
						{c:'\n'}
					];
					
					executeTerm(content, term, false, function(){
						
						//>>>>>>>>>>
						// Take the users application (using a new interpreter)
						// and submit it back to our server via ajax
						
						term.resume();
						var commandCount = 0, applicant_info = {};
						
						//push a new interpreter on the stack
						//this interpreter only takes in applicant info
						term.push(function(command, term){
							
							if(command == ''){
								term.error("I've got all day...");
								return;
							}
							
							switch(commandCount){
								case 0:
									applicant_info.first_name = command;
									term.set_prompt("LAST NAME >");
									break;
								case 1:
									applicant_info.last_name = command;
									term.set_prompt("COMPANY >");
									break;
								case 2:
									applicant_info.company = command;
									term.set_prompt("JOB TITLE >");
									break;
								case 3:
									applicant_info.job_title = command;
									term.set_prompt("EMAIL ADDRESS >");
									break;
								case 4:
									applicant_info.email = command;
									term.clear();
									
									term.echo("\nTransmitting...");
									$.post('applicants', {'applicant': applicant_info}, null, 'json')
										.success(function(){
											term.clear();
											term.echo("\n\nCongratulations!\nYou have successfully applied to participate in Project G.O.A.T.S.\nYou will receive an email confirmation shortly.\n\n");
											//reset term
											term.pop();
											echoMenu(term);
										})
										.error(function(){
											term.clear();
											term.error("\n\nSorry "+applicant_info.first_name+", something went wrong.\nPlease try again later.\n\n\n");
											//reset term
											term.pop();
											echoMenu(term);
										});
										
									break;
							}
							commandCount++;
						},{
							prompt: 'FIRST NAME >',
							name: 'apply'
						});
						//<<<<<<<<<<
						
						
					});


				// ------------ (2) FAQ ------------
				} else if(command == '2') {
					content = [
						{c:'> F.A.Q.'},
						{c:'\n', d:1},
						{c:'\n', d:1},
						{c:'WHAT IS PROJECT G.O.A.T.S.?'},
						{c:'Project G.O.A.T.S. is a top secret interview series powered by Shelby.tv that will take place during', cssClass:'faqtext'},
						{c:'SXSW Interactive in Austin, TX on Saturday, March 10th.', cssClass:'faqtext'},
						{c:'\nWe are currently accepting applications, but only a limited number of spots are available, and we', cssClass:'faqtext'},
						{c:'will not be able to accommodate everyone.', cssClass:'faqtext'},
						{c:'\nYou are not required to have a SXSW badge to be eligible, but you will be responsible for your', cssClass:'faqtext'},
						{c:'transportation to and accommodations in Austin.', cssClass:'faqtext'},
						{c:'\n', d:1},
						{c:'\n', d:1},
						{c:'WHO IS THE CELBRITY GUEST?'},
						{c:'If you are selected, the identity of the celebrity guest will be revealed to you at the time of', cssClass:'faqtext'},
						{c:'your interview.', cssClass:'faqtext'},
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
						{c:'RUN \'APPLICANT COUNT\''},
						{c:'>', d:300},
						{c:'>', d:300},
						{c:'>', d:300},
					];
					executeTerm(content, term, false, function(){
						$.getJSON('applicants/count', function(c){
							content = [
								{c:'\n'},
								{c:"> NO LESS THAN "+(c+5)+" APPLICATIONS RECEIVED <"},
								{c:'\n'},
								{c:'\n'},
								{c:'including:'},
								{c:'\n'},
								{c:'fred wilson @ usv'},
								{c:'brad feld @ foundry group'},
								{c:'fakegrimlock @'},
								{c:'fred durst @ limp bizkit'},
								{c:'dens @ foursquare'},
								{c:'...'}
							];
							executeTerm(content, term, true);
						});
						
					});
					
					
					
					
				// ------------ (5) ? ------------
				} else if(command == '5') {
					content = [
						{c:'> THERE IS NO 5. PLEASE PAY ATTENTION. <'},
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



				// ------------ random crap ------------
				} else if(command == 'god') { term.echo( "god wouldn't be up this late");
				} else if(command == 'goats') { term.echo( "fgoats");
				} else if(command == 'wick') { term.echo( "girl");
				} else if(command == 'spinosa') { term.pause();
				


				// ------------ bad command ------------
				} else {
					term.error('Unknown Command: ' + command + ' ');
					//after every entry, make sure we're scrolled enough
					$("body").scrollTop($(".terminal-output").height());
				}
				
				
			}, {
				greetings : "Main Screen On...\n" + "> \n" + "We have signal! \n" + "> \n\n\n",
				prompt : 'Selection:',
				height : '100%',
				width : '100%',
				onInit: function(t){ echoMenu(t); }
			});
			
			$(document).unbind('keydown', welcomeLoader);
	}
};

$(document).bind('keydown', termLoader);