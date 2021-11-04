import React, { useContext } from 'react'
import { FolderContext } from '../../reducers/reducer';
import { idContext } from '../Home/Home';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
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
