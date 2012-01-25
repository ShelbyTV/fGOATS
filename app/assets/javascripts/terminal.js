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
		{c:"5. share g.o.a.t.s.", d:1},
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
											term.echo("\n\nCongratulations!\nYou have successfully applied to participate in Project G.O.A.T.S.\nYou will receive an email confirmation shortly.\n\n\n");
											term.echo("Want you application prioritized?  Share >\n\n");
											$(".terminal-output").append("<div class='roomy'>tell friends with <a href='//www.facebook.com/sharer.php?u=http%3A%2F%2Fprojectgoats.com&t=I%20have%20no%20idea%20what%20I%20just%20signed%20up%20for%2C%20but%20I%20can%27t%20wait%20to%20watch%20Project%20G.O.A.T.S.%20on%20Shelby.tv!' class='popup' popup-width='640' popup-height='270'>Facebook</a></div>");
											$(".terminal-output").append("<div class='roomy'>tweet it out on <a href='//twitter.com/intent/tweet?url=http%3A%2F%2Fprojectgoats.com&text=I%20have%20no%20idea%20what%20I%20just%20signed%20up%20for%2C%20but%20I%20can%27t%20wait%20to%20watch%20%23projectGOATS%20%40onShelby' class='popup' popup-width='600' popup-height='250'>Twitter</a></div>");
											$(".terminal-output").append("<div class='roomy'>blog it on <a href='http://www.tumblr.com/share/link?url=http%3A%2F%2Fprojectgoats.com&name=WTF%20is%20Project%20G.O.A.T.S.%3F!&description=I%20have%20no%20idea%20what%20I%20just%20signed%20up%20for%2C%20but%20I%20can%27t%20wait%20to%20watch%20Project%20G.O.A.T.S.%20on%20Shelby.tv!' class='popup' popup-width='600' popup-height='700'>Tumblr</a></div>");
											term.echo("\n\n");
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
					
					
					
					
				// ------------ (5) Share ------------
				} else if(command == '5') {
					term.clear();
					term.pause();
					//manual insertion b/c we want full HTML capability
					term.echo("> share g.o.a.t.s\n\n\n");
					$(".terminal-output").append("<div class='roomy'>tell friends with <a href='//www.facebook.com/sharer.php?u=http%3A%2F%2Fprojectgoats.com&t=I%20can%27t%20wait%20to%20watch%20Project%20G.O.A.T.S.%20on%20Shelby.tv!' class='popup' popup-width='640' popup-height='270'>Facebook</a></div>");
					$(".terminal-output").append("<div class='roomy'>tweet it out on <a href='//twitter.com/intent/tweet?url=http%3A%2F%2Fprojectgoats.com&text=I%20can%27t%20wait%20to%20watch%20%23projectGOATS%20%40onShelby' class='popup' popup-width='600' popup-height='250'>Twitter</a></div>");
					$(".terminal-output").append("<div class='roomy'>blog it on <a href='http://www.tumblr.com/share/link?url=http%3A%2F%2Fprojectgoats.com&name=WTF%20is%20Project%20G.O.A.T.S.%3F!&description=I%20can%27t%20wait%20to%20watch%20Project%20G.O.A.T.S.%20on%20Shelby.tv!' class='popup' popup-width='600' popup-height='700'>Tumblr</a></div>");
					term.echo("\n\n");
					echoMenu(term, function(){ term.resume(); });
					
					
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
			
			$(document).unbind('keydown', termLoader);
	}
};

$(document).bind('keydown', termLoader);


/**
	share via popup window
**/
$("a.popup").live('click', function(e){
	var width = $(this).attr('popup-width');
	var height = $(this).attr('popup-height');
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);

	window.open($(this).attr("href"), "popup", "menubar=no,toolbar=no,status=no,width="+width+",height="+height+",toolbar=no,left="+left+",top="+top);
	e.stopPropagation(); return false;
});