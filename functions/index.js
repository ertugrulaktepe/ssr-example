/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require('firebase-functions/v2/https');
const { logger } = require('firebase-functions/v2');
const next = require('../node_modules/next/dist/server/next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, conf: { distDir: '/out' } });
const nextjsHandle = app.getRequestHandler();

exports.helloWorld = onRequest((req, res) => {
  return app.prepare().then(() => nextjsHandle(req, res));
});
