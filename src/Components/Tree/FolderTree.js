import * as React from 'react';
import { FolderContext } from './../../reducers/reducer';
import { fetchFolders } from '../../actions/folderActions';
import { fetchFiles } from '../../actions/fileActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { idContext } from '../Home/Home';

export default function NestedList() {
    const context = React.useContext(FolderContext);
    const folderData = context.folderState
    console.log(folderData.files)
    console.log(folderData.folders)

    const { folderId, fileId } = React.useContext(idContext)
    const [folderIdValue,setFolderIdValue] = folderId
    const [fileIdValue,setFileIdValue] = fileId;

    React.useEffect(() => {
        fetchFolders(context)
        fetchFiles(context)
    }, [])

    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const [fileSelect, setFileSelect] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleFileSelect = (event, nodeIds) => {
        setFileIdValue(nodeIds)
        setFileSelect(nodeIds)
    }

    const handleSelect = (event, nodeIds) => {
        setFolderIdValue(nodeIds)
        setSelected(nodeIds);
    };
    return (
        <TreeView
            aria-label="controlled"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
            multiSelect
        >
            {
                folderData.folders.map((folder, index) => (
                    <TreeItem key={index} nodeId={folder.id} label={folder.folderName}>
                        <TreeView
                            aria-label="controlled"
                            selected={fileSelect}
                            onNodeSelect={handleFileSelect}
                            multiSelect
                        >{
                                folderData.files.filter((file) => file.folderId === folder.id).map((files, i) => (
                                    <TreeItem key={i} nodeId={files.id} label={files.fileName} />
                                ))
                            }</TreeView>
                    </TreeItem>
                ))
            }
        </TreeView>
    );
}