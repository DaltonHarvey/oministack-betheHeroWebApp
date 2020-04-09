import React, { useState } from 'react';

function OngService() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCty] = useState('');
  const [uf, setUf] = useState('');

  return function create(event) {
    event.preventDefault();
  }

}

export default OngService;