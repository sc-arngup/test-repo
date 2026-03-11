function hello() {
    console.log("Hello from test repository package!");
    console.log("ENV VALUE:", process.env.SSO_REDIRECT_URI);
}

module.exports = {
    hello
};