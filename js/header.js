
var currLocation = location.href.replace(/(.+\w\/)(.+)/,"/$2");
//Thanks Joe Johnson : https://stackoverflow.com/questions/4504686/get-relative-path-of-the-page-url-using-javascript
currLocation = currLocation.slice(1)

document.write("<header>");
document.write("<a class='skip' href='#main'>Skip to main content</a>");
document.write("<h1>Bernardt Bergh's personal website</h1>");
document.write("<nav class='flex'>");

//Index -- About page
//page name
//page rel url

if (currLocation=="index.html") {
    document.write("<a class='current' href='index.html'>About</a>");
} else {
    document.write("<a href='index.html'>About</a>"); 
}
//Projects Page
if (currLocation=="projects.html") {
    document.write("<a class='current' href='projects.html'>Projects</a>");
} else {
    document.write("<a href='projects.html'>Projects</a>"); 
}
//Stuff Page
if (currLocation=="stuff.html") {
    document.write("<a class='current' href='stuff.html'>Stuff</a>");
} else {
    document.write("<a href='stuff.html'>Stuff</a>"); 
}


document.write("</nav>");
document.write("</header>");

