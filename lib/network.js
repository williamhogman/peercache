"use strict"
const { Node, transports, contacts } = require("kad")

function setupNode(localContact, storage) {
  return new Node({
    transport: transports.UDP(localContact),
    storage,
  })
}

function connect(local, seed, storageDriver) {
  const localContact = contacts.AddressPortContact(local),
        seedContact = contacts.AddressPortContact(seed),
        node = setupNode(localContact, storageDriver)
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
