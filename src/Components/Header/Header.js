import React, { useContext, useState } from 'react'
import { deleteFolder, addFolders, updateFolders } from '../../actions/folderActions';
import { addFiles, deleteFiles, updateFiles } from '../../actions/fileActions';
import { FolderContext } from './../../reducers/reducer';
import { uuid } from 'uuidv4';
import { TextareaAutosize } from '@mui/material';
import { idContext } from '../Home/Home'
import { AppBar,Toolbar } from '@mui/material';

const Header = () => {
    const context = useContext(FolderContext);
    const data = context.folderState
    const [input, setInput] = useState("")
    const [value, setValue] = useState(false)
    const [filevalue, setFileValue] = useState(false)
    const [updateValue, setUpdateValue] = useState(false)
    const [fileInput, setFileInput] = useState("");
    const { folderId, fileId } = useContext(idContext)
    const [folderIdValue] = folderId
    const [fileIdValue] = fileId;

    //handle new Folder
    const newFolderHandler = () => {
        const folderStructure = {
            id: uuid(),
            folderName: input,
            timeCreated: "",
            timeModified: "",
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
            timeModified: "",
        }
        setUpdateValue(true)
        if(input)updateFiles(context, fileStructure)
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
                title: "",
                note: ""
            },
            timeCreated: "",
            timeModified: "",
        }
        setFileValue(true);
        if(fileInput)addFiles(context, fileStructure)
        setFileInput("");
    }

    return (
        <div>
            <AppBar position='relative' sx={{backgroundColor:'lightgray'}} >
                <Toolbar>
                    <button onClick={deleteHandler}>Delete</button>
                    <button onClick={deleteFile}>Delete Files</button>
                    <button onClick={newFolderHandler}>New Folder</button>
                    <button onClick={newFileHandler}>New File</button>
                    <button onClick={updateFileHandler}>update</button>
                </Toolbar>
            </AppBar>
            
            {value === true ? <TextareaAutosize onChange={handleInputChange} onKeyPress={handleKeypress} /> : null}
            {filevalue === true ? <TextareaAutosize onChange={handleFileInputChange} onKeyPress={handleFileKeypress} /> : null}
            {updateValue === true ? <TextareaAutosize onChange={handleInputChange} onKeyPress={handleUpdateKeypress} /> : null}

        </div>
    )
}


export default Header
