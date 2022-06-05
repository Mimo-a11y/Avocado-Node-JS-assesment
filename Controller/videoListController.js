const req = require('express/lib/request');
const db = require('../models');

//creating main model
const VideoList = db.VideoList;
const Video = db.Video;

//get the Video list page
const getVideoListPage = async (req, res) => {
    const videosID = await Video.findAll({
        attributes: ['V_ID','Name']
    });
    const videosList = await VideoList.findAll();
    return res.status(200).render('videoLists', {videos: videosList, videoID: videosID});
}

//add a video list
const postVideoList = async (req, res) => {
    let videoDetail = {
        Name: req.body.videoListName,
        Link: req.body.link,
        VideoVID: req.body.vidID
    }
    const videosID = await Video.findAll({
        attributes: ['V_ID','Name']
    });
    const addVideo = await VideoList.create(videoDetail);
    const videos = await VideoList.findAll();
    return res.status(200).render('videoLists', {videos: videos, videoID: videosID});
}

//get update page for video list
const getUpdatePageForVideoList = async (req, res) => {
    const videoListDetail = await VideoList.findOne({
        where: {VL_ID: req.params.vlid}
    });
    const videosID = await Video.findAll({
        attributes: ['V_ID','Name']
    });
 return res.status(200).render('videoListsUpdate', {updateDetail: videoListDetail, videoID: videosID});
}

//update video list details
const updateVideoListDetail = async(req,res) => {
    let videoListDetail = {
        Name: req.body.videoListName,
        Link: req.body.link,
        VideoVID: req.body.vidID
    }
    const updateVideoList = await VideoList.update(videoListDetail, {where: {VL_ID: req.params.id}});
      const videos = await VideoList.findAll();
      return res.status(200).render('videoLists',  {videos: videos});
}

//delete a video list
const deleteVideoList = async(req,res) => {
    const deleteVideo = await VideoList.destroy({where: {VL_ID: req.params.id}});
      const videos = await VideoList.findAll();
      return res.status(200).render('videoLists',  {videos: videos});
}
module.exports = {
    getVideoListPage,
    postVideoList,
    getUpdatePageForVideoList,
    updateVideoListDetail,
    deleteVideoList
}
