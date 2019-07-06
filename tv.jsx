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
  z-index:999999;
`

export const render = () => (
  <iframe src="https://threatmap.fortiguard.com" width="100%" height="100%" frameBorder="0"/>
)

/* 
  Threat Maps: 
// https://threatmap.fortiguard.com
// https://threatmap.bitdefender.com
// https://cybermap.kaspersky.com/widget
// https://www.deteque.com/live-threat-map
// https://www.fireeye.com/cyber-map/threat-map.html
// https://threatbutt.com/map

*/

// const Gifs = () => (
//   <div>
//     <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
    
//     <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
//     <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
    
//     <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
//   </div>
// );
