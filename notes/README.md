# Simple Notes App

A basic Node.js example for adding, listing and removing notes. The notes are saved in the `notes-data.json` file.

Each note must have a `title` and `body`.

## Get all notes
```
node app.js list
```

## Read note
```
node app.js read -t "Some Title"
```

| Param | Details |
| --- | --- |
| --title, -t | Title of note. Required |

## Remove note
```
node app.js remove -t "Some Title"
```

| Param | Details |
| --- | --- |
| --title, -t | Title of note. Required |

## Add note
```
node app.js add -t "Some Title" -b "The body of the note"
```

| Param | Details |
| --- | --- |
| --title, -t | Title of note. Required. |
| --body, -b | Body of note. Required. |
