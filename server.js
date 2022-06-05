const Express = require('express');
const videoController = require('./Controller/videoController');
const videoListController = require('./Controller/videoListController');

//instanciating express app
const app = new Express();

//middlewares
app.use(Express.json());
app.use(Express.urlencoded({
  extended: true
}));

//handlebars configuration
app.set("view engine", "hbs");
app.set("views", "./Views");

//exposing APIs
app.get('/', videoController.getVideoPage);
app.get('/videoLists', videoListController.getVideoListPage);
app.post('/addVideos', videoController.postVideo);
app.get('/video/Update/:vid', videoController.getUpdatePage);
app.post('/updateVideos/:id', videoController.updateVideoDetail);
app.get('/video/delete/:id', videoController.deleteVideo);
app.post('/addVideosList', videoListController.postVideoList);
app.get('/videoList/Update/:vlid', videoListController.getUpdatePageForVideoList);
app.post('/updateVideoLists/:id', videoListController.updateVideoListDetail);
app.get('/videoList/delete/:id', videoListController.deleteVideoList);

//server
app.listen(3000, () => {
    console.log("server is running on port 3000");
  })