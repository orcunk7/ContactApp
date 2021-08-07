import {useState} from "react";

function Form({addContacts, contact}){

  const [form,setForm] = useState({fullname:"",phone_number:""});
  
  const onChangeInput = (e) =>{
    setForm({...form, [e.target.name]: e.target.value});
  };
  
  const onSubmit = (e) =>{
    e.preventDefault();//sayfanın yenilenmesini engeller
    if(form.fullname === "" || form.phone_number === ""){
        return false;
    }
    addContacts([...contact,form])

    setForm({fullname:'',phone_number:''});
    console.log(form);
  }



  return (
  <form onSubmit = {onSubmit}>
    <div>
      <input 
      name = "fullname"
       placeholder ="Full Name" 
       onChange ={onChangeInput}
       value = {form.fullname}
       />
    </div>
    <div>
      <input 
      name = "phone_number" 
      placeholder ="Phone"
       onChange ={onChangeInput}
       value = {form.phone_number}
       
       />
    </div>
    <div>
      <button>Add</button>
    </div>
  </form>
  );
}
export default Form;