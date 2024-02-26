chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
  
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      let exampleRule = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'yahoo.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'cnn.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'cbsnews.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'nbcnews.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'nytimes.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'msn.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'cnbc.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'forbes.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'bloomberg.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'reuters.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'foxnews.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'npr.org'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'latimes.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'washingtonpost.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'usnews.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'today.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'nypost.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'businessinsider.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'cnet.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'huffpost.com'},
          })
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      };
  
      let rules = [exampleRule];
      chrome.declarativeContent.onPageChanged.addRules(rules);
    });
  });