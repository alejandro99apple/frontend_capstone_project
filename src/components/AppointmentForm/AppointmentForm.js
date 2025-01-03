import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log('Formulario enviado');
      
      // Crear el objeto de la cita
      const appointmentData = {
        name,
        phoneNumber,
        selectedSlot,
        selectedDate,
        doctorName,
        doctorSpeciality,
        review:''
      };

      // Verificar si el elemento 'lastAppointment' existe en sessionStorage
      let lastAppointment = sessionStorage.getItem('lastAppointment');

      if (lastAppointment) {
        // Si existe, convertirlo a un array (si no lo es) y añadirle appointmentData
        lastAppointment = JSON.parse(lastAppointment);
        if (!Array.isArray(lastAppointment)) {
          lastAppointment = [lastAppointment];
        }
        lastAppointment.push(appointmentData);
      } else {
        // Si no existe, crear el elemento 'lastAppointment' con el valor de appointmentData
        lastAppointment = [appointmentData];
      }

      // Guardar el array actualizado en sessionStorage
      sessionStorage.setItem('lastAppointment', JSON.stringify(lastAppointment));
      console.log('Appointment Data:', lastAppointment);

      // Llamar al onSubmit proporcionado
      onSubmit(appointmentData);
      
      // Limpiar el formulario
      setName('');
      setPhoneNumber('');
      setSelectedSlot('');
      setSelectedDate('');
    };

    // Get tomorrow's date as minimum date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={minDate}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Preferred Time Slot:</label>
          <select
            id="timeSlot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
            <option value="16:00">04:00 PM</option>
            <option value="17:00">05:00 PM</option>
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;