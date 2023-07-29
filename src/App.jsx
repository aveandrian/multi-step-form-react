import { useState } from 'react'
import './App.css'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'

function App() {
  const [step, setStep] = useState(1)
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
    }
  })

  function handleValueChange(stepName, valueName, value){
    setFormData(prev => ({...prev, [stepName]: {...prev[stepName], [valueName]: value} }))
  }

  console.log(formData)

  function renderStep() {
    console.log(step)
    switch(step) {
      case 1:
        return <Step1 formData={formData} step={'personalInfo'} handleValueChange={handleValueChange}/>;
      case 2:
        return <Step2 formData={formData} step={'plan'} handleValueChange={handleValueChange}/>;
      case 3:
        return <Step3 formData={formData} step={'addons'} handleValueChange={handleValueChange}/>;
      case 4:
        return <Step4 />;
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
            <div className={`step-number ${step == 4 ? "active" : ""}`}>4</div>
            <div className='step-text'>
              <p className='sidebar-step-title'>Step 4</p>
              <p className='sidebar-step-description'>Summary</p>
            </div>
          </div>
        </section>
        <section className='step-section'>
          {renderStep()}
          <div className='step-buttons-container'>
            {step > 1 &&<button onClick={prevStep} className='prev-step-btn'>Go back</button>}
            <button onClick={nextStep} className='next-step-btn'>Next Step</button>
          </div>
        </section>

      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
