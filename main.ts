radio.onReceivedString(function (receivedString) {
    serial.writeString(receivedString)
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    radio.sendNumber(parseFloat(cmd))
    basic.showString(cmd)
})
let cmd = ""
radio.setGroup(1)
basic.forever(function () {
	
})
