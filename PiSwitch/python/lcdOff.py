import RPi.GPIO as GPIO
import time


GPIO.setmode(GPIO.BOARD)

GPIO.cleanup()

GPIO.setup(12, GPIO.OUT)

GPIO.output(12,0)


GPIO.cleanup()
