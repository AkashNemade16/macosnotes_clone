import React from 'react'
import { TextareaAutosize } from '@mui/material'
const AddNote = ({ text }) => {
    return (
        <div>
            <TextareaAutosize
                maxRows={20}
                aria-label="maximum height"
                placeholder="Please Type your note"
                defaultValue={text}
                style={{ width: '100%' }}
            />
        </div>
    )
}

export default AddNote
