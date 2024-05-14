import React from 'react'
import axios from 'axios'
import icon from '../icons/icon4.png'
import { Header } from '../components/Header'
import arrows from '../icons/arrows.png'
import { CustomSlider } from '../components/CustomSlider'

export function Diabetes() {
  const uri = "http://127.0.0.1:5000"

  const [data, setData] = React.useState({
    pregnancies: 0,
    glucose: 0,
    blood_presure: 0,
    skin_thickness: 0,
    insulin: 0,
    bmi: 0,
    diabetes_function: 0,
    age: 0
  })

  const [resultData, setResultData] = React.useState({
    result: ""
  })

  const [loading, setLoading] = React.useState(false)

  function handleChange(event) {
    const {name, value} = event.target
    setData(prevData => {
      return {
        ...prevData, 
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(data)
    setResultData({ result: "" })
    setLoading(true)
    setTimeout(() => {
      axios.post(uri + "/diabetes/check", data)
      .then(msg => {
        console.log(msg.data)
        setResultData(msg.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
    }, 3000)
  }

  const questionmarkStyles = loading ? "questionmarks bounce" : "questionmarks"
  const resultStyles = resultData.result === "positive" ? "diabetes-result positive-result" : resultData.result === "negative" ? "diabetes-result negative-result" : "diabetes-result"

  return (
      <div>
        <Header title={["Diabetes", "Risk", "Check"]} subtitle={["using atrificial", "inteligence"]} description="" icon={icon} iconBig={false} home={false} />
        <div className="diabetes-paragraph">
          <div className="w-[70%]" >
            To predict your risk of diabetes, our model needs certain data from you. Follow the steps and  let  AI analyzes patterns and trends to generate a prediction.
          </div>
          <img className="w-[7rem]" src={arrows} />
        </div>
        <div className="flex flex-col items-center mb-[10rem]" >
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="diabetes-panel" >
              <div className="diabetes-panel-element">
                <CustomSlider name="pregnancies" value={data.pregnancies} handleChange={handleChange} step={1} marks={true} min={0} max={20} description={"number of pregnancies"}/>
              </div>
              <div className="diabetes-panel-element">
                <CustomSlider name="glucose" value={data.glucose} handleChange={handleChange} step={1} marks={false} min={0} max={200} description={"Plasma glucose concentration over 2 hours in an oral glucose tolerance test"}/>
              </div>
              <div className="diabetes-panel-element">
                <CustomSlider name="blood_presure" value={data.blood_presure} handleChange={handleChange} step={1} marks={false} min={0} max={130} description={"Diastolic blood pressure (mm/Hg)"}/>
              </div>
              <div className="diabetes-panel-element">
                <CustomSlider name="skin_thickness" value={data.skin_thickness} handleChange={handleChange} step={1} marks={false} min={0} max={100} description={"Triceps skin fold thickness (mm)"}/>
              </div>
              <div className="diabetes-panel-element">
                <CustomSlider name="insulin" value={data.insulin} handleChange={handleChange} step={1} marks={false} min={0} max={900} description={"2-Hour serum insulin (mu U/ml)"}/>
              </div>
              <div className="diabetes-panel-element">
                <CustomSlider name="bmi" value={data.bmi} handleChange={handleChange} step={0.1} marks={false} min={0} max={70} description={"Body mass index"}/>
              </div>
              <div className="diabetes-panel-element">
                <CustomSlider name="diabetes_function" value={data.diabetes_function} handleChange={handleChange} step={0.01} marks={false} min={0.08} max={2.5} description={"Diabetes pedigree function (a function which scores likelihood of diabetes based on family history"}/>
              </div>
              <div className="diabetes-panel-element">
                <CustomSlider name="age" value={data.age} handleChange={handleChange} step={1} marks={false} min={0} max={100} description={"age in years"}/>
              </div>
            </div>
            <button className="btn">send</button>
          </form>
          <div className={resultStyles}>
            {
              resultData.result === "" ?
              <div className={questionmarkStyles}>
                <div>?</div>
                <div>?</div>
                <div>?</div>
              </div> :
              <div className="result-text">{resultData.result}</div>
            }
          </div>
        </div>
      </div>
  )
}
