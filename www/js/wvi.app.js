	function getFormData($form){
		var unindexed_array = $form.serializeArray();
		var indexed_array = {};
		$.map(unindexed_array, function(n, i){
			indexed_array[n['name']] = n['value'];
		});
		return indexed_array;
	}

	function sendWVIForm($form) {
		var to = 'sjones@lonestarlogos.com';
		//var data = getFormData($(this));
		var data = getFormData($form);

		var subject = "WVI For " + data["textinput_name"] + " [VIN: " + data["textinput_vin"] + "]";
		var body = "Driver: " + data["textinput_name"]
			+ "<br />Last 4 Of VIN #: " + data["textinput_vin"]
			+ "<br />Mileage: " + data["textinput_mileage"]
			+ "<br />[" + data["slider-flip-body"] + "] Visual Inspection for Exterior Damage / Leaks under the vehicle<br />"
			+ "<br />[" + data["slider-flip-wipers"] + "]  Check Windshield Wipers / Washers<br />"
			+ "<br />[" + data["slider-flip-mirrors"] + "]  Check Mirrors for Damage and Adjustments<br />"
			+ "<br />[" + data["slider-flip-lights"] + " ] Check Highbeams / Signal Lights / 4-Way Flashers / Tail Lights / Reverse Lights<br />"
			+ "<br />[" + data["slider-flip-fak"] + " ] Check First Aide Kit<br />"
			+ "<br />[" + data["slider-flip-ag"] + " ] Check Air Guage<br />"
			+ "<br />[" + data["slider-flip-fe"] + " ] Check Fire Extenguisher<br />"
			+ "<br />[" + data["slider-flip-horn"] + "]  Check Horn<br />"
			+ "<br />[" + data["slider-flip-ec"] + " ] Check Inside of Engine compartment for any leaks or loose items<br />"
			+ "<br />[" + data["slider-flip-o"] + " ] Oil Level<br />"
			+ "<br />[" + data["slider-flip-ps"] + "]  Power Steering Level<br />"
			+ "<br />[" + data["slider-flip-c"] + " ] Coolant Level<br />"
			+ "<br />[" + data["slider-flip-w"] + "]  Washer Fluid Level<br />"
			+ "<br />[" + data["slider-flip-t"] + " ] Transmission Fluid Level (Check Hot)<br />"
			+ "Left Front PSI: " + data["lf_tire"]
			+ "<br />Right Front PSI: " + data["rf_tire"]
			+ "<br />Left Rear PSI: " + data["lr_tire"]
			+ "<br />Left Rear Inner PSI: " + data["lri_tire"]
			+ "<br />Right Rear PSI: " + data["rr_tire"]
			+ "<br />Right Rear Inner PSI: " + data["rri_tire"]
			+ "<br /><br />"
			+ "<strong>Trailer:<br />"
			+ "[" + data["slider-flip-tlights"] + "] Trailer lights in good working condition<br />"
			+ "<br />Left Front PSI: " + data["tlf_tire"]
			+ "<br />Left Front Inner PSI: " + data["tlfi_tire"]
			+ "<br />Right Front PSI: " + data["trf_tire"]
			+ "<br />Right Front Inner PSI: " + data["trfi_tire"]
			+ "<br />Left Rear PSI: " + data["tlr_tire"]
			+ "<br />Left Rear Inner PSI: " + data["tlri_tire"]
			+ "<br />Right Rear PSI: " + data["trr_tire"]
			+ "<br />Right Rear Inner PSI: " + data["trri_tire"];
		
		cordova.plugins.email.open({
			to: to,
			subject: subject,
			body:    body
		});
		
		return 'true';
	}