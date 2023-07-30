

export default function Step4(props){
    return (
    <>
     <div className="step-container">
        <h1 className="step-title">Finishing up</h1>
        <p className="step-description">Double-check everything looks OK before confirming.</p>
        
        <div className="step-content summary-content">
            {/* <!-- Dynamically add subscription and add-on selections here --> */}
            <div className="summary-wrapper">
                <div className="summary-subscription">
                    <div className="summary-subscription-description">
                        <p className="summary-subscription-title">{props.formData.plan.planName} {`(${props.formData.plan.isYearly ? "Yearly" : "Monthly"})`}</p>
                        <p className="summary-subscription-change" onClick={()=>props.handleChangeStep(2)}>Change</p>
                    </div>
                    <p className="summary-subscription-price">${props.formData.plan.isYearly ? `${props.planMonthlyPrices[props.formData.plan.planName]*10}/yr` : `${props.planMonthlyPrices[props.formData.plan.planName]}/mo` }</p>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-addons">
                    {props.formData.addons.service && <div className="summary-addon-wrapper">
                        <p className="summary-addon-title">Online service</p>
                        <p className="summary-addon-price">+${props.formData.plan.isYearly ? `${props.addonMonthlyPrices.service*10}/yr` :  `${props.addonMonthlyPrices.service}/mo` }</p>
                    </div>}
                    {props.formData.addons.storage && <div className="summary-addon-wrapper">
                        <p className="summary-addon-title">Larger storage</p>
                        <p className="summary-addon-price">+${props.formData.plan.isYearly ? `${props.addonMonthlyPrices.storage*10}/yr` :  `${props.addonMonthlyPrices.storage}/mo` }</p>
                    </div>}
                    {props.formData.addons.customProfile && <div className="summary-addon-wrapper">
                        <p className="summary-addon-title">Customizable profile</p>
                        <p className="summary-addon-price">+${props.formData.plan.isYearly ? `${props.addonMonthlyPrices.customProfile*10}/yr` :  `${props.addonMonthlyPrices.customProfile}/mo` }</p>
                    </div>}
                </div>
            </div>
            <div className="total">
                <p className="total-title">Total ({props.formData.plan.isYearly ? "per year" : "per month"})</p>
                <p className="total-price">+${props.total}/{props.formData.plan.isYearly ? "yr" : "mo" }</p>
            </div>

        </div>
        <div className='step-buttons-container' >
            <button onClick={props.prevStep} className='prev-step-btn'>Go back</button>
            <button onClick={props.nextStep} className='next-step-btn confirm'>Confirm</button>
        </div>
    </div>
        


    </>
    )
}