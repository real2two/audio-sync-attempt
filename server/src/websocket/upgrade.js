export default function(res, req, context) {
    res.upgrade(
        {},

        req.getHeader('sec-websocket-key'),
        req.getHeader('sec-websocket-protocol'),
        req.getHeader('sec-websocket-extensions'),
        
        context
    );
}