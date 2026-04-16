/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophia
 * Created on: Apr 2026
 * This program will send a message to the other microbit if within 10cm
*/

// setup
radio.setGroup(185)
basic.showIcon(IconNames.Happy)

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
