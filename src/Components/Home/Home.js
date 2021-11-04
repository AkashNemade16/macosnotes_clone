import React, { useReducer, useState, createContext } from 'react'
import { FolderContext } from '../../reducers/reducer';
import Reducer from '../../reducers/reducer';
import { initialState } from '../../reducers/reducer';
import Header from '../Header/Header';
import FolderList from '../Tree/FolderList';
import NoteTitle from '../NoteTitles/NoteTitle';
import { Grid, Box } from '@mui/material';
import Content from '../Content/Content';

export const idContext = createContext()
const Home = () => {
    const [folderState, dispatch] = useReducer(Reducer, initialState);
    const [folderId, setFolderId] = useState()
    const [fileId, setFileId] = useState();
    const [selectIndex, setSelectIndex] = useState([])

    return (

        <FolderContext.Provider value={{
            folderState, dispatch
        }}>
            <idContext.Provider value={{ folderId: [folderId, setFolderId], fileId: [fileId, setFileId], selectIndex: [selectIndex, setSelectIndex] }}>
            
                <Box sx={{ flexGrow: 1}}>
                    <Header/>
                <Grid container  >
                    <Grid item xs={2}>
                        <FolderList />
                    </Grid>
                    <Grid item xs={4}>
                        <NoteTitle />
                    </Grid>
                    <Grid item xs = {6}>
                        <Content />    
                    </Grid>
                </Grid>
          </Box>

            </idContext.Provider>
        </FolderContext.Provider >

    )
}

export default Home
