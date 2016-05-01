"use strict"
const { Node, contacts } = require("kad")

function setupNode(localContact, transport, storage) {
  return new Node({
    transport: transport(localContact),
    storage,
  })
}

function connect(local, seed, transport, storage) {
  const localContact = contacts.AddressPortContact(local),
        seedContact = contacts.AddressPortContact(seed),
        node = setupNode(localContact, transport, storage)
  return new Promise((resolve, reject) => {
    node.connect(seed, err => {
      if (err) {
        reject(err)
      } else {
        resolve(node)
      }
    })
  })
}


module.exports = connect
