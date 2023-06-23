def on_ir_callbackuser(message):
    if message == 1:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
    elif message == 4:
        maqueen.motor_stop(maqueen.Motors.M1)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    elif message == 6:
        maqueen.motor_stop(maqueen.Motors.M2)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    elif message == 9:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 255)
    elif message == 5:
        maqueen.motor_stop(maqueen.Motors.ALL)
    elif message == 16:
        maqueen.servo_run(maqueen.Servos.S1, 0)
    elif message == 17:
        maqueen.servo_run(maqueen.Servos.S1, 90)
    elif message == 18:
        maqueen.servo_run(maqueen.Servos.S2, 0)
    elif message == 20:
        maqueen.servo_run(maqueen.Servos.S2, 180)
    else:
        pass
IR.IR_callbackUser(on_ir_callbackuser)

def on_forever():
    pass
basic.forever(on_forever)
