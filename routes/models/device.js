/**
 * @typedef Device
 * @property {integer} id.required - Device id
 * @property {string} name.required - Device name
 */
class Device {
    constructor(id, name) {
        this.id = id
        this.name = name        
    }
}

module.exports = Device