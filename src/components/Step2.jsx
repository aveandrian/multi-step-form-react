import { useState } from "react"

export default function Step2(props){
    const [error, setError] = useState(null)

    function handlePlanSelect(name){
        setError(null)
        props.handleValueChange(props.step, 'planName', name)
    }

    function togglePlan(){
        setError(null)
        props.handleValueChange(props.step, 'isYearly', !props.formData.plan.isYearly)
    }

    function handleSubmit(){
        if(props.formData.plan.planName == "")
            return setError("Please select a plan")
        else props.nextStep()
    }

    return (
    <>
    <div className="step-container">
        <h1 className="step-title">Select your plan</h1>
        <p className="step-description">You have the option of monthly or yearly billing.</p>

        <div className="step-content plan-content">
            <div className="plan-cards-wrapper">
                <div className={`plan-card ${props.formData.plan.planName == "arcade" ? "active" : ""}`}  onClick={()=>handlePlanSelect('arcade')}>
                    <img className="plan-icon" src='src\assets\images\icon-arcade.svg'  alt="Plan icon"/>
                    <div className="plan-info">
                        <h2 className="plan-title">Arcade</h2>
                        <p className="plan-price">${props.formData.plan.isYearly ? props.prices.arcade*10 : props.prices.arcade}/{props.formData.plan.isYearly ? "yr" : "mo"}</p>
                        {props.formData.plan.isYearly && <p className="plan-bonus">2 months free</p>}
                    </div>
                </div>
                <div className={`plan-card ${props.formData.plan.planName == "advanced" ? "active" : ""}`} onClick={()=>handlePlanSelect('advanced')}>
                    <img className="plan-icon" src='src\assets\images\icon-advanced.svg'  alt="Plan icon" />
                    <div className="plan-info">
                        <h2 className="plan-title">Advanced</h2>
                        <p className="plan-price">${props.formData.plan.isYearly ? props.prices.advanced*10 : props.prices.advanced}/{props.formData.plan.isYearly ? "yr" : "mo"}</p>
                        {props.formData.plan.isYearly && <p className="plan-bonus">2 months free</p>}
                    </div>
                </div>
                <div className={`plan-card ${props.formData.plan.planName == "pro" ? "active" : ""}`} onClick={()=>handlePlanSelect('pro')}>
                    <img className="plan-icon" src='src\assets\images\icon-pro.svg' alt="Plan icon" />
                    <div className="plan-info">
                        <h2 className="plan-title">Pro</h2>
                        <p className="plan-price">${props.formData.plan.isYearly ? props.prices.pro*10 : props.prices.pro}/{props.formData.plan.isYearly ? "yr" : "mo"}</p>
                        {props.formData.plan.isYearly && <p className="plan-bonus">2 months free</p>}
                    </div>
                </div>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="slider-wrapper">
                <p className={props.formData.plan.isYearly ? "" : "active"}>Monthly</p>
                <div className="slider" onClick={togglePlan}>
                    <div className={`slider-circle ${props.formData.plan.isYearly ? "yearly" : ""}`}></div>
                </div>
                <p className={props.formData.plan.isYearly ? "active" : ""}>Yearly</p>
            </div>
        </div>
        <div className='step-buttons-container' >
            <button onClick={props.prevStep} className='prev-step-btn'>Go back</button>
            <button onClick={handleSubmit} className='next-step-btn'>Next Step</button>
        </div>
    </div>

        
    </>
    )
}