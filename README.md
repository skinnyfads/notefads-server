# NoteFads Server

## Overview

This is the API for my [website](https://notefads-web-client.vercel.app/), I made this using simple [express.js](https://expressjs.com/) and using [mongodb](https://mongoosejs.com/) as a database, and hosted it on [cyclic](https://cyclic.sh/).

At this time, all the API users can already make notes and also receive all notes that have been made. But notes can only be deleted by the server admin and cannot be deleted by users. If the users want to delete a note, they still have to contact the admin.

But don't worry, I'm in the plans to build a login system so users can log in and delete the notes they've created!

## Usage

Here's how to use the API

### Get all notes

- Command Line

```console
curl --request GET \
  --url https://adorable-yak-slacks.cyclic.app/notes
```

- JavaScript Fetch

```js
fetch("https://adorable-yak-slacks.cyclic.app/notes")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

- Axios

```js
axios.get("https://adorable-yak-slacks.cyclic.app/notes").then((res) => {
  console.log(res.data);
});
```

### Create a note

- Command Line

```console
curl --request POST \
  --url https://adorable-yak-slacks.cyclic.app/notes/create \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "My first note",
	"content": "This is my first note as an example",
	"author": "me"
}'
```

- JavaScript Fetch

```js
fetch("https://adorable-yak-slacks.cyclic.app/notes/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My first note",
    content: "This is my first note as an example",
    author: "me",
  }),
}).then((res) => console.log(res.json()));
```

- Axios

```js
axios
  .post("https://adorable-yak-slacks.cyclic.app/notes/create", {
    title: "My first note",
    content: "This is my first note as an example",
    author: "me",
  })
  .then((res) => {
    console.log(res.data);
  });
```
