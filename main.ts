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
    } else {
    	
    }
})
basic.forever(function () {
	
})
