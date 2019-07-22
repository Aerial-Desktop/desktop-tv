const randomArrValue = (arr) =>
  arr[
    Math.floor((Math.random() * arr.length))
  ];

const randomArrNumber = (num) =>
  Math.floor((Math.random() * num));

const buildUrlPlaylist = (plist) =>
  'https://www.youtube.com/embed/?list=' + plist + '&index=1&rel=0&autoplay=1'
const buildLiveChannelsUrl = (channel) =>
  'https://www.youtube.com/embed/live_stream?channel=' + channel + '&autoplay=1'
const buildLiveVideo = (plist) =>
  'https://www.youtube.com/embed/' + plist + '?index=1&rel=0&autoplay=1'
  
module.exports = { randomArrValue, randomArrNumber, buildUrlPlaylist, buildLiveChannelsUrl, buildLiveVideo }