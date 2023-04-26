import './SignIn.scss';
import SurveyValueCheckBoxes from './SurveyValueCheckBoxes';
import './Values.css';

const Values = (props) => {
    return <div className="company-main">

        <div className="signin-container value-container">
            <h3 className="company-info">Company information</h3>

            <div className="company-infoform">
                <p>Please indicate the importance of the following business value drivers to your business (Please ensure the importance level is unique to each criteria)</p>
            </div>
            <div className='value-radio-survey'>
                <p></p>
                <p>Extremely important</p>
                <p>Highly important</p>
                <p>Quite important</p>
                <p>Moderately important</p>
                <p>Relatively important</p>
                <p>Slightly important</p>
                <p>Not so important</p>
            </div>
            <div className='radio-left-tags'>
                <p className='shadow-left-tag'>Operational excellence</p>
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <p className='shadow-left-tag'>Product leadership</p>
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <p className='shadow-left-tag'>Customer intimacy</p>
                <input className='radio-btn shadow-left-tag' type="radio" />
                <input className='radio-btn shadow-left-tag' type="radio" />
                <input className='radio-btn shadow-left-tag' type="radio" />
                <input className='radio-btn shadow-left-tag' type="radio" />
                <input className='radio-btn shadow-left-tag' type="radio" />
                <input className='radio-btn shadow-left-tag' type="radio" />
                <input className='radio-btn shadow-left-tag' type="radio" />
                <p className='shadow-left-tag'>Environment saving</p>
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
                <input className='radio-btn' type="radio" />
            </div>
            <SurveyValueCheckBoxes />
            <div className='btn-nav-div comp-btn-div value-btn-div'>
                <button className='btn-nav comp-btn' onClick={props.prevClick}>Previous</button>
                <button className='btn-nav comp-btn' onClick={props.completeClick}>Complete account</button>
            </div>
        </div>
    </div>
}
export default Values;