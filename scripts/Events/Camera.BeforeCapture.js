var upLED = machine.getActuatorByName("LED Up");
var downLED = machine.getActuatorByName("LED Down");

if (camera.looking == Packages.org.openpnp.spi.Camera.Looking.Up) {
	upLED.actuate(true);
	downLED.actuate(false);
}
else if (camera.looking == Packages.org.openpnp.spi.Camera.Looking.Down) {
	upLED.actuate(false);
	downLED.actuate(true);
}