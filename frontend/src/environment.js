let IS_PROD = false;
const server = IS_PROD ?
    "https://meetly-backend-f2u1.onrender.com" :

    "http://localhost:8000"


export default server;