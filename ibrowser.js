var csslink2=document.createElement("link");function ValidURL(e){return!!/(https:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(e)}function navigate(e){var t=ValidURL(e);!0==t?document.getElementById("browser-control").src=e:!0==(t=ValidURL("https://"+e))?(document.getElementById("browser-control").src="https://"+e,document.getElementById("addressbar").value="https://"+e):(document.getElementById("browser-control").src="https://www.bing.com/search?q="+e.replaceAll(" ","+"),document.getElementById("addressbar").value="https://www.bing.com/search?q="+e.replaceAll(" ","+"))}function handle(e){13===e.keyCode&&(e.preventDefault(),navigate(document.getElementById("addressbar").value))}csslink2.rel="stylesheet",csslink2.type="text/css",csslink2.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",document.getElementsByTagName("HEAD")[0].appendChild(csslink2);
