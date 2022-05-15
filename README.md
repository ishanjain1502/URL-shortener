# URL-shortener
> A URL-shortener where you can get shortened versions of URLs.

## Tech Stack :
1. NodeJS
2. EJS
3. MongoDB

## Setup : 
1. `git clone https://github.com/ishanjain1502/URL-shortener.git`
2. `cd url-shortner`
3. `npm install`
4. `node server.js`

## DB Schema
![image](https://user-images.githubusercontent.com/56102033/168487427-afb268ab-a784-460c-9942-a17a58cd2fe4.png)

## API LLD
1. Get request for Home Page <br/> <br/>
![image](https://user-images.githubusercontent.com/56102033/168488514-a2080814-47e3-4b3b-bcdd-880c028abc75.png)
<br/>


2. Post request for getting short url of a link<br/> <br/>
![image](https://user-images.githubusercontent.com/56102033/168488862-a11bff6e-bb1f-4bc6-b7de-cb595aa3cfb9.png)

<br/>

3. Get request with the shorturl<br/> <br/>
![image](https://user-images.githubusercontent.com/56102033/168488731-a64d1de5-7676-4cfd-a563-0ee15b903ce8.png)



## About

This URL shortner is based on MVC architecture, but what is MVC ? 
<br/>
The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application.

<br/>
  <b>Different Parts of the app : </b>

<ul>
<li>The models are created with the help of mongoose library</li>
<li>The controllers are written in plain JS and are executed by node</li>  
<li>The Views are written in EJS</li>
</ul>

<i>For Shortening the URLs I used the short-id library, its really easy to use and simple to set up in your code too </i> `https://www.npmjs.com/package/shortid` <br/>
<hr/>
-- UPDATE -- <br/>
Since now the shortid library has gone deprectaed i would suggest you to use nanoid
<br/>
