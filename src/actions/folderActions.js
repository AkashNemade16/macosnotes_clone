import axios from 'axios';
const baseURL = "http://localhost:3004"

export const fetchFolders = (context) => {
    axios.get(`${baseURL}/folders`).then(
        res => {
            console.log(res)
            context.dispatch({ type: 'FETCH_FOLDER', payload: res.data })
        }
    ).catch(e => console.log(e.error))
}


export const addFolders = (context,folder) => {
    axios.post(`${baseURL}/folders`,folder).then(
        res=>{
            context.dispatch({type:'CREATE_FOLDER',payload:res.data})
        }
    ).catch(e=>console.log(e.error))
}

export const deleteFolder = (context,id) => {
  axios.delete(`${baseURL}/folders/${id}`).then(
      res=>{
        console.log(res)
        context.dispatch({ type: 'DELETE_FOLDER', payload:id})
      }
  ).catch(e=>console.log(e.error))
}

export const updateFolders = (context,folders) => {
    axios.put(`${baseURL}/folders/${folders.id}`,folders).then(
       res=>{console.log(res)
       context.dispatch({type:'UPDATE_FOLDER',payload:res.data})
    } 
    ).catch(e=>console.log(e))
}

