const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
var uuid = require('uuid');
const { request } = require('express');
const checkAuth = require('../middleware/check-auth');
const matchUser = require('../middleware/match');
const { email } = require('../middleware/fetch-data');
const { usersId } = require('../middleware/fetch-data');
//const { checkUser } = require('../middleware/check-auth');

/* // Gets Back all the Posts
router.get('/', checkUser, async(req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
}); */

// Gets posts by uuid
router.get('/:uuid', checkAuth, matchUser, async(req,res)=>{
    try{
        const posts = await Post.findOne({uuid: req.params.uuid});
        console.log(posts);
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//Submits a Post
router.post('/', checkAuth, async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        uuid: uuid.v4(),
        emailPost : email,
        usersIdPost : usersId
    });
    try{
        console.log(post)
    const savedPost = await post.save();
    res.json({uuid:savedPost.uuid})
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