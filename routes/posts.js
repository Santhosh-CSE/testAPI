const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
var uuid = require('uuid');
const { request } = require('express');
var myid = uuid.v4();
//console.log(myid);


// Gets Back all the Posts
router.get('/',async(req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

// Gets posts by uuid
router.get('/:uuid',async(req,res)=>{
    try{
        const posts = await Post.find({uuid: req.params.uuid});
        console.log(posts);
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//Submits a Post
router.post('/', async (req,res)=>{
    const post = new Post({
        uuid: myid,
        title: req.body.title,
        description: req.body.description
    });
    try{
        console.log(post)
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});
//Specific Post
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId)
    res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//Delete a Post
router.delete('/:postId', async (req,res)=>{
    try{
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
    } catch(err){
        res.json({message: err});
    }
});

//Update a Post
router.patch('/:postId', async(req,res)=> {
    try{
    const updatedPost = await Post.updateOne(
        {_id: req.params.postId }, 
        { $set: {title: req.body.title }}
    );
    res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;