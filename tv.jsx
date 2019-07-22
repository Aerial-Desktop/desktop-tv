import { spacexLiveChecker } from './videos.jsx'
export const refreshFrequency = 5000 // ms

export const className = `
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  width:100%;
  height:100%;
  border:none;
  margin:0;
  padding:0;
  overflow:hidden;
  z-index:-999999;
`

export const render = () => {
  // news related

  // live news if online
  const podcastLiveChecker = buildLiveChannelsUrl('UCzQUP1qoWDoEbmsQxvdjxgQ')
  const youtubeLiveNowTechnology = buildUrlPlaylist('PL57quI9usf_th5iJjjhXcRzlzibHUgYMA')
  const youtubeLiveNowAnimals = buildUrlPlaylist('PLIFqWCuxNyoj8HAwNYOlqdDL52pNsbvKV')

  // static news updated daily
  const bbcTopStories = buildUrlPlaylist('PLS3XGZxi7cBVNadbxDqZCUgISvabEpu-g')
  const espnMustSee = buildUrlPlaylist('PLn3nHXu50t5xa7-HYnJpzN5cxkLYgFP_V')

  // entertainment/visuals
  // const threatMapExperienceUrl = randomArrValue(bestThreadMaps) 
  // const rickAndMortyUrl1 = 'https://www.adultswim.com/streams/rick-and-morty'
  // const rickAndMortyUrl2 = 'https://www.youtube.com/embed/agANj7n4_6I'
  // const youtubePlaylistExperienceUrl = randomArrValue(youtubeList)

  // music
  const youtubeChilledCowByVideo = buildLiveVideo('hHW1oY26kxQ')
  const youtubeChilledCowByChannelId = buildLiveChannelsUrl('UCSJ4gkVC6NrvII8umztf0Ow')

  const hyperSpace = 'https://codepen.io/yuanchuan/full/dqrdow'
  const enterTheMatrix = 'https://codepen.io/yuanchuan/full/YoqWeR'
  const dnaSequence = 'https://codepen.io/yuanchuan/full/pBrMNQ'
  const trippy = 'https://codepen.io/yuanchuan/full/wZJqNK'
  const pitfall = 'https://codepen.io/dsenneff/full/RqYONv'

  const CodePen = ({url}) => {
    return <iframe style={{position:'absolute', top:'-62px'}} src={url} width="100%" height="120%" frameBorder="0"/>
  }

  // const likedVideos = 'LLSCWFSK6rEm7Pg0yxD61pOA'
  const creedLoadscreens = 'PLZbIo_dYB77tFXtSy6nZjnRyiH_Hwqe_B'
  const assassinsCreedTrailers = 'PLOcTEsKp5qpV7pbtiGeLAjlmD086bqymr'
  const lofiAnimes = 'PLZbIo_dYB77tkPQCgwRMq9a_RRkq0UXZ3'
  const historyOfArchitectureTestWillFailLaterOn = 'PL7_CkZ72ky5P1aPgHTbLBZbcddN_48F44'
  const birds='PLOh2AUhKQzaNeE-vXiH1SMeJyTdRT84dr'

  const codePenArray = [ // 0,1,2,3,4 - 0
    hyperSpace,
    enterTheMatrix,
    dnaSequence,
    trippy,
    pitfall
  ];

  const bestThreadMaps = [ // 5,6,7 - 5
    'https://threatmap.fortiguard.com',
    'https://cybermap.kaspersky.com/widget',
    'https://threatbutt.com/map'
  ]

  const videoExperienceList = [ // 8,9,10,11,12,13,14,15,16 - 8
    spacexLiveChecker,
    podcastLiveChecker,
    youtubeLiveNowTechnology,
    bbcTopStories,
    espnMustSee,
    randomArrValue(bestThreadMaps),
    youtubeChilledCowByVideo,
    youtubeChilledCowByChannelId
  ];
  //youtubeLiveNowAnimals,

  const youtubeList = [ // 17,18,19,20,21 - 17
    buildUrlPlaylist(creedLoadscreens),
    buildUrlPlaylist(assassinsCreedTrailers),
    buildUrlPlaylist(lofiAnimes),
    buildUrlPlaylist(historyOfArchitectureTestWillFailLaterOn),
  ]
  //buildUrlPlaylist(birds),

  const accum1 = codePenArray.length
  const accum2 = accum1 + bestThreadMaps.length
  const accum3 = accum2 + videoExperienceList.length
  const accum4 = accum3 + youtubeList.length

  const fullArrayLength = accum4
  const randomArrayLength = randomArrNumber(fullArrayLength)
  // perform the playllist validation here.

  return (
    <iframe src={spacexLiveChecker} width="100%" height="100%" frameBorder="0"/>
    // <iframe src={buildUrlPlaylist(lofiAnimes)} width="100%" height="100%" frameBorder="0"/>
    // <CodePen url={enterTheMatrix} />
    // <iframe src={buildUrlPlaylist(lofiAnimes)} width="100%" height="100%" frameBorder="0"/>
    // <iframe src={buildUrlPlaylist(lofiAnimes)} width="100%" height="100%" frameBorder="0"/>
//     <span>
//     {
//       randomArrayLength < accum1 ?
//         <CodePen url={ codePenArray[randomArrayLength] }/>
//       : randomArrayLength < accum2 ?
//         <iframe src={bestThreadMaps[randomArrayLength-accum1]} width="100%" height="100%" frameBorder="0"/>
//       : randomArrayLength < accum3 ?
//         <iframe src={videoExperienceList[randomArrayLength-accum2]} width="100%" height="100%" frameBorder="0"/>
//       :
//         <iframe src={youtubeList[randomArrayLength-accum3]} width="100%" height="100%" frameBorder="0"/>
//     }
//     </span>
  )
}

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

const threatMaps = [
  'https://threatmap.fortiguard.com',
  'https://threatmap.bitdefender.com',
  'https://cybermap.kaspersky.com/widget',
  'https://www.deteque.com/live-threat-map',
  'https://www.fireeye.com/cyber-map/threat-map.html',
  'https://threatbutt.com/map'
]

const GifExperience = () => (
  <div>
    <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
    <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
    <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
    <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
  </div>
);
