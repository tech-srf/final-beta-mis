import axios from 'axios'

const url = 'http://localhost:5000/signup';

export const fetchSignup = () => axios.get(url);