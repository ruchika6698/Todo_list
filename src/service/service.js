const localUrl = 'http://localhost:3000/api/tasks'

export const getData = async() => {
    try {
        const res = await fetch(localUrl)
        const data = await res.json()
        return data.tasks
      } catch (err) {
        return Promise.toString(err)
    }
}

export const deleteData = async(id) => {
    console.log(id)
    try {
        const res = await fetch(`${localUrl}/${id}`,{
            method: 'DELETE'
        })
        const data = await res.json()
        console.log(data)
        // return data.tasks
      } catch (err) {
        return Promise.toString(err)
    }
}

export const createItem = async(description, complete) => {
    try {
        await fetch(localUrl,{
            method: 'POST',
            body: JSON.stringify({
                "task": {
                    "description": description, 
                    "complete": complete
                }
            })
        })
      } catch (err) {
        return Promise.toString(err)
    }
}

export const updateItem = async(id, description, complete) => {
    try {
        await fetch(`${localUrl}/${id}`,{
            method: 'PUT',
            body: JSON.stringify({
                "task": {
                    "description": description, 
                    "complete": complete
                }
            })
        })
      } catch (err) {
        return Promise.toString(err)
    }
}