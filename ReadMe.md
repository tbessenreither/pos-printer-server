# creates a pos printer server that can run on a raspberry pi

## First of

This is a hacky project i've done to quickly send plain old text to a pos printer from a multitude of devices.  
It was never intended to be save or "nice". Don't expect it to be updated any time soon as it does everything i need it to do.
If you'd like a feature feel free to make use of a pull request. I'll add you as a contributor here.

## Env Vars

| Variable           | Default        | Description |
| ------------------ | -------------- | ----------- |
| TCP_PORT           | 81             | The port the TCP server will be listening |
| HTTP_PORT          | 80             | The port of the HTTP API |
| API_KEY            | 'pos-server'   | The api key to be allowed to send stuff |
| USB_DEVICE         | '/dev/usb/lp0' | The printer device the script tries to connect to |
| MESSAGE_MAX_LENGTH | 1000           | The maximum length of a message to be printed |

## Sidenodes

Yes i know that i missed a real opertunity to call it printerface.