const db = require('../db')
const {ObjectId} = require("mongodb");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


exports.getAllUsers = async (req, res) => {
    try {
        const dbConnected = await db()
        const users = dbConnected.collection('users')
        const query = {}
        const options = {sort: {date: 1}}
        const queryResults = await users.find(query, options)
        queryResults.toArray((err, results) => {
            if (err) throw err
            if (results.length === 0) {
                res.json({"results": "no user found"})
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        res.json({"error": error})
    }

}
exports.getUser = async (req, res) => {
    try {
        const dbConnected = await db()
        const users = dbConnected.collection('users')
        const query = {_id: ObjectId(req.params.id)}
        const options = {sort: {date: 1}}
        const queryResults = await users.find(query, options)
        queryResults.toArray((err, results) => {
            if (err) throw err
            if (results.length === 0) {
                res.json({"results": "no user found"})
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        res.json({"error": error})
    }

}
exports.authentication = async (req, res) => {
    try {
        const dbConnected = await db()
        const users = dbConnected.collection('users')
        const query = {$and: [{email: {$eq: req.body['email']}}, {password: {$eq: req.body["password"]}}]}
        const queryResults = await users.find(query)
        queryResults.toArray((err, results) => {
            if (err) throw err
            if (results.length === 0) {
                res.json({"result": "no users found"})
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        res.json({"error": error})
    }

}

