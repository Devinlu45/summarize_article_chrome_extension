// Explanation for revised summarizeArticle
async function summarizeArticle() {
  let [storage] = await chrome.tabs.query({ active: true, currentWindow: true });
  const webUrl = storage.url;
  // In order to use the readability library. I am creating a script element and appending it at the very top of the document.
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('readability.js');
  document.head.appendChild(script);
  script.onload = async function() {
  // Get html data and create a new dom document via parsing.
  const webData = await fetch(webUrl);
  const textData = await webData.text();
  const newDoc = new DOMParser().parseFromString(textData, 'text/html');
  // Use readability library to parse the text into something readable. 
  const goodArticle = new Readability(newDoc).parse();
  const articleWords = goodArticle ? goodArticle.textContent : 'Article text not found';
  const apiKey = <INSERT API KEY HERE>
  // Use a post method to send article text to the cohere api. 
  const options = {
    "method": "POST",
    "headers": {
      "accept": "application/json",
      "content-type": "application/json",
      "authorization": "Bearer " + apiKey
    },
    "body": JSON.stringify({
      "length": "short",
      "format": "auto",
      "model": "summarize-xlarge",
      "extractiveness": "high",
      "temperature": 0.1,
      "text": articleWords,
      "additional_command": "of this webpage"
    })
  };
  // We fetch the summarize text after the cohere api does it's thing. 
  fetch('https://api.cohere.ai/v1/summarize', options)
    .then((response) => response.json())
    .then((data) => {
      const { summary } = data;
      console.log('Summary:', summary);
      alert(summary)
    });
  };
}
       

document.getElementById("summarize").addEventListener("click", summarizeArticle);
