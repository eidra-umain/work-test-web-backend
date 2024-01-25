# Backend-test

## Installation

```bash
$ npm install
```

## Running the app

### Dev

```bash
$ npm run dev
```

### Production

```bash
$ npm run build && npm run start
```

## Deployment

Code is hosted on umain-code-test GCP project

### Building for deployment

Build using

`docker build --platform linux/amd64 -t gcr.io/umain-code-test/work-test-web-2024:{{ENTER YOUR VERSION HERE NOT THIS STRING}} .`

e.g `docker build --platform linux/amd64 -t gcr.io/umain-code-test/work-test-web-2024:1.0.0 .`

Push to gcp registry

`docker push gcr.io/umain-code-test/work-test-web-2024:{{YOUR_VERSION_NUMBER}}`

- Go to https://console.cloud.google.com/run?hl=en&project=umain-code-test&supportedpurview=project

- Select work-test-web-2024 -> Edit & Deploy new revision

- Select your new image and you are done!🥳
