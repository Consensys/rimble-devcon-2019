exports.handler = function(event, context, callback) {
  const tokenId = event.queryStringParameters.tokenId;

  const metadata = {
    name: "DevCon Party Token #" + tokenId,
    description: "Admission ticket for DevCon VI parties - #" + tokenId,

    external_url: "https://rimble-devcon-demo.netlify.com/",
    home_url: "https://rimble-devcon-demo.netlify.com/",

    image: "https://rimble-devcon-demo.netlify.com/images/parties.jpg",
    image_url: "https://rimble-devcon-demo.netlify.com/images/parties.jpg"
  };

  const root = {
    ...metadata
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(root)
  });
};
