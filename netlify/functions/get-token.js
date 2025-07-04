exports.handler = async function(event, context) {
  const GITHUB_TOKEN = process.env.GITHUB_PAT_TOKEN;

  if (!GITHUB_TOKEN) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
      body: "Error: GITHUB_PAT_TOKEN is not set in Netlify environment variables.",
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
    body: GITHUB_TOKEN,
  };
};
