import subprocess
import sys
import time
if sys.argv[1] == "ON":
        subprocess.call("sudo python /home/pi/Desktop/node/PiSwitch/PiSwitch/python/lcdOn.py", shell=True)
if sys.argv[1] == "OFF":
        subprocess.call("sudo python /home/pi/Desktop/node/PiSwitch/PiSwitch/python/lcdOff.py", shell=True)


