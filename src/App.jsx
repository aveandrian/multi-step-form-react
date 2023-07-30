import { useEffect, useState } from 'react'
import './App.css'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'

const planMonthlyPrices = {
  arcade: 9,
  advanced: 12,
  pro: 15
}

const addonMonthlyPrices = {
  service: 1,
  storage: 2,
  customProfile: 2
}

function App() {
  const [step, setStep] = useState(1)
  const [total, setTotal] = useState(0)
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: ""
    },
    plan: {
      planName: '',
      isYearly: false
    },
    addons: {
      service: false,
      storage: false,
      customProfile: false
    },
  })

  useEffect(()=> {
    let totalPrice = formData.plan.isYearly ? planMonthlyPrices[formData.plan.planName]*10 : planMonthlyPrices[formData.plan.planName]
    for (let key in formData.addons) {
      if(formData.addons[key]){
        let addonPrice = formData.plan.isYearly ? addonMonthlyPrices[key]*10 : addonMonthlyPrices[key]
        totalPrice+=addonPrice
      }
    }
    setTotal(totalPrice)
  }, [formData.plan, formData.addons])
  
  function handleChangeStep(number){ 
    setStep(number)
  }

  function handleValueChange(stepName, valueName, value){
    setFormData(prev => ({...prev, [stepName]: {...prev[stepName], [valueName]: value} }))
  }

  function renderStep() {
    switch(step) {
      case 1:
        return <Step1 formData={formData} step={'personalInfo'} handleValueChange={handleValueChange} nextStep={nextStep}/>;
      case 2:
        return <Step2 formData={formData} step={'plan'} handleValueChange={handleValueChange} nextStep={nextStep} prevStep={prevStep} prices={planMonthlyPrices}/>;
      case 3:
        return <Step3 formData={formData} step={'addons'} handleValueChange={handleValueChange} nextStep={nextStep} prevStep={prevStep} prices={addonMonthlyPrices}/>;
      case 4:
        return <Step4 formData={formData} handleChangeStep={handleChangeStep} nextStep={nextStep} prevStep={prevStep} total={total} planMonthlyPrices={planMonthlyPrices} addonMonthlyPrices={addonMonthlyPrices} />;
      case 5:
        return <Step5 formData={formData} handleChangeStep={handleChangeStep} nextStep={nextStep} prevStep={prevStep} />;
      default:
        return <Step1 />;
    }
  }

  function nextStep(){
    setStep(prev => prev+1)
  }

  function prevStep(){
    setStep(prev => prev-1)
  }

  return (
    <>
      <main>
        <section className='sidebar'>
          <div className='step-item'>
            <div className={`step-number ${step == 1 ? "active" : ""}`}>1</div>
            <div className='step-text'>
              <p className='sidebar-step-title'>Step 1</p>
              <p className='sidebar-step-description'>Your info</p>
            </div>
          </div>
          <div className='step-item'>
            <div className={`step-number ${step == 2 ? "active" : ""}`}>2</div>
            <div className='step-text'>
              <p className='sidebar-step-title'>Step 2</p>
              <p className='sidebar-step-description'>Select plan</p>
            </div>
          </div>
          <div className='step-item'>
            <div className={`step-number ${step == 3 ? "active" : ""}`}>3</div>
            <div className='step-text'>
              <p className='sidebar-step-title'>Step 3</p>
              <p className='sidebar-step-description'>Add-ons</p>
            </div>
          </div>
          <div className='step-item'>
            <div className={`step-number ${step > 3 ? "active" : ""}`}>4</div>
            <div className='step-text'>
              <p className='sidebar-step-title'>Step 4</p>
              <p className='sidebar-step-description'>Summary</p>
            </div>
          </div>
        </section>
        <section className='step-section'>
          {renderStep()}
        </section>

      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </div>
    </>
  )
}

export default App
