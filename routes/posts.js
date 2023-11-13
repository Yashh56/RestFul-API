const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all the posts
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message:error})
    }
})

// Submit a post
router.post('/', async (req,res)=>{
    console.log(req.body);
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message:err});
    }
})

// Get a specific post
router.get('/:postId',async(req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message:error})
    }
})

// Delete a specific post
router.delete('/:postId',async(req,res)=>{
    try {
        const post = await Post.findByIdAndDelete(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message:error})
    }
})

// Update a specific post
router.patch('/:postId',async(req,res)=>{
    try {
        const updatePostTitle = await Post.findByIdAndUpdate(req.params.postId,{$set:{title:req.body.title}});
        const updatePostDescription = await Post.findByIdAndUpdate(req.params.postId,{$set:{description:req.body.description}});
        res.json(updatePostTitle);
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router;