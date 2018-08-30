/**
 * Created by Andreas on 08/04/2018.
 */
"use strict";

class WebsocketClient {

    init() {
        this._config = {
            port: 8080
            , host: "localhost"
            , path: "ws/testEndpoint"
            , schema: "ws"
        }
        this._websocket = undefined;
    }

    constructor(config) {
        this.init();
        if (config.port !== undefined) {
            this._config.port = config.port;
        }
        if (config.host !== undefined) {
            this._config.host = config.host;
        }
        if (config.path !== undefined) {
            this._config.path = config.path;
        }
        if (config.schema !== undefined) {
            this._config.schema = config.schema;
        }
    }

    connect() {
        const url = this._config.schema
            + "://" + this._config.host
            + ":" + this._config.port
            + this._config.path;
        var _self = this;
        console.log("URL: " + url);

        this._websocket = new WebSocket(url)

        this._websocket.onopen = (event) => {
            this.onOpen(event);

        };

        this._websocket.onerror = (event) => {
            this.onError(event);

        };

        this._websocket.onclose = (event) => {
            this.onClose(event);

        };

        this._websocket.onmessage = (event) => {
            this.onMessage(event)
        }
    }


    onError(event) {
        console.log("onOpen", event);
    }

    onClose(event) {
        console.log("onOpen", event);
    }

    onOpen(event) {
        console.log("onOpen", event);
    }

    onMessage(event) {
        console.log("onMessage", event);
    }

    sendMessage(message) {
        this._websocket.send(message)
    }

    streamCam() {
        var _self = this;
        var request = {
            "javaType": "de.litexo.raspi.server.model.request.StreamRequest",
            "deviceName": _self._deviceName,
            "camName": _self._camName
        }
        this._websocket.send(JSON.stringify(request));
    }
}

export default WebsocketClient;


