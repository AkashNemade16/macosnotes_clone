import React,{useState,useContext} from 'react'
import { TextareaAutosize } from '@mui/material'
import { Typography } from '@mui/material';
import {addNote} from '../../actions/fileActions'
import { FolderContext } from './../../reducers/reducer';
import { idContext } from '../Home/Home'
const AddNote = ({ text,title }) => {
    const context = useContext(FolderContext);
    const [noteInput,setNoteInput] = useState("");
    const { folderId, fileId } = useContext(idContext)
    const [folderIdValue] = folderId
    const [fileIdValue] = fileId;
    const handleNote = () => {
        //file Structure
        //to pass selectIndex noteInput to addFiles
        addNote(context)
    }
    const noteInputChange = (e) => {
        setNoteInput(e.target.value)
    }
    return (
        <div>
            <Typography>{title}
                <TextareaAutosize
                    maxRows={20}
                    aria-label="maximum height"
                    placeholder="Please Type your note"
                    value={noteInput}
                    style={{ width: '100%', height: '100vh', padding: 0, border: 'none' }}
                    onChange={noteInputChange}
                /></Typography>
            
        </div>
    )
}
//To add onChange to make the note dynamic 
export default AddNote
