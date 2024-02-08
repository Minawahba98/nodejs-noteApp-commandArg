const yargs = require('yargs')
const fs = require('fs')
const chalk = require('chalk')
const note = require('./notes')
const { title } = require('process')

//customiza yargs verison
yargs.version('1.1.0')

//Add note but command line arg
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        }
    },
    handler: (argv) => {
        note.getNotes(argv.title, argv.body)
    }
})
//remove command
yargs.command({
    command: 'Remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "delete title",
            demandOption: true,
        }
    },
    handler: (argv) => {
        note.removeNote(argv.title)

    }

})
//list comman 
yargs.command({
    command: 'List',
    describe: 'list your note',
    handler: () => {
        note.listNotes()
    }
})
//read command 
yargs.command({
    command: 'Read',
    describe: 'Reading note',
    builder: {
        title: {
            describe: 'Title notes'
        }
    },
    handler: (argv) => {
        note.readNotes(argv.title)
    }
})
//Print command yargs
yargs.parse()