import { video_experiences } from './videos.jsx'
import { randomArrValue, randomArrNumber, buildUrlPlaylist, buildLiveChannelsUrl, buildLiveVideo } from './helpers.jsx'
const { live_news_if_online, static_news, live_music, code_pen, entertainment_and_visuals } = video_experiences

const { spacexLiveChecker, podcastLiveChecker, youtubeLiveNowTechnology, youtubeLiveNowAnimals } = live_news_if_online
const { bbcTopStories, espnMustSee } = static_news
const { youtubeChilledCowByVideo, youtubeChilledCowByChannelId } = live_music
const { hyperSpace, enterTheMatrix, dnaSequence, trippy, pitfall } = code_pen
const { creedLoadscreens, assassinsCreedTrailers, lofiAnimes, historyOfArchitectureTestWillFailLaterOn, birds } = entertainment_and_visuals

const threatMaps = [
  'https://threatmap.fortiguard.com',
  'https://threatmap.bitdefender.com',
  'https://cybermap.kaspersky.com/widget',
  'https://www.deteque.com/live-threat-map',
  'https://www.fireeye.com/cyber-map/threat-map.html',
  'https://threatbutt.com/map'
]

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
  // entertainment/visuals
  // const threatMapExperienceUrl = randomArrValue(bestThreadMaps) 
  // const rickAndMortyUrl1 = 'https://www.adultswim.com/streams/rick-and-morty'
  // const rickAndMortyUrl2 = 'https://www.youtube.com/embed/agANj7n4_6I'
  // const youtubePlaylistExperienceUrl = randomArrValue(youtubeList)

  const CodePen = ({url}) => {
    return <iframe style={{position:'absolute', top:'-62px'}} src={url} width="100%" height="120%" frameBorder="0"/>
  }

  const GifExperience = () => (
    <div>
      <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
      <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
      <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
      <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
    </div>
  );

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

  const youtubeList = [ // 17,18,19,20,21 - 17
    buildUrlPlaylist(creedLoadscreens),
    buildUrlPlaylist(assassinsCreedTrailers),
    buildUrlPlaylist(lofiAnimes),
    buildUrlPlaylist(historyOfArchitectureTestWillFailLaterOn),
  ]

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

