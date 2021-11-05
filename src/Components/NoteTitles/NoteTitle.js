import React, { useContext,useEffect } from 'react'
import { FolderContext } from '../../reducers/reducer';
import { idContext } from '../Home/Home';
import { fetchFiles } from '../../actions/fileActions';
import { List,ListItemButton, ListItemText } from '@mui/material';

const NoteTitle = () => {
    const context = React.useContext(FolderContext);
    const folderData = context.folderState
    const { folderId, fileId, selectIndex } = useContext(idContext)
    const [folderIdValue] = folderId
    const [fileIdValue, setFileIdValue] = fileId;
    const [selectIndexValue, setSelectIndexValue] = selectIndex;
    const [selectedIndex, setSelectedIndex] = React.useState();
    const handleListItemClick = (event, index) => {
        setFileIdValue(index);
        setSelectedIndex(index);
        setSelectIndexValue(index);
    };

    useEffect(() => {
      
        fetchFiles(context)
    },[])
    
    return (
        <List sx={{ paddingTop: 0 }} >
            {
                folderData.files.filter((i) => i.folderId === folderIdValue).map((i, j) => (
                    <ListItemButton selected={selectedIndex === fileIdValue} key={j}
                        onClick={(event) => handleListItemClick(event, i.id)} >
                        <ListItemText primary={i.fileName} />
                    </ListItemButton>
                ))
            }
        </List>
    )
}

export default NoteTitle
