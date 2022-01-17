import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'b9c7d2d32dmsh021a708f79bc398p134264jsn112fb4b87e16'
    } 
  })
  return data
}


  
