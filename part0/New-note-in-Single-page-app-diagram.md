```mermaid
sequenceDiagram
participant browser
participant server

browser->>server: user asks for adding data and spa.js handles sending data
activate server
server-->>browser: server sends teh ful list in json format
deactivate server
Note right of browser: spa.js renders the json file to the html page
```