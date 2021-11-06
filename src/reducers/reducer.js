import { createContext } from 'react';

export const FolderContext = createContext();

export const initialState = {
    folders: [], files: []
}
const Reducer = (state = initialState, action) => {


    switch (action.type) {
        case 'CREATE_FOLDER':
            return {
                ...state,
                folders: [action.payload, ...state.folders]
            };
        case 'CREATE_FILES':
            return {
                ...state,
                files: [action.payload, ...state.files]
            };
        case 'FETCH_FOLDER':
            return {
                ...state,
                folders: action.payload
            };
        case 'DELETE_FOLDER':
            return {
                ...state,
                folders: [...state.folders.filter((x) => x.id !== action.payload)]
            }
        case 'DELETE_FILES':
            return {
                ...state,
                files: [...state.files.filter((x)=>x.fileId !== action.payload)]
            } 
        
        case 'UPDATE_FILES':
            return {
                ...state,
                files: [...state.files.map((x) => x.fileId === action.payload.filesId ? action.payload : x)]
            } 
        case 'ADD_NOTES':
            return {
                ...state,
                files: [...state.files.map((x) => x.fileId === action.payload.filesId ? action.payload : x)]
            }   
        case 'UPDATE_FOLDER':
            return {
                ...state,
                folders: [...state.folders.map((x) => x.id === action.payload.id ? action.payload : x)]
            }
        case 'FETCH_FILES':
            return {
                ...state,
                files: action.payload

            }
        default:
            return state
    }
}

export default Reducer
