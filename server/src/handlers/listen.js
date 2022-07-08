import 'dotenv/config';
import { App } from 'uWebSockets.js';

import upgrade from '../websocket/upgrade.js';
import open from '../websocket/open.js';
import message from '../websocket/message.js';
import close from '../websocket/close.js';

App()
    .ws('/', {
        idleTimeout: 60,
        maxBackpressure: 1024,
        maxPayloadLength: 512,

        upgrade,
        open,
        message,
        close
    })
    .listen(parseFloat(process.env.PORT), listenSocket => {
        if (listenSocket) {
            console.log(`The website started at port ${process.env.PORT}.`);
        } else {
            console.log(`An error has occured while trying to listen the port.`);
        }
    });