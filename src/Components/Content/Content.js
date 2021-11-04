import React,{useContext} from 'react'
import { FolderContext } from '../../reducers/reducer';
import { Typography,TextField } from '@mui/material';
import {idContext} from '../Home/Home'
import { updateFiles } from '../../actions/fileActions';
import AddNote from './AddNote';
const Content = () => {
    const FolderData = useContext(FolderContext);
    const ContentData = FolderData.folderState
    console.log(ContentData.files)
    const { selectIndex, folderIdValue } = useContext(idContext)
    const [selectIndexValue,setSelectIndexValue] = selectIndex
    console.log(selectIndexValue)
    const update = () => {
        updateFiles()
    }
    const ids = useContext(idContext)
    console.log(ids)
    console.log(ContentData.files.filter((file) => file.id === selectIndexValue))
    return (
        <div>
           {
             ContentData.files.filter((file)=>file.id===selectIndexValue).map((file,j)=>(
                 < AddNote key={j} text={file.content.note}/>  
             ))
                 
           }
            
        </div>
    )
}

export default Content
