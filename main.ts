IR.IR_callbackUser(function (message) {
    if (message == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (message == 4) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (message == 6) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    } else if (message == 9) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else if (message == 5) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (message == 16) {
        maqueen.servoRun(maqueen.Servos.S1, 0)
    } else if (message == 17) {
        maqueen.servoRun(maqueen.Servos.S1, 90)
    } else if (message == 18) {
        maqueen.servoRun(maqueen.Servos.S2, 0)
    } else if (message == 20) {
        maqueen.servoRun(maqueen.Servos.S2, 180)
    } else {
    	
    }
})
basic.forever(function () {
	
})
