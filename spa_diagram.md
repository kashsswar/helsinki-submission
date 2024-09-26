sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Opens the SPA at /spa
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document, CSS, and JavaScript files
    deactivate server
    Note right of browser: The browser loads the SPA framework and renders the page.

    user->>browser: Writes a note and clicks 'Save'
    Note right of browser: JavaScript captures the note and prepares a POST request.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with note data
    activate server
    server-->>browser: Success response (200 OK) and updated list of notes
    deactivate server
    Note right of browser: JavaScript updates the page to show the new note without reloading the whole page.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Updated list of notes as JSON
    deactivate server
    Note right of browser: Browser renders the updated notes dynamically.
