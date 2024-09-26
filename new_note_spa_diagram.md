```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Writes a note and clicks 'Save'
    Note right of browser: JavaScript captures the note and prepares a POST request
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with note data
    activate server
    server-->>browser: 201 Created, JSON response
    deactivate server
    Note right of browser: JavaScript updates the note list dynamically
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json (optional)
    activate server
    server-->>browser: Updated list of notes (optional)
    deactivate server
    Note right of browser: Browser re-renders the notes on the page without reload
