WatRide.factory('TripFactory', function(){

	var driverHints = ['Driving','Going','driving','going'];
	var fromHints = ['From','from','Driving','Pickup','up','pickup'];
	var toHints = ['to','>','->','-->','--->','=>','==>','===>','Drop','Dropoff','drop','dropoff','dropping'];
	var timeHints = ['at','am','pm'];
	var dateHints = ['tommorow','tmrw','tomorow','monday','tuesday','wednesday','thursday','friday','saturday','sunday','today','tonight'];
	var priceHints = ['$'];

	var driverResult;
	var fromResult;
	var toResult;
	var dateResult;
	var timeResult;
	var priceResult;
	var phoneResult;

	var words = [];

	return {
		parseTrip: function(trip){
			var self = this;
			words.length = 0;				
			words = trip.message.split(" ");

			self.findDriver();
			self.findFrom();
			self.findTo();
			self.findDate();
			self.findTime();
			self.findPrice();
			self.findPhone();

			var refined_trip = {
				driverResult: driverResult,
				fromResult: fromResult,
				toResult: toResult,
				dateResult: dateResult, 
				timeResult: timeResult,
				priceResult: priceResult,
				phoneResult: phoneResult,
			}
			return refined_trip;
		},
		findDriver: function(){
			for(var w = 0; w<words.length; w++){
				for(var dh = 0; dh<driverHints.length; dh++){
					if(words[w] == driverHints[dh]){
						driverResult = true;
					}
				}
			}
			var w = 0;
		},
		findFrom: function(){
			// leaving from..
			for(var w = 0; w<words.length; w++){
				for(var fh = 0; fh<fromHints.length; fh++){
					if(words[w] == fromHints[fh]){
						fromResult = words[w+1];
					}
				}
			}
			var w = 0;
		},
		findTo: function(){
			// going to...
			for(var w = 0; w<words.length; w++){
				for(var th = 0; th<toHints.length; th++){
					if(words[w] == toHints[th]){
						toResult = words[w+1];
					}
				}
			}
			var w = 0;
		},
		findDate: function(){
			// day date
			for(var w = 0; w<words.length; w++){
				for(var dth = 0; dth<dateHints.length; dth++){
					if(words[w] == dateHints[dth]){
						dateResult = words[w];
					}
				}
			}
			var w = 0;
		},
		findTime: function(){
			// hour time
			for(var w = 0; w<words.length; w++){
				for(var tmh = 0; tmh<timeHints.length; tmh++){
					if(words[w].includes(timeHints[tmh])){
						timeResult = words[w];
					}
				}
			}
			var w = 0;
		},
		findPrice: function(){
			// price
			for(var w = 0; w<words.length; w++){
				for(var ph = 0; ph<priceHints.length; ph++){
					if(words[w].includes(priceHints[ph])){
						priceResult = words[w];
					}
				}
			}
			var w = 0;
		},
		findPhone: function(){
			// find the phone number
		}
	}

});