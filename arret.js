var exec = require('child_process').exec;
exports.action = function(data, callback, config){

console.log('data._key: ' + data._key); 

switch (data._key) {
	case "redemarreOrdi":
			var path  = 'cmd /c shutdown /r';
			console.log(path);
			// Callback with TTS
			callback({'tts': "Je redémarre l'ordinateur immédiatement"});

			var child = exec(path, function (error, stdout, stderr) {
			if (error !== null) {
				console.log('exec error: ' + error);
			}
			});  
		break;
	case "arretOrdiImmediat":
			var path  = 'cmd /c shutdown /p';
			console.log(path);
			// Callback with TTS
			callback({'tts': "J'éteint l'ordinateur immédiatement"});

			var child = exec(path, function (error, stdout, stderr) {
			if (error !== null) {
				console.log('exec error: ' + error);
			}
			});  
		break;
	case "arretOrdi5min":
			var path  = 'cmd /c shutdown /t 300';
			console.log(path);
			// Callback with TTS
			callback({'tts': "J'éteint l'ordinateur dans cinq minutes"});

			var child = exec(path, function (error, stdout, stderr) {
			if (error !== null) {
				console.log('exec error: ' + error);
			}
			});  
		break;		

	default: 
			var path  = 'cmd /c shutdown /t 60';
			console.log(path);
			// Callback with TTS
			callback({'tts': "J'éteint l'ordinateur dans 1 minutes"});

			var child = exec(path, function (error, stdout, stderr) {
			if (error !== null) {
				console.log('exec error: ' + error);
			}
			});  
		break;

};

};
