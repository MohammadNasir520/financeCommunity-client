import { async } from "@firebase/util";

export const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImageBBhost_key}`

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json()
    return data.data.url;
}