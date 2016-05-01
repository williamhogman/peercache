"use strict"
// Peercache

const kad = require("kad")
const connect = require("./lib/network.js")

const me = {
  address: "127.0.0.1",
  port: parseInt(process.argv[2]),
}

const seed = {
  address: "127.0.0.1",
  port: parseInt(process.argv[3]),
}

const storage = new kad.storage.MemStore(),
      transport = kad.transports.UDP

connect(me, seed, transport, storage).then(dht => {
  console.log("foo")
  dht.put("test", "x", () => {
    dht.get("test", (err, val) => {
      console.log(err, val)
    })
  })
}, e => { console.error(e) })
