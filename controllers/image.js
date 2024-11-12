const Clarifai = require('clarifai');
const app = new Clarifai.App({
    apiKey: process.env.API_CLARIFAI  //ENV VARIABLE
});
const handleApiCall = (req, res) => {
    // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
    // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
    // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
    // If that isn't working, then that means you will have to wait until their servers are back up. 
  
    app.models.predict('face-detection', req.body.input)
      .then(data => {
        res.json(data);
      })
      .catch(err => res.status(400).json('unable to work with API'))
}



// const returnClarifaiRequestOptions = (imageUrl) => {
//     // Your PAT (Personal Access Token) can be found in the Account's Security section
//     const PAT = 'c98a5808a0914fa1adaeda4a2feb6fb0';
//     // Specify the correct user_id/app_id pairings
//     // Since you're making inferences outside your app's scope
//     const USER_ID = 'ahmetarslan';
//     const APP_ID = 'SmartBrain';
//     // Change these to whatever model and image URL you want to use
//     //const MODEL_ID = 'face-detection';
//     const IMAGE_URL = imageUrl;

//     const raw = JSON.stringify({
//       "user_app_id": {
//           "user_id": USER_ID,
//           "app_id": APP_ID
//       },
//       "inputs": [
//           {
//               "data": {
//                   "image": {
//                       "url": IMAGE_URL
//                   }
//               }
//           }
//       ]
//   });
  
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Authorization': 'Key ' + PAT
//       },
//       body: raw
//     };
  
//     return requestOptions;
// }

// const handleApiCall = (req, res) => {
//     fetch("https://api.clarifai.com/v2/models/face-detection/outputs", returnClarifaiRequestOptions(req.body.input))
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => res.status(400).json('Unable to work with API'))
// }

const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0].entries);
    })
    .catch(err => res.status(400).json('Unable to get entries'))
}

module.exports = {
    handleImage,
    handleApiCall
}