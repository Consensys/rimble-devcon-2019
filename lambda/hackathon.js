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

    external_url: "https://rimble-devcon-demo.netlify.com/",
    home_url: "https://rimble-devcon-demo.netlify.com/",
    external_link: "https://rimble-devcon-demo.netlify.com/",

    image: "https://rimble-devcon-demo.netlify.com/images/hackathon.jpg",
    image_url: "https://rimble-devcon-demo.netlify.com/images/hackathon.jpg",
    num_sales: 2000,
    background_color: "4E3FCE",

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
