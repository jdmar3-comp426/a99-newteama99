
GET http://HOST/app/
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
{
	“contentFormat” : “html”,
	“Tags” : [ allUsers ]
}
GET http://HOST/app/new
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
{
	“contentFormat” : “html”,
	“Tags” : [ newUser ]
}

GET http://HOST/app/user/:id
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
{
	“contentFormat” : “html”,
	“Tags” : [ oneUser ]
}
GET http://HOST/app/update/user/:id
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
{
	“contentFormat” : “html”,
	“Tags” : [ updateUser ]
}


GET http://HOST/app/delete/user/:id
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
{
	“contentFormat” : “html”,
	“Tags” : [ deleteUser ]
}
