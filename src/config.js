const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically



// function numbersInOrder (i){
//   const fourthFolders =["Fourth\\Zero" ,"Fourth\\One" ,"Fourth\\Two" , "Fourth\\Three" , "Fourth\\four" ,
//    "Fourth\\Five" , "Fourth\\Six" , "Fourth\\Seven" , "Fourth\\Eight" , "Fourth\\Nine"];
//   const thirdFolders =["Third\\Zero" ,"Third\\One" ,"Third\\Two" , "Third\\Three" , "Third\\four" ,
//    "Third\\Five" , "Third\\Six" , "Third\\Seven" , "Third\\Eight" , "Third\\Nine"];
//   const secondFolders =["Second\\Zero" ,"Second\\One" ,"Second\\Two" , "Second\\Three" , "Second\\four" ,
//    "Second\\Five" , "Second\\Six" , "Second\\Seven" , "Second\\Eight" , "Second\\Nine"];
//   const firstFolders =["First\\Zero" ,"First\\One" ,"First\\Two" , "First\\Three" , "First\\four" ,
//    "First\\Five" , "First\\Six" , "First\\Seven" , "First\\Eight" , "First\\Nine"];
//   var fourthNumber = Math.floor(i/1000);
//   var thirdNumber = Math.floor ( (i%100)/100);
//   var secondNumber = Math.floor(((i%100)%1000)/10);
//   var firstNumber = Math.floor (i%10);

//     x = [
//       {
//         growEditionSizeTo: 1000,
//         layersOrder: [
//           { name: fourthFolders[fourthNumber] },
//           { name: thirdFolders[thirdNumber] },
//           { name: secondFolders[secondNumber] },
//           { name: firstFolders[firstNumber] },
//         ],
//       },
//     ];
//   return x ;
// } 


// var layerConfigurations = numbersInOrder ();


  

var layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Fourth/Zero" },
      { name: "Fourth/One" },
      { name: "Fourth/Two" },
      { name: "Fourth/Three" },
      { name: "Fourth/four" },
      { name: "Fourth/Five" },
      { name: "Fourth/Six" },
      { name: "Fourth/Seven" },
      { name: "Fourth//Eight" },
      { name: "Fourth/Nine" },
      { name: "Third/Zero" },
      { name: "Third/One" },
      { name: "Third/Two" },
      { name: "Third/Three" },
      { name: "Third/four" },
      { name: "Third/Five" },
      { name: "Third/Six" },
      { name: "Third/Seven" },
      { name: "Third/Eight" },
      { name: "Third/Nine" },
      { name: "Second/Zero" },
      { name: "Second/One" },
      { name: "Second/Two" },
      { name: "Second/Three" },
      { name: "Second/four" },
      { name: "Second/Five" },
      { name: "Second/Six" },
      { name: "Second/Seven" },
      { name: "Second/Eight" },
      { name: "Second/Nine" },
      { name: "First/Zero" },
      { name: "First/One" },
      { name: "First/Two" },
      { name: "First/Three" },
      { name: "First/four" },
      { name: "First/Five" },
      { name: "First/Six" },
      { name: "First/Seven" },
      { name: "First/Eight" },
      { name: "First/Nine" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 511,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

