import React, { useContext } from 'react'
import { FolderContext } from '../../reducers/reducer';
import { idContext } from '../Home/Home'
import { updateFiles } from '../../actions/fileActions';
import AddNote from './AddNote';
const Content = () => {
    const FolderData = useContext(FolderContext);
    const ContentData = FolderData.folderState
    console.log(ContentData.files)
    const { selectIndex, folderIdValue } = useContext(idContext)
    const [selectIndexValue, setSelectIndexValue] = selectIndex
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
                ContentData.files.filter((file) => file.id === selectIndexValue).map((file, j) => (
                    < AddNote key={j} text={file.content.note} />
                ))

            }

        </div>
        //onChange props to be passed to AddNote
        //Add update folder button with updateFile action to update and edit
    )
}

export default Content
