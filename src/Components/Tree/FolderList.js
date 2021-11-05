import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FolderContext } from '../../reducers/reducer';
import { fetchFolders } from '../../actions/folderActions';
import { fetchFiles } from '../../actions/fileActions';
import { idContext } from '../Home/Home';
import { ListItemButton } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
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
    }, [])//context as dependency

    return (
        <Box sx={{display:"flex",
            flexDirection:"column",
            alignItems:"stretch"
            }}>
            <List >
                {
                    folderData.folders.map((folder, index) => (
                        <ListItem sx={{ paddingTop: 0 }} key={index}>
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
                
                <Button  variant='secondary'>New Folder</Button>
            
            
        </Box>
        
        
    );
}