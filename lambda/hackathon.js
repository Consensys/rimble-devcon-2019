exports.handler = function(event, context, callback) {
  const tokenId = event.queryStringParameters.tokenId;

  const openSeaData = {
    attributes: [
      {
        trait_type: "meals",
        value: "lunch"
      },
      {
        trait_type: "drinks",
        value: "included"
      }
    ]
  };

  const rarebitsData = {
    properties: [
      { key: "meals", value: "lunch", type: "string" },
      { key: "drinks", value: "included", type: "string" }
    ],
    tags: ["hackathon", "meals", "drinks"]
  };

  const metadata = {
    name: "Hackathon Token #" + tokenId,
    description: "Hackathon admission ticket for DevCon VI - #" + tokenId,

    external_url: "https://admiring-franklin-e4c8b6.netlify.com/",
    home_url: "https://admiring-franklin-e4c8b6.netlify.com/",

    image: "https://admiring-franklin-e4c8b6.netlify.com/images/hackathon.jpg",
    image_url:
      "https://admiring-franklin-e4c8b6.netlify.com/images/hackathon.jpg",

    ...rarebitsData
  };

  const root = {
    ...metadata,
    ...openSeaData
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(root)
  });
};
