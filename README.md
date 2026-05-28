# express-login-ui

Simple demo application implementing following:

1. REST api /login that takes username + password, and return login success/failed status. If username and password is correct, return `{status: "success", message: "Login successful"}`, else return `{status: "success", message: "Login failed"}`. Express app listen to port 3000.

2. A static HTML page index.html with a login form, and a login button that will send a POST request to /login using JS fetch api and displays the status into a div with id "status".
