var upLED = machine.getActuatorByName("LED Up");
var downLED = machine.getActuatorByName("LED Down");

if (upLED) {
	upLED.actuate(false);
	//downLED.actuate(true);
}
//if (downLED) downLED.actuate(false);
