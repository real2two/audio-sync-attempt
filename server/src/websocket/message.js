const enc = new TextDecoder('utf-8');

export default function(ws, message, isBinary) {
    if (isBinary === true) return;

    const { client_sent } = JSON.parse(enc.decode(new Uint8Array(message)));
    
    const server_recieved = performance.now();
    const offset_1 = server_recieved - client_sent;

    ws.send(JSON.stringify({
        server_sent: performance.now(),
        offset_1
    }))
}