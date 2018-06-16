# image-search-microservice
Node js microservice for image search using imgur api.

## Features

 - Proxy service to fetch data from imgur api
 
 ## Project packages
  - node
  - express
  - body-parser
  - node-fetch
  - nodemon
  
  ## prerequisite
  
  Enable **CORS** in your browser for the any 
  app trying to communicate with this server.

### API DOC
    Method: GET
    Path: /  
  Root endpoint
  
  Provides a simple response indicating status of the server.
  
    Method: POST
    Path: /gallery
    Payload: {
                sortFilter: [type: string, optional, default: viral]
                sectionFilter: [type: string, optional, default: hot]
                windowFilter: [type: string, optional, default: day]
                viralFilter: [type: bool, optional, default: false]
              }

  Gallery endpoint
  
  Use same endpoint to get gallery thumbnails and to apply filter on galley.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000)


