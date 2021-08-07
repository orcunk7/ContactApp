import React from "react";
import List from './List';
import Form from './Form';
import {useState, useEffect} from "react";

function Contacts(){

  const [contacts, setContacts] = useState([]);//form componentinden list componnetine veri geçişi yapmak için oluşturulan bir state , form componentinden bi üst Contacta taşınıyor sonra liste verilecek.

useEffect(()=>{
 console.log(contacts)
},[contacts]);//contacts güncellendiğinde bu methoda girecek




  return (<div>
    <List contacts = {contacts}/>
    <Form  addContacts = {setContacts} contact = {contacts}/>
  </div>);
}
export default Contacts;