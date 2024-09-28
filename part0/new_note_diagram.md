```mermaid
sequenceDiagram
   participant user
   participant browser
   participant server

   user->>browser: Types note and clicks 'Save'
   Note right of browser: Browser captures input and sends a POST request
   browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
   activate server
   server-->>browser: HTTP 302 Redirect to /notes
   deactivate server
   Note right of browser: Server processes the new note, responds with a redirect
   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
   activate server
   server-->>browser: HTML document
   deactivate server
   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
   activate server
   server-->>browser: Updated list of notes as JSON
   deactivate server
   Note right of browser: Browser executes callback to render the updated notes
