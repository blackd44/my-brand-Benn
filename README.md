###### my-brand-Benn
# My Personal Website
This is `pure HTML, CSS and JavaScript` project for my personal brand web, no frameworks, no libraries and no bootstrap

### Online output find it [here](https://mybrandbenn.vercel.app/)

### Running locally
If you clone this project first make sure that you have the local server for running this.

for me I used vscode extention called [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) but if you cave others that can run it No problem with it.

## Inside my brand
### Pages
you will find some pages in the header which are `Home`, `portifolio`, `blogs`, `about`, `contact`, `signin or signup` in each page with its content

in some pages there is the `dynamic contents`, that because of JavaScript

in this project [JavaScript](https://github.com/blackd44/my-brand-Benn/tree/main/js) stores its data in the [localstorage](https://javascript.info/localstorage) in other to be able to get them in future (like DataBase)

The stored datas are [Blogs](https://github.com/blackd44/my-brand-Benn/tree/main/js/blogs), [Messages](https://github.com/blackd44/my-brand-Benn/tree/main/js/messages), [Users](https://github.com/blackd44/my-brand-Benn/tree/main/js/user) and [Comments](https://github.com/blackd44/my-brand-Benn/tree/main/js/comments) and each of here is provided by the End-Users( Clients )

## Storages
### [Messages](https://github.com/blackd44/my-brand-Benn/tree/main/js/messages)

In the [`contact page`](https://github.com/blackd44/my-brand-Benn/blob/main/contact.html) there is a form to tell the admin the message and you [add message](https://github.com/blackd44/my-brand-Benn/blob/main/js/messages/contactme.js) with `name` `email` `message` and all of this store themselves into the [localstorage](https://javascript.info/localstorage) and the admin can get it throught the [`dashboard pages`](https://github.com/blackd44/my-brand-Benn/tree/main/dashboard) and with the help of [this Javascript](https://github.com/blackd44/my-brand-Benn/blob/main/js/messages/getmessages.js)

### [Users](https://github.com/blackd44/my-brand-Benn/tree/main/js/user)

In the [`signin page`](https://github.com/blackd44/my-brand-Benn/blob/main/signin.html) there is form, it can let you pass if nd only if you have an account in your server, to check that the JavaScript must [check](https://github.com/blackd44/my-brand-Benn/blob/main/js/user/signin.js) in your localstorage if there is the account you want to use.

If not you must create account in [`signup page`](https://github.com/blackd44/my-brand-Benn/blob/main/signup.html) and that account you used in signup is added to other user accounts by [JavaScript](https://github.com/blackd44/my-brand-Benn/blob/main/js/user/signup.js) and first must check if the account wasn't created before

And if done signing into the javascript create other localstorage for your account only in other to know if you still logged in

All the account are displayed in the [`dashboard`](https://github.com/blackd44/my-brand-Benn/blob/main/dashboard/user.html) with the help of [this JavaScript](https://github.com/blackd44/my-brand-Benn/blob/main/js/user/display.js)

### [Blogs](https://github.com/blackd44/my-brand-Benn/tree/main/js/blogs)

In the [`blogs list page`](https://github.com/blackd44/my-brand-Benn/blob/main/blogs/index.html), the stored blogs are displayed there with [javaScript DOM](https://github.com/blackd44/my-brand-Benn/blob/main/js/blogs/bloglist.js) and when you click one read more it takes you to [`single blog page`] with the help of javascript it read the id in parameters 
