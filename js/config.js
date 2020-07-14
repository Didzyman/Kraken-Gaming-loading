/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/kraken gaming official (1).png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Kraken Gaming UK";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"
You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/Loading1.jpg",
	"backgrounds/images/Loading2.jpg",
	"backgrounds/images/Loading3.jpg",
	"backgrounds/images/Loading4.jpg",
	"backgrounds/images/Loading5.jpg",
	"backgrounds/images/Loading6.jpg",
	"backgrounds/images/Loading7.jpg",
	"backgrounds/images/Loading8.jpg",
	"backgrounds/images/Loading9.jpg",
	"backgrounds/images/Loading10.jpg",
	"backgrounds/images/Loading11.jpeg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 4000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "FnhuJsMua28", name: "The Ashes Will Be Woken"},
	{youtube: "C0li4N9EQY4", name: "Death Mask"},
	{youtube: "-pJCSfJL5FI", name: "I'M NOT BURIED YET"},
	{youtube: "NzZ421uaX-Q", name: "Desolation"},
	{youtube: "FT8nG9hv168", name: "Your God Is Dead"},
	{youtube: "9i5XDYY-tSc", name: "ENTER THE SUN"},


];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 10;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Enjoy the server",
"Thanks for joining us!",
"Respect Staff and other players",
"Don’t RDM",
"Don’t Ghost",
"Do not kill afk players",
"Don't mic spam or spam in chat",
"No claiming rooms or areas",
"Don't propkill, proppush, propsurf",
"Don't troll, shit talk or anything like that",
"STAFFS DECISION IS FINAL"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
