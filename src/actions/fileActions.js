import axios from 'axios';
const baseURL = "http://localhost:3004"

export const fetchFiles = (context) => {
    axios.get(`${baseURL}/files`).then(
        res => {
            console.log(res)
            context.dispatch({ type: 'FETCH_FILES', payload: res.data })
        }
    ).catch(e => console.log(e.error))
}

export const addFiles = (context, file) => {
    axios.post(`${baseURL}/files`, file).then(
        res => {
            console.log(res);
            context.dispatch({ type: 'CREATE_FILE', payload: res.data })
        }
    ).catch(e => console.log(e))
}

export const deleteFiles = (context, id) => {
    axios.delete(`${baseURL}/files/${id}`).then(
        res => {
            console.log(res)
            context.dispatch({ type: 'DELETE_FILES', payload: id })
        }
    ).catch(e => console.log(e.error))
}

export const updateFiles = (context, files) => {
    axios.put(`${baseURL}/files/${files.id}`, files).then(
        res => {
            console.log(res)
            context.dispatch({ type: 'UPDATE_FILES', payload: res.data })
        }
    ).catch(e => console.log(e))
}