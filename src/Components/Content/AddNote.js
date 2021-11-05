import React from 'react'
import { TextareaAutosize } from '@mui/material'
import { Typography } from '@mui/material';
const AddNote = ({ text,title }) => {
    return (
        <div>
            <Typography>{title}
                <TextareaAutosize
                    maxRows={20}
                    aria-label="maximum height"
                    placeholder="Please Type your note"
                    value={text}
                    style={{ width: '100%', height: '100vh', padding: 0, border: 'none' }}

                /></Typography>
            
        </div>
    )
}
//To add onChange to make the note dynamic 
export default AddNote
