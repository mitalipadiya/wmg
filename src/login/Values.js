import './SignIn.scss';
import './Values.css';

const Values = (props) => {
    return <div className="company-main">

        <div className="signin-container">
            <h3 className="company-info">Company information</h3>

            <div className="company-infoform">
               
            </div>
                <div className='btn-nav-div comp-btn-div'>
                    <button className='btn-nav comp-btn' onClick={props.prevClick}>Previous</button>
                    <button className='btn-nav comp-btn' onClick={props.completeClick}>Complete account</button>
                </div>
        </div>

    </div>
}
export default Values;