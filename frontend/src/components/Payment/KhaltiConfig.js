import myKey from "./Khaltikey";
let config = {
    // replace this key with yours
    "publicKey": myKey.publicKey,
    "productIdentity": "6969",
    "productName": "Shopo",
    "productUrl": "http://localhost:3000/",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};



export default config;