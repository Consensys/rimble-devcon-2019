exports.handler = function(event, context, callback) {
  const tokenId = event.queryStringParameters.tokenId;

  const metadata = {
    name: "Attendance Token #" + tokenId,
    description: "Admission ticket for DevCon VI - #" + tokenId,

    external_url: "https://admiring-franklin-e4c8b6.netlify.com/",
    home_url: "https://admiring-franklin-e4c8b6.netlify.com/",

    image: "https://admiring-franklin-e4c8b6.netlify.com/images/attendance.jpg",
    image_url:
      "https://admiring-franklin-e4c8b6.netlify.com/images/attendance.jpg"
  };

  const root = {
    ...metadata
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(root)
  });
};
