import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { FolderContext } from '../../reducers/reducer';
import { fetchFolders } from '../../actions/folderActions';
import { fetchFiles } from '../../actions/fileActions';
import { idContext } from '../Home/Home';
import { ListItemButton } from '@mui/material';

export default function FolderList() {
    const context = React.useContext(FolderContext);
    const folderData = context.folderState
    console.log(folderData.files)
    console.log(folderData.folders)

    const { folderId } = React.useContext(idContext)
    const [folderIdValue, setFolderIdValue] = folderId
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setFolderIdValue(index);
    };
    console.log(folderIdValue)
    React.useEffect(() => {
        fetchFolders(context)
        fetchFiles(context)
    }, [])

    return (
        <List >
            {
                folderData.folders.map((folder,index)=>(
                    <ListItem sx={{paddingTop:0}} key={index}>
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, folder.id)}
                        >
                            {folder.folderName}
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    );
}