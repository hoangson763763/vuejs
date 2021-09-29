import axios from 'axios'
const url = 'http://127.0.0.1:8000/api/'
// const token =  window.localStorage.getItem('token')

export default {	
	get(apiUrl,token){
		return axios.get(url + apiUrl,
			{ headers: { Authorization: 'Bearer ' +  token } }
		)
	},
	post(apiUrl,data){
		return axios.post(url + apiUrl,data)
	}
	
}