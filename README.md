# GIPHY-browser

A simple browser application powered by IBM Watson Natural Language Understanding and GIPHY APIs. 
It takes user input as a text string and displays appropriate GIF graphical content in a web browser.

Front-end development was completed using the SVELTE framework, while server development was implemented using Node.js (You can find two interesting links regarding svelte in Acknowledgements)

**Activity diagram is in "source/uml/activity_diagram.png"**

## Requirements

Critical requirements: 

- [x] Utilize a cloud service for AI/ML tasks, e.g., Watson Natural Language Understanding Service on IBM Cloud. Note: you don’t need to focus on the quality of results returned by the API.

- [x] Use a third-party API to extract GIF content.

- [x] Return the same GIF content for an identical user input.

- [x] Implement the backend part of your application using JAVA/Spring or JavaScript/TypeScript Node.js framework. 

- [ ] Display results of the last five queries from a particular user (results should persist server restarts and page refresh).

Non-critical requirements: 

- [x] Implement a User Interface (UI) for your application using one of the modern JavaScript frameworks like React, Angular, or Vue.

- [ ] Containerize your application.

- [ ] Deploy your application to the cloud platform of your choice (AWS, Azure, GCP or IBM Cloud)
## Demo

Insert gif or link to demo

[GIPHY-browser demonstration](https://youtu.be/yuioSKIm10E)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`IBM_WATSON_API_KEY`

`GIPHY_API_KEY`


## Installation
1. Open Git bash

2. Change the current working directory to the location where you want the cloned directory.

3. Type following: 

```bash
  git clone https://github.com/Mvycas/GIPHY-browser.git
```
4. Press enter.
5. If you do not have node.js download it from here: https://nodejs.org/en/download/

6. After the node.js installation, verify npm packages by running the following comand:

```bash
  npm install -g npm
```
7. Make sure you are in the root directory of the cloned project.

8. Get node modules by running the following comand:

```bash
  npm install 
```

9. Run following:

```bash
  npm run dev
```
10. Open project in IDE environment (as ex. VS Code)

11. In the root directory create ".env" file.

12. Place your api keys inside .env file in the current format: (replace <api_key> with actual key)

IBM_WATSON_API_KEY='<api_key>'

GIPHY_API_KEY='<api_key>'

## Run application
1. Open terminal and make sure you are in the project's root directory.

2. Run command: 
```bash
  node server.js
```
3. Open web browser and enter: "localhost:3000" in address bar. Press enter. (the server is listening on port 3000)
## Roadmap

- Implement search history via local storage

## Acknowledgements

 - [Why Svelte is the next big thing](https://naturaily.com/blog/why-svelte-is-next-big-thing-javascript-development)
 - [Rich Harris - Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao)
 - [Svelte - Cybernetically enhanced web apps](https://svelte.dev)
 - [Node.js Docs](https://nodejs.org/en/docs)
 - [GIPHY Docs](https://developers.giphy.com/docs/sdk)
 - [IBM Cloud API Docs - Natural language understanding](https://developers.giphy.com/docs/sdk)
 - [JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)
 - [Express JS Guide - routing](https://expressjs.com/en/guide/routing.html)



