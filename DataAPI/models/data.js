const { Message, Notification, Performance } = require('../schemas')

const data = {
    saveMessage : (req, res) => {
        const messageData = new Message({
            date: req.body.date,
            message: req.body.message,
            type: 'message'
        })
        messageData.save()
        .then(saved => res.status(201).json(saved))
        .catch(e => res.status(500).json(e));
    },
    
    saveNotification : (req, res) => {
        const messageData = new Notification({
            date: req.body.date,
            message: req.body.message,
            type: 'notification',
            category : req.body.category
        })
        messageData.save()
        .then(saved => res.status(201).json(saved))
        .catch(e => res.status(500).json(e));
    },
    
    savePerformance : (req, res) => {
        const performanceData = new Performance({
            date : req.body.date,
            targetTime : req.body.targetTime,
            workTime : req.body.workTime,
            achievement : req.body.achievement,
            overtime : req.body.overtime
        })
        performanceData.save()
        .then(saved => res.status(201).json(saved))
        .catch(e => res.status(500).json(e));
    },
    
    getMessage : (req, res) => {
        Message.find()
        .exec()
        .then(data => res.status(200).json({data : data}))
        .catch(e => res.status(500).json(e));
    },
    
    getNotification : (req, res) => {
        Notification.find()
        .exec()
        .then(data => res.status(200).json({data : data}))
        .catch(e => res.status(500).json(e));
    },
    
    getPerformance : (req, res) => {
        const month = Number(req.query.m) || new Date().getMonth()
        const year = Number(req.query.y) || new Date().getFullYear()
            Performance.aggregate([
                {
                    $project: { 
                        "date": 1,
                        "targetTime": 1,
                        "workTime": 1,
                        "achievement": 1,
                        "overtime": 1, 
                        "_id" : 0
                    }
                },
                {$match: { "date": {"$gte": new Date(year, month, 1), "$lt": new Date(year, month+1, 1)}}},
                {$sort: { date: 1 }}
            ])
            .exec()
            .then(data => res.status(200).json({data : data}))
            .catch(e => res.status(500).json(e));
        
        
    }, 
    
    getPerformancebyYear : (req, res) => {
        const startDate = Number(req.query.sd) || 0
        const endDate = Number(req.query.ed) || 0
        const month = Number(req.query.m) || new Date().getMonth()
        const year = req.query.year || new Date().getFullYear()
        if (startDate && endDate && month) {
            Performance.aggregate([
                {$match: { "date": {"$gte": new Date(year, month-1, startDate), "$lt": new Date(year, month-1, endDate+1)}}},
                { $sort : { date : 1 } }
            ])
            .exec()
            .then(data => res.status(200).json({data : data}))
            .catch(e => res.status(500).json(e));
        } else {   
            Performance.aggregate([
                {$match: { "date": {"$gte": new Date(year, 1, 1), "$lt": new Date(year+1, 1, 1)}}},
                { $sort : { date : 1 } }
            ])
            .exec()
            .then(data => res.status(200).json({data : data}))
            .catch(e => res.status(500).json(e));
        }
    },
    
    getPerformancebyYearforChart : (req, res) => {
        const year = req.query.year || new Date().getFullYear()
        Performance.aggregate([
            {$match: { "date": {"$gte": new Date(year, 1, 1), "$lt": new Date(year+1, 1, 1)}}},
            { $group:
                {
                    _id: { month: { $month: "$date"}, year: { $year: "$date" } },
                    achievement: {$sum: "$achievement"},
                    count: { $sum: 1 }
                }
            },
            { $sort : { _id : 1 } }
        ])
        .exec()
        .then(data => res.status(200).json({data : data}))
        .catch(e => res.status(500).json(e));
    }
}
module.exports = data