const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req,res)=>{
    res.send('We are on posts');
});

router.post('/', (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    return post.save()
    .then(data =>{
        console.log(data);
        return res.send(data);
    })
    .catch(err => {
        console.log(err);
        res.json({ message : err});
    });
    
});

module.exports = router;