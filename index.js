"use strict"
// Peercache

const kad = require("kad")
const connect = require("./lib/network.js")

function selectTransport() {
  if (chrome) {
    return require("kad-transport-chrome-udp")
  } else {
    return kad.transports.UDP
  }
}

const me = {
  address: "127.0.0.1",
  port: parseInt(process.argv[2]),
}

const seed = {
  address: "127.0.0.1",
  port: parseInt(process.argv[3]),
}

const storage = new kad.storage.MemStore()

connect(me, seed, selectTransport(), storage).then(dht => {
  console.log("foo")
  dht.put("test", "x", () => {
    dht.get("test", (err, val) => {
      console.log(err, val)
    })
  })
}, e => { console.error(e) })
