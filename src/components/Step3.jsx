
export default function Step3(props){
    function handleAddonSelect(name){
        props.handleValueChange(props.step, name, !props.formData.addons[name])
    }

    return (
    <>
    <div className="step-container">
        <h1 className="step-title">Pick add-ons</h1>
        <p className="step-description">Add-ons help enhance your gaming experience.</p>

        <div className="step-content addons-content">
            <div className={`addon-item ${props.formData.addons.service ? "selected"  : ""}`} onClick={() => handleAddonSelect('service')}>
                <div className={`addon-selector ${props.formData.addons.service ? "selected"  : ""}`} ></div>
                <div className="addon-description">
                    <p className="addon-title">Online service</p>
                    <p className="addon-text">Access to multiplayer games</p>    
                </div>  
                <p className="addon-price">+$1/mo</p>          
            </div>
            <div className={`addon-item ${props.formData.addons.storage ? "selected"  : ""}`} onClick={() => handleAddonSelect('storage')}>
                <div className={`addon-selector ${props.formData.addons.storage ? "selected"  : ""}`}></div>
                <div className="addon-description">
                    <p className="addon-title">Larger storage</p>
                    <p className="addon-text">Extra 1TB of cloud save</p>    
                </div>  
                <p className="addon-price">+$2/mo</p>          
            </div>
            <div className={`addon-item ${props.formData.addons.customProfile ? "selected"  : ""}`} onClick={() => handleAddonSelect('customProfile')}>
                <div className={`addon-selector ${props.formData.addons.customProfile ? "selected"  : ""}`}></div>
                <div className="addon-description">
                    <p className="addon-title">Customizable Profile</p>
                    <p className="addon-text">Custom theme on your profile</p>    
                </div>  
                <p className="addon-price">+$2/mo</p>          
            </div>
        </div>
    </div>
        
    </>
    )
}