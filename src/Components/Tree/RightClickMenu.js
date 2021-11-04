import React, { useState, useContext,createContext } from 'react'
import { ContextMenu, MenuItem } from "react-contextmenu";
import { FolderContext } from './../../reducers/reducer';
import { addFolders, deleteFolder, updateFolders } from '../../actions/folderActions';
import { TextField } from '@mui/material';
import { uuid } from 'uuidv4';

export const RightContext = createContext()
const RightClickMenu = () => {
    const context = useContext(FolderContext);
    const data = context.folderState
    const [test, test1] = data.folders

    const handleClickDeleteFolder = () => {
        deleteFolder(context, test1.id)
    }
    const handleClickNewFile = () => {
        console.log("newFIle");

    }
    const handleClickUpdate = () => {
        const folderStructure = {
            id: test1.id,
            folderName: "helw",
            isOpen: false,
            timeCreated: "",
            timeModified: "",
            files: [{
                fileId: uuid(),
                fileName: "sky",
                content: "",
                timeCreated: "",
                timeModified: "",
                isSelected: false
            }]
        }
        updateFolders(context, folderStructure)
    }

    return (
       
        <ContextMenu id="same_unique_identifier">
            <MenuItem data={{data:data.folders}} onClick={handleClickNewFile}>
                New File
            </MenuItem>
            <MenuItem data={{data:data.folders}} onClick={handleClickUpdate}>
                Edit
            </MenuItem>
            <MenuItem divider />
            <MenuItem data={{data:data.folders}} onClick={handleClickDeleteFolder}>
                Delete Folder
            </MenuItem>
        </ContextMenu>
        
    )
}

export default RightClickMenu
