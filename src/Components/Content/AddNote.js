import React from 'react'
import { TextareaAutosize } from '@mui/material'
const AddNote = ({ text }) => {
    return (
        <div>
            <TextareaAutosize
                maxRows={20}
                aria-label="maximum height"
                placeholder="Please Type your note"
                value={text}
                style={{ width: '100%' , height:'100vh',padding:0 }}
            />
        </div>
    )
}

export default AddNote
