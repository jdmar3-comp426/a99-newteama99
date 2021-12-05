// Define app using express
var express = require("express")
var app = express()
// Require database SCRIPT file
var db = require("./database.js")
// Require md5 MODULE
var md5 = require("md5");
const { readonly } = require("./database.js");
const cors = require("cors");
// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Set server port
var HTTP_PORT = 5000;
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"Your API works! (200)"});
	res.status(200);
});

// Define other CRUD API endpoints using express.js and better-sqlite3

// CREATE a new user (HTTP method POST) at endpoint /app/new/
app.post("/app/new/", (req, res, next) => {
    console.log(req.body);
	var data = {
		user: req.body.user,
		email: req.body.email,
		pass: req.body.pass ? md5(req.body.pass) : null
	};
	//change code for our needs
	const stmt = db.prepare("INSERT into userinfo (user, pass, email, guesses, first_row, second_row, third_row, fourth_row, fifth_row, sixth_row, seventh_row, eighth_row, ninth_row) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
    //replace 0's with actual values
	const u = stmt.run(data.user, data.pass, data.email, 0, 600000070, 000005020, 000001000, 362000081, 509618732, 710090405, 020006510, 107800003, 450000000);
	res.status(201).json({"message":"1 record created: ID "+u.lastInsertRowid+" (201)"});
});


// READ a list of all users (HTTP method GET) at endpoint /app/users/
app.get("/app/users", (req, res) => {	
	const stmt = db.prepare("SELECT * FROM userinfo").all();
	res.status(200).json(stmt);
});

// READ a single user (HTTP method GET) at endpoint /app/user/:id
app.get("/app/user/:id", (req, res) => {	
	const stmt = db.prepare("SELECT * FROM userinfo WHERE id = ?");
	const u = stmt.get(req.params.id);
	res.status(200).json(u);
});
// UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
app.patch("/app/update/user/:id", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET user = COALESCE(?,user), pass = COALESCE(?,pass), email = COALESCE(?,email), guesses = COALESCE(?,guesses), first_row = COALESCE(?, first_row), second_row = COALESCE(?, second_row), third_row = COALESCE(?, third_row), fourth_row = COALESCE(?, fourth_row), fifth_row = COALESCE(?, fifth_row), sixth_row = COALESCE(?, sixth_row), seventh_row = COALESCE(?, seventh_row), eighth_row = COALESCE(?, eighth_row), ninth_row = COALESCE(?, ninth_row) WHERE id = ?");
	const u = stmt.run(req.body.user, md5(req.body.pass), req.body.email, req.body.guesses, req.body.first_row, req.body.second_row, req.body.third_row, req.body.fourth_row, req.body.fifth_row, req.body.sixth_row, req.body.seventh_row, req.body.eighth_row, req.body.ninth_row, req.params.id);
	res.status(405).json({"message":"1 record updated: ID "+req.params.id+" (200)"});
});

// DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
app.delete("/app/delete/user/:id", (req, res) => {	
	const stmt = db.prepare("DELETE FROM userinfo WHERE id = ?");
	const u = stmt.run(req.params.id);
	res.status(405).json({"message":"1 record deleted: ID "+req.params.id+" (200)"});
});

// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});
