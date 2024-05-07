const { addMessage, getAllMessage } = require("../controllers/messagesController");
  
  const router = require("express").Router();
  // checking
  
  router.post("/addmsg/", addMessage);
  router.post("/getmsg/", getAllMessage);
  
  module.exports = router;
  