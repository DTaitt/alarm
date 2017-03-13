$(document).ready(function(){

// this updates the display time every second
	setInterval(updateDisplayTime, 1000);
// this updates the current time every second
	setInterval(updateCurrentTime, 1000)
	
	var globalCurrentTime = [];

// this updates the current time and pushes it to the globalCurrentTime array so that it can be used by the checkTime function
	function updateCurrentTime () {

		globalCurrentTime = [];

		var date = new Date();

			var hours = date.getHours();
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var ampm = "AM";

			if (month < 10) {
				month = "0" + month;
			}

			if (hours > 11) {
				ampm = "PM";
			}

			if (ampm === "PM") {
				switch(hours) {
					case 200 > 1:
					console.log("its a 1")
				}
			}

			if (ampm === "AM") {
				if (hours < 10) {
					hours = "0" + hours;
				}
			}  else if (ampm = "PM") {
					if (hours > 12) {
						hours -=12;
					}
				}

			if(minutes < 10) {
				minutes = "0" + minutes;
			}

			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			if (ampm === "PM") {
				hours += 12;
			}


	//this displays the current time on a 24 hour clock

		var currentTime = year + "-" + month + "-" + day + "T" + hours + ":" + minutes;

		globalCurrentTime.push(currentTime);

	}

// this function updates the display time on the clock 

	function updateDisplayTime() {
		var date = new Date();

		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var ampm = "AM";

		if (hours > 11) {
			ampm = "PM";
		}

		if (hours > 12) {
			hours -=12;
		}

		if(minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		var displayTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

		$("#displayTime").html(displayTime)
	}

// this function sets the alarm time and the check time function checks to see when it equals the alarm time

	function setAlarm() {

		//this is the alarm time on a 24 hour clock
		var alarmTime = $("#alarmTimeInput").val()

		setInterval(checkTime, 1000);

		function checkTime () {

			if (alarmTime === globalCurrentTime[0]) {
				$("#alarmTone")[0].play();
			}

		}
		console.log(alarmTime)
		console.log(globalCurrentTime)
	}

// this function stops the audio
	function stopAudio() {
		$("#alarmTone")[0].pause();
		
		setInterval(resetAudio, 1)

		function resetAudio () {
			$("#alarmTone")[0].currentTime = 0;
		}

	}


	$("#alarmTimeSave").click(setAlarm)
	$("#snooze").click(stopAudio)

});
