// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() { $('#main-welcome').hide().delay(250).fadeIn('slow'); }); 

document.onkeydown = function() {
	if(event.keyCode == 13) {
		
			$('#main-welcome').fadeOut('slow');
		
			$('#main').delay(1000).hide().fadeIn('slow').terminal(function(command, term) {

				// Launch Apply Section (1)
				if(command == '1') {
					term.clear();
					term.echo("Coming..");

					term.echo('\n\n\n\n--------------------------------------- \nShelby.tv / Project G.O.A.T.S.\n---------------------------------------\n\n Please Select An Option:\n\n 1. Apply  2. F.A.Q  3. About G.O.A.T.S.  4. View Applicants List  5. Launch Shelby.tv \n\n\n').css("font-size", "20px").hide().delay(750).fadeIn('slow');

				// Launch F.A.Q. Section (2)
				} else if(command == '2') {
					term.clear();
					term.echo('> F.A.Q.').hide().delay(600).fadeIn('slow')

					term.echo('\n\nWHAT IS PROJECT G.O.A.T.S.?').hide().delay(1500).fadeIn('slow');
					term.echo('Project G.O.A.T.S. is a top secret interview series powered by Shelby.tv that will take place during SXSW Interactive in Austin, TX on Saturday, March 10th. We are currently accepting applications, but only a limited number of spots are available, and we will not be able to accommodate everyone. You are not required to have a SXSW badge be eligible, but you will be responsible for your transportation to and accommodations in Austin.').hide().delay(2000).fadeIn('slow').addClass('faqtext');

					term.echo('\n\nWHO IS THE CELEBRITY GUEST?').hide().delay(2500).fadeIn('slow');
					term.echo('If you are selected, the identity of the celebrity guest will be revealed to you at the time of your interview.').hide().delay(3000).fadeIn('slow').addClass('faqtext');

					term.echo('\n\nWILL THE INTERVIEW BE FILMED AND PROMOTED FAR AND WIDE?').hide().delay(3500).fadeIn('slow');
					term.echo('Heck yes it will. ').hide().delay(4000).fadeIn('slow').addClass('faqtext');

					term.echo('\n\n--------------------------------------- \nShelby.tv / Project G.O.A.T.S.\n---------------------------------------\n\n Please Select An Option:\n\n 1. Apply  2. F.A.Q  3. About G.O.A.T.S.  4. View Applicants List  5. Launch Shelby.tv \n\n\n').css("font-size", "20px").hide().delay(5000).fadeIn('slow');

					// Launch About G.O.A.T.S. Section (3)
				} else if(command == '3') {

					term.clear();
					term.echo('> ABOUT G.O.A.T.S.').hide().delay(600).fadeIn('slow')
					term.echo('\n\nLOADING GOATS INFORMATION...').hide().delay(1500).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(1700).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(1900).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(2100).fadeIn('slow').css("font-size", "20px");

					// Load Random Link Within Array, Section (3)
					var ranLinks = new Array();
					ranLinks[0] = "http://lolgoats.com/"
					ranLinks[1] = "http://shel.tv/t1omt9"
					ranLinks[2] = "http://img.artknowledgenews.com/files2010jan/Robert-Rauschenberg-Monogram.jpg"

					function ranLink() {
						window.open('' + ranLinks[Math.floor(Math.random() * ranLinks.length)] + '')
					}


					window.setTimeout(ranLink, 3000);

					term.echo('\n\n\n\n--------------------------------------- \nShelby.tv / Project G.O.A.T.S.\n---------------------------------------\n\n Please Select An Option:\n\n 1. Apply  2. F.A.Q  3. About G.O.A.T.S.  4. View Applicants List  5. Launch Shelby.tv \n\n\n').css("font-size", "20px").hide().delay(2300).fadeIn('slow');

					// Launch Applicant List Section (4)
				} else if(command == '4') {
					term.clear();
					term.echo('> APPLICANT LIST').hide().delay(600).fadeIn('slow')
					term.echo('\n\Running "Applicant List"...').hide().delay(1500).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(1700).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(1900).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(2100).fadeIn('slow').css("font-size", "20px");
					term.echo('\nCarol   Mike    Greg   Marcia   Peter   Jan\nBobby   Cindy   Alice   Sam').hide().delay(2300).fadeIn('slow').css("font-size", "20px");

					term.echo('\n\n\n\n--------------------------------------- \nShelby.tv / Project G.O.A.T.S.\n---------------------------------------\n\n Please Select An Option:\n\n 1. Apply  2. F.A.Q  3. About G.O.A.T.S.  4. View Applicants List  5. Launch Shelby.tv \n\n\n').css("font-size", "20px").hide().delay(2600).fadeIn('slow');
					term.e
				} else if(command == '5') {
					term.clear();
					term.echo('> LAUNCH SHELBY.TV').hide().delay(600).fadeIn('slow')
					term.echo('\n\nLOADING SHELBY.TV...').hide().delay(1500).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(1700).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(1900).fadeIn('slow').css("font-size", "20px");
					term.echo('\n>').hide().delay(2100).fadeIn('slow').css("font-size", "20px");

					function shelbyLink() {
						window.open('http://www.shelby.tv')
					}


					window.setTimeout(shelbyLink, 3000);

					term.echo('\n\n\n\n--------------------------------------- \nShelby.tv / Project G.O.A.T.S.\n---------------------------------------\n\n Please Select An Option:\n\n 1. Apply  2. F.A.Q  3. About G.O.A.T.S.  4. View Applicants List  5. Launch Shelby.tv \n\n\n').css("font-size", "20px").hide().delay(2300).fadeIn('slow');

					// If any commands are entered outside of the above parameters
				} else {
					term.echo('Unknown Command: ' + command + ' ').css("color", "#870000")
				}
			}, {

				greetings : "Main Screen On..\n" + "> \n" + "We have signal! \n" + "> \n\n\n" + "--------------------------------------- \nShelby.tv / Project G.O.A.T.S.\n---------------------------------------\n\n" + "Please Select An Option:\n\n" + "1.  Apply \n" + "2.  F.A.Q \n" + "3.  About G.O.A.T.S. \n" + "4.  View Applicants List \n" + "5.  Launch Shelby.tv \n\n\n\n",
				prompt : 'Selection:',
				height : 600,
				width : 1200
			});
	}
}