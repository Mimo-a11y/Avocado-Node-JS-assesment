const req = require('express/lib/request');
const db = require('../models');

//creating main model
const Video = db.Video;

//get the Video page
const getVideoPage = async (req, res) => {
    const videos = await Video.findAll();
    return res.status(200).render('homePage', {videos: videos});
}

//add a video
const postVideo = async (req, res) => {
    let videoDetail = {
        Name: req.body.videoName,
        Description: req.body.desc,
        Active: req.body.active
    }
    const addVideo = await Video.create(videoDetail);
    const videos = await Video.findAll();
    return res.status(200).render('homePage', {videos: videos});
}


//get video update page
const getUpdatePage = async (req, res) => {
    const videoDetail = await Video.findOne({
        where: {V_ID: req.params.vid}
    })
 return res.status(200).render('updateVideo', {updateDetail: videoDetail});
}

//update video details
const updateVideoDetail = async(req,res) => {
    let videoDetail = {
        Name: req.body.videoName,
        Description: req.body.desc,
        Active: req.body.active
    }
    const updateVideo = await Video.update(videoDetail, {where: {V_ID: req.params.id}});
      const videos = await Video.findAll();
      return res.status(200).render('homePage',  {videos: videos});
}

//delete a video
const deleteVideo = async(req,res) => {
    const deleteVideo = await Video.destroy({where: {V_ID: req.params.id}});
      const videos = await Video.findAll();
      return res.status(200).render('homePage',  {videos: videos});
}

module.exports = {
    getVideoPage,
    postVideo,
    getUpdatePage,
    updateVideoDetail,
    deleteVideo
}