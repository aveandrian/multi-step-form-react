import { useState } from "react"

export default function Step1(props){
    const [error, setError] = useState({
        name: null,
        email: null,
        phone: null
    })

    function handleChange(e){
        setError(prev => ({...prev, [e.target.name] : null}))
        props.handleValueChange(props.step, e.target.name, e.target.value)
    }

    function handleSubmit(){
        let personalInfo = props.formData.personalInfo
        let errorTemp = {
            name: null,
            email: null,
            phone: null
        }
        if(personalInfo.name == "")
            errorTemp.name='This field is required'
        if(personalInfo.email == "")
            errorTemp.email='This field is required'
        if(personalInfo.phone == "")
            errorTemp.phone='This field is required'
        if(personalInfo.email != "" && !validateEmail(personalInfo.email))
            errorTemp.email = 'Please fill in correct email'
        if(errorTemp.name || errorTemp.email || errorTemp.phone){
            return setError(errorTemp)
        }
        else
            props.nextStep()
    }

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    return (
    <div className="step-container">
        <h1 className="step-title">Personal info</h1>
        <p className="step-description">Please provide your name, email address, and phone number.</p>

        <div className="step-content personal-info-content">
            <div className='input-wrapper'>
                <div className="input-label-container">
                    <label htmlFor="name">Name</label>
                    {error.name && <p className="error">{error.name}</p>}

                </div>
                <input className={error.name ? "input-error" : ""} name="name" type="text" value={props.formData.personalInfo.name} onChange={handleChange} placeholder="e.g. Stephen King" />
            </div>
            <div className="input-wrapper">
                <div className="input-label-container">
                    <label htmlFor="email">Email Address</label>
                    {error.email && <p className="error">{error.email}</p>}
                </div>
                <input className={error.email ? "input-error" : ""} name="email" type="email" value={props.formData.personalInfo.email} onChange={handleChange} placeholder="e.g. stephenking@lorem.com"/>
            </div>
            <div className="input-wrapper">
                <div className="input-label-container">
                    <label>Phone Number</label>
                    {error.phone && <p className="error">{error.phone}</p>}
                </div>
                <input className={error.phone ? "input-error" : ""} name="phone" type="phone" value={props.formData.personalInfo.phone} onChange={handleChange} placeholder="e.g. +1 234 567 890" />
            </div>
        </div>
        <div className='step-buttons-container'>
            {/* {step > 1 &&<button onClick={prevStep} className='prev-step-btn'>Go back</button>} */}
            <button onClick={handleSubmit} className='next-step-btn'>Next Step</button>
          </div>
    </div>
    )
}