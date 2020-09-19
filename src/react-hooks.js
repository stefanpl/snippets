// Using useState(initialValue) hook:
const initialStatus = 'loading'
const [status, setStatus] = useState(initialStatus);

// Later, in some events callback or similar:
setStatus('ready');


// useEffect can be used to perform side effects after the component has been rendered.
useEffect(() => {
  console.log(`This will be executed after every render() call`);
})

// Returning a function from the callback will provide a cleanup when the component unmounts:
useEffect(() => {
  subscribeToWebhooksOrSomething(myId, someCallback);
  return () => {
    cancelWebhookSubscription(myId);
  }
})

// useLayoutEffect() has the same signature as useEffect, but:
// - it runs synchronously BEFORE the DOM is rendered
