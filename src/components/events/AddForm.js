import { React, useState } from 'react'
import { TextField, Select, MenuItem, FilledInput, InputAdornment, FormControl, CircularProgress } from '@material-ui/core';
import {
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers';
import { eventTypes, eventDetails, addEvent, formats } from '../../static/Strings';
import { FaUpload } from 'react-icons/fa';

const AddForm = ({ isLoading, onAdd }) => {
    // event state 
    const [event, setEvent] = useState({
        imageFile: '',
        imageUrl: '',
        title: '',
        types: [],
        location: '',
        desc: '',
        cost: '',
        date: null,
        time: null,
        attenders: [],
        childDate: ''
    })

    // handle pickers and fields 
    const handleChange = (prop) => (e) => {
        prop === 'date' || prop === 'time' ?
            setEvent({ ...event, [prop]: e }) :
            setEvent({ ...event, [prop]: e.target.value });
    };

    // handle file change 
    const handleFileChange = (prop) => (e) => {
        const image = e.target.files[0]
        setEvent({ ...event, [prop]: image });
    }
    // handle cost change
    const handleCostChange = (prop) => (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        setEvent({ ...event, [prop]: e.target.value });
    }
    // disable submit button 
    const buttonDisabled = () => {
        return event.imageFile && event.title && event.types && event.location && event.desc && event.cost && event.date && event.time
    }
    // submitting
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd(event)
        reset();
    }
    // reser form 
    const reset = () => {
        document.getElementById("form").reset();
        setEvent({
            imageFile: '',
            title: '',
            types: [],
            location: '',
            desc: '',
            cost: '',
            date: null,
            time: null,
            attenders: [],
        })
    }
    return (
        <form id="form" name="addEvent" autoComplete="off" className="e-form mt-4" onSubmit={onSubmit}>
            {/* event cover  */}
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="e-form__row row">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{addEvent.EVENT_COVER} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <input
                                accept="image/*"
                                id="imageFile"
                                name="imageFile"
                                className="d-none"
                                type="file"
                                onChange={handleFileChange('imageFile')}
                            />
                            <label htmlFor="imageFile" className="e-upload__field d-flex justify-content-between align-items-center">
                                {
                                    event.imageFile.name ?
                                        <span className="e-upload__label font-16">{event.imageFile.name}</span> :
                                        <span className="e-upload__label font-16 color-text">{addEvent.UPLOAD} <span>*</span></span>
                                }
                                <span className="btn btn-primary btn-primary-upload e-upload__btn"><FaUpload></FaUpload></span>
                            </label>
                        </div>

                    </div>
                    {/* title  */}
                    <div className="e-form__row row  d-flex mt-4">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{eventDetails.TITLE} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <TextField size="small"
                                name="title"
                                value={event.title}
                                placeholder={addEvent.TITLE}
                                className="w-100"
                                variant="outlined"
                                onChange={handleChange('title')} />
                        </div>
                    </div>
                    {/* type  */}
                    <div className="e-form__row row  d-flex mt-4">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{addEvent.TYPES} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <Select
                                variant="outlined"
                                multiple
                                name="types"
                                className="w-100"
                                placeholder="Select"
                                size="small"
                                value={event.types}
                                onChange={handleChange('types')}
                            >
                                {eventTypes.map((type) => (
                                    <MenuItem key={type} value={type} >
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    {/* location  */}
                    <div className="e-form__row row  d-flex mt-4">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{eventDetails.LOCATION} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <TextField name="location"
                                className="w-100"
                                size="small"
                                placeholder={addEvent.LOCATION}
                                variant="outlined"
                                value={event.location}
                                onChange={handleChange('location')}
                            />
                        </div>
                    </div>
                    {/* cost  */}
                    <div className="e-form__row row  d-flex mt-4">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{eventDetails.ADDMISSION_COST} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <FormControl fullWidth size="small" variant="outlined">
                                <FilledInput
                                    placeholder={addEvent.COST}
                                    type="number"
                                    name="cost"
                                    value={event.cost}
                                    onInput={handleCostChange('cost')}

                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </div>
                    </div>
                    {/* description  */}
                    <div className="e-form__row row  d-flex mt-4">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{eventDetails.DESCRIPTION} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <TextField name="desc" multiline size="small" fullWidth placeholder={addEvent.DESC} variant="outlined" rows={5}
                                value={event.desc}
                                onChange={handleChange('desc')} />
                        </div>
                    </div>

                    {/* date picker  */}

                    <div className="e-form__row row  d-flex mt-4">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{eventDetails.DATE} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <KeyboardDatePicker
                                disableToolbar
                                fullWidth
                                id="date"
                                variant="inline"
                                format={formats.DATE}
                                name="date"
                                value={event.date}
                                onChange={handleChange('date')}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </div>
                    </div>

                    {/* time picker  */}

                    <div className="e-form__row row  d-flex mt-4">
                        <div className="col-12 col-md-4">
                            <label className="e-form__label">{eventDetails.TIME} <span>*</span></label>
                        </div>
                        <div className="col-12 col-md-8">
                            <KeyboardTimePicker
                                fullWidth
                                id="time"
                                name="time"
                                value={event.time}
                                onChange={handleChange('time')}
                                color="secondary"
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </div>
                    </div>
                    <div className="e-form__row row  d-flex justify-content-end mt-5">
                        <div className="e-form__submit">
                            {
                                isLoading ?
                                    <button className="btn btn-primary w-130">
                                        <CircularProgress className="text-white" size={30} />
                                    </button> :
                                    <button disabled={!buttonDisabled()} type="submit" className="btn btn-primary w-130" >Publish Event</button>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddForm
