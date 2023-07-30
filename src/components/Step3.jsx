
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

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
                <div className={`addon-selector ${props.formData.addons.service ? "selected"  : ""}`} >
                    <FontAwesomeIcon icon={faCheck} className="check-icon"/>
                </div>
                <div className="addon-description">
                    <p className="addon-title">Online service</p>
                    <p className="addon-text">Access to multiplayer games</p>    
                </div>  
                <p className="addon-price">+${props.formData.plan.isYearly ? `${props.prices.service*10}/yr` : `${props.prices.service}/mo`}</p>          
            </div>
            <div className={`addon-item ${props.formData.addons.storage ? "selected"  : ""}`} onClick={() => handleAddonSelect('storage')}>
                <div className={`addon-selector ${props.formData.addons.storage ? "selected"  : ""}`}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon"/>
                </div>
                <div className="addon-description">
                    <p className="addon-title">Larger storage</p>
                    <p className="addon-text">Extra 1TB of cloud save</p>    
                </div>  
                <p className="addon-price">+${props.formData.plan.isYearly ? `${props.prices.storage*10}/yr` : `${props.prices.storage}/mo`}</p>          
            </div>
            <div className={`addon-item ${props.formData.addons.customProfile ? "selected"  : ""}`} onClick={() => handleAddonSelect('customProfile')}>
                <div className={`addon-selector ${props.formData.addons.customProfile ? "selected"  : ""}`}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon"/>
                </div>
                <div className="addon-description">
                    <p className="addon-title">Customizable Profile</p>
                    <p className="addon-text">Custom theme on your profile</p>    
                </div>  
                <p className="addon-price">+${props.formData.plan.isYearly ? `${props.prices.customProfile*10}/yr` : `${props.prices.customProfile}/mo`}</p>          
            </div>
        </div>
        <div className='step-buttons-container' >
            <button onClick={props.prevStep} className='prev-step-btn'>Go back</button>
            <button onClick={props.nextStep} className='next-step-btn'>Next Step</button>
        </div>
    </div>
        
    </>
    )
}