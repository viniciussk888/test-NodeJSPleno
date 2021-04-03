'use strict'
const fs = require('fs')

class PointController {
    async index({ response }) {

    const points = JSON.parse(fs.readFileSync('App/Utils/poi.json', 'utf8'))

    if(points.length===0){
        return response.status(500).json({message:"Internal error on read json points"});
    }
    return response.status(200).json(points);
    }
}

module.exports = PointController
