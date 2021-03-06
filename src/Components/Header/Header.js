import React, { useContext, useState } from 'react'
import { deleteFolder, addFolders, updateFolders } from '../../actions/folderActions';
import { addFiles, deleteFiles, updateFiles } from '../../actions/fileActions';
import { FolderContext } from './../../reducers/reducer';
import { uuid } from 'uuidv4';
import { TextareaAutosize } from '@mui/material';
import { idContext } from '../Home/Home'
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const context = useContext(FolderContext);
    const data = context.folderState
    const [input, setInput] = useState("")
    const [value, setValue] = useState(false)
    const [filevalue, setFileValue] = useState(false)
    const [updateValue, setUpdateValue] = useState(false)
    // const [noteValue, setNoteValue] = useState(false)
    const [fileInput, setFileInput] = useState("");
    const { folderId, fileId } = useContext(idContext)
    const [folderIdValue] = folderId
    const [fileIdValue] = fileId;

    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const DateTime = date + ' ' + time

    //file Structure

    const fileStructure = {
        id: fileIdValue + "",
        folderId: folderIdValue + "",
        fileName: input,
        content: {
            note: " "
        },
        timeCreated: "",
        timeModified: "",//to add time using new Date()
    }

    //handleNewNote
    const handleNewNote = () => {
        fileStructure.content.note = input
      
        if (input) addFiles(context, fileStructure.content.note)
        setInput("");
    }
    //handle new Folder
    const newFolderHandler = () => {
        const folderStructure = {
            id: uuid(),
            folderName: input,
        }
        setValue(true)
        if (input) addFolders(context, folderStructure);
        setInput("")
    }

    // handle Delete
    const deleteHandler = () => {
        deleteFolder(context, folderIdValue)
    }

    //update File
    const updateFileHandler = () => {
        const fileStructure = {
            id: fileIdValue + "",
            folderId: folderIdValue + "",
            fileName: input,
            content: {
                note: ""
            },
            timeCreated: "",
            timeModified: "",//to add time using new Date()
        }
        setUpdateValue(true)
        if (input) updateFiles(context, fileStructure)
        setInput("")
    }


    //Delete File
    const deleteFile = () => {
        deleteFiles(context, fileIdValue)
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleFileInputChange = (e) => {
        setFileInput(e.target.value)
    }


    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.which === 13) {
            console.log("Enter")
            newFolderHandler();
            setValue(false)
        }
    };

    const handleNewNoteKeypress = e => {
        //it triggers by pressing the enter key
        if (e.which === 13) {
            console.log("Enter")
            handleNewNote()
        }
    };

    const handleUpdateKeypress = e => {
        //it triggers by pressing the enter key
        if (e.which === 13) {
            console.log("Enter")
            updateFileHandler();
            setUpdateValue(false)
        }
    };

    const handleFileKeypress = e => {
        //it triggers by pressing the enter key
        if (e.which === 13) {
            console.log("Enter")
            newFileHandler();
            setFileValue(false)
        }
    };

    const newFileHandler = () => {
        const fileStructure = {
            id: uuid(),
            folderId: folderIdValue + "",
            fileName: fileInput,
            content: {
                note: ""
            },
            timeCreated: DateTime,
            timeModified: "",
        }
        setFileValue(true);
        if (fileInput) addFiles(context, fileStructure)
        setFileInput("");
    }

    return (
        <div>
            <AppBar position='relative' sx={{ backgroundColor: 'lightgray' }} >
                <Toolbar>
                    <button onClick={deleteHandler}>Delete</button>
                    <button onClick={deleteFile}>Delete Files</button>
                    <button onClick={newFolderHandler}>New Folder</button>
                    <button onClick={newFileHandler}>New File</button>
                    <button onClick={updateFileHandler}>update</button>
                    {/* <button onClick={handleNewNote}>NewNote</button> */}
                </Toolbar>
            </AppBar>

            {value === true ? <TextareaAutosize onChange={handleInputChange} onKeyPress={handleKeypress} /> : null}
            {filevalue === true ? <TextareaAutosize onChange={handleFileInputChange} onKeyPress={handleFileKeypress} /> : null}
            {updateValue === true ? <TextareaAutosize onChange={handleInputChange} onKeyPress={handleUpdateKeypress} /> : null}
            {/* {noteValue === true ? <TextareaAutosize onChange={handleInputChange} onKeyPress={handleNewNoteKeypress} /> : null} */}
        </div>
    )
    //To add Icons to buttons 
}


export default Header
