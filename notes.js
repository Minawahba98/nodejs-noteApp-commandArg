//load core files
const chalk = require("chalk")
const fs = require("fs")

const getNotes = (title, body) => {
    const note = loadNotes()
    const dublicatNotes = note.filter((notes) => {
        return notes.title === title
    })
    const dublicateNote = note.find((note) => { note.title === title })
    if (dublicatNotes.length === 0) {
        note.push({
            title: title,
            body: body,
        })
        saveNotes(note)
        console.log('new note added')
    } else {
        console.log('note title taken')
    }


}

const saveNotes = (note) => {
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('note.json', dataJSON)
}
//function loadnotes from JSON
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json')
        const dataString = dataBuffer.toString()
        return data = JSON.parse(dataString)

    } catch (e) {
        return []
    }

}

const removeNote = (title) => {
    //load notes
    const notes = loadNotes()
    // get index 
    const index = notes.filter((note) => {
        return note.title !== title

    })

    saveNotes(index)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your note '))
    notes.forEach((note) => {
        console.log(note.title)

    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) =>
        note.title === title
    )
    if (note) {
        console.log(note.title)
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('Note not found'))
    }
}
module.exports = {
    getNotes: getNotes,
    removeNote: removeNote,
    loadNotes: loadNotes,
    listNotes: listNotes,
    readNotes: readNotes

}