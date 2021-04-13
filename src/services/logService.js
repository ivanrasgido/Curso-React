

function init () {
 
    // Sentry.init({
    //     dsn: "https://dd2900e5efd244a88230c7bf9e656023@o569900.ingest.sentry.io/5716218",
    //     tracesSampleRate: 1.0,
    //   });
}

function login (error){
    console.log(error);
    // Sentry.captureException(error);
}

export default {
    init ,
    login
}