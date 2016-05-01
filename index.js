// Peercache

const connect = require("./lib/network.js")

const me = {
  address: "127.0.0.1",
  port: parseInt(process.argv[2]),
}

const seed = {
  address: "127.0.0.1",
  port: parseInt(process.argv[3]),
}

connect(me, seed, new require("kad").storage.MemStore()).then(dht => {
  console.log("foo")
  dht.put("test", "x", () => {
    dht.get("test", (err, val) => {
      console.log(err, val)
    })
  })
}, e => { console.error(e) })
