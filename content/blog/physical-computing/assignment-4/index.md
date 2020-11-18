---
title: Week 6 Labs
date: "2020-10-18"
---

## Getting On Board Accelerometer 

It took me a bit to get the on board accelerometer to work. I tried following the first library, and was having difficulties. I tried using this [second tutorial](https://maker.pro/arduino/tutorial/how-to-use-the-arduino-nano-33-bles-built-in-imu) and had issues with using both the `Serial` and `IMU` parts of the library. After more soul searching, I found this [other tutorial](https://desertbot.io/blog/arduino-nano-33-iot-imu) which actually used the first library. As it turns out, however, I didn't need this at all for the first lab...

# Intro to Asynchronous Serial Communications

The [first lab](https://itp.nyu.edu/physcomp/lab-intro-to-serial-communications/) brought little trouble.

# Serial Input to P5.js
The [second lab](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/)

Following the tutorial I was able to get the sensor value printing to the screen. It took me a few tries -- I was using the wrong input value for my analog read, my output wire was connected to ground instead of the output, and I had problems with the code (I restarted and went through more carefully). After all this, I finally printed out the sensor value:

![sensor value](./sensor_value.jpg)

And with the addition of the graphing function I was able to get the pentiometer graph working as well!
![graph](./graph.gif)

# Serial output from P5.js
The [third lab](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/)
