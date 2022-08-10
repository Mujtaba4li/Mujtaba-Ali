import axios from 'axios';
const baseURL='http://localhost:5000';
// ========================portfolio===============================
const addportfolio=baseURL+'/api/portfolio/add';
const getportfolio=baseURL+'/api/portfolio/get';
// get request
// console.log("To get portfolio use:"+getportfolio)
export const  fetchPortfolio=()=>axios.get(getportfolio); 
// create request

// =======================testimonials============================
const addtestimonial=baseURL+'/api/testimonial/add'
const gettestimonial=baseURL+'/api/testimonial/get'

// get request
console.log("To get testimonials use:"+gettestimonial)
export const  fetchTestimonial=()=>axios.get(gettestimonial); 
// create request

