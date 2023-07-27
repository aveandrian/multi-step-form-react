
export default function Step1(props){
    function handleChange(e){
        props.handleValueChange(props.step, e.target.name, e.target.value)
    }
    return (
    <div className="step-container">
        <h1 className="step-title">Personal info</h1>
        <p className="step-description">Please provide your name, email address, and phone number.</p>

        <div className="step-content personal-info-content">
            <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input name="name" type="text" value={props.formData.personalInfo.name} onChange={handleChange} placeholder="e.g. Stephen King" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Email Address</label>
                <input name="email" type="email" value={props.formData.personalInfo.email} onChange={handleChange} placeholder="e.g. stephenking@lorem.com"/>
            </div>
            <div className="input-wrapper">
                <label>Phone Number</label>
                <input name="phone" type="phone" value={props.formData.personalInfo.phone} onChange={handleChange} placeholder="e.g. +1 234 567 890" />
            </div>
        </div>
    </div>
    )
}