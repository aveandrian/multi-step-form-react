
export default function Step2(props){
    function handlePlanSelect(e){
        props.handleValueChange(props.step, 'planName', e.target.getAttribute('name'))
    }

    function togglePlan(){
        props.handleValueChange(props.step, 'isYearly', !props.formData.plan.isYearly)
    }

    return (
    <>
    <div className="step-container">
        <h1 className="step-title">Select your plan</h1>
        <p className="step-description">You have the option of monthly or yearly billing.</p>

        <div className="step-content plan-content">
            <div className="plan-cards-wrapper">
                <div className={`plan-card ${props.formData.plan.planName == "arcade" ? "active" : ""}`} name="arcade" onClick={handlePlanSelect}>
                    <img className="plan-icon" src='src\assets\images\icon-arcade.svg' />
                    <h2 className="plan-title">Arcade</h2>
                    <p className="plan-price">$9/mo</p>
                    {props.formData.plan.isYearly && <p className="plan-bonus">2 months free</p>}
                </div>
                <div className={`plan-card ${props.formData.plan.planName == "advanced" ? "active" : ""}`} name="advanced" onClick={handlePlanSelect}>
                    <img className="plan-icon" src='src\assets\images\icon-advanced.svg' />
                    <h2 className="plan-title">Advanced</h2>
                    <p className="plan-price">$12/mo</p>
                    {props.formData.plan.isYearly && <p className="plan-bonus">2 months free</p>}
                </div>
                <div className={`plan-card ${props.formData.plan.planName == "pro" ? "active" : ""}`} name="pro" onClick={handlePlanSelect}>
                    <img className="plan-icon" src='src\assets\images\icon-pro.svg' />
                    <h2 className="plan-title">Pro</h2>
                    <p className="plan-price">$15/mo</p>
                    {props.formData.plan.isYearly && <p className="plan-bonus">2 months free</p>}
                </div>
            </div>
            <div className="slider-wrapper">
                <p>Monthly</p>
                <div className="slider" onClick={togglePlan}>
                    <div className={`slider-circle ${props.formData.plan.isYearly ? "yearly" : ""}`}></div>
                </div>
                <p>Yearly</p>
            </div>
        </div>
    </div>

        
    </>
    )
}