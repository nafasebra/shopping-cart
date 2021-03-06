import React, { useEffect, useRef, useState } from 'react'

// import the style of this component
import './paymentSection.css';


function PaymentSection() {
    const [ bankAccount, setBankAccount ] = useState('visa');

    const [cardNumber, setCardNumber] = useState();
    const [yearDate, setYearDate] = useState();
    const [monthDate, setMonthDate] = useState();
    const [dayDate, setDayDate] = useState();
    const [cvv2Number, setCvv2Number] = useState();

    const txtCardNumber = useRef();
    
    const storeOnlyNumber = (evet, callback) => {
        let value = evet.target.value;
        let regex = /^[0-9]*$/;

        value.match(regex) && callback(value);
    }

    const maskInputCardNumber = () => {
        const cardValue = txtCardNumber.current.value.replace(/\D/g, '')
        .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

        txtCardNumber.current.value = !cardValue[2]
        ? cardValue[1] : `${cardValue[1]}-${cardValue[2]}${(`${cardValue[3] ? `-${cardValue[3]}` : ''}`)}${(`${cardValue[4] ? `-${cardValue[4]}` : ''}`)}`;

        const number = txtCardNumber.current.value.replace(/(\D)/g, '');
        setCardNumber(number);
    }

    useEffect(() => {
        maskInputCardNumber();
    }, [cardNumber])

    return (
        <div className="payment__container">
            <div className="dote__button"></div>
            <div className="payment">
                <form action="">
                    <div className="payment__body">
                        <h2 className="payment__title">Card Details</h2>
                        <div>
                            <p>Select Card Type</p>
                            <ul className="bank-account__list">
                                <li className={`bank-account__item ${bankAccount === 'visa' && "active"}`}
                                    onClick={() => setBankAccount('visa')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.732 141.732"><g fill="currentColor"><path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z"/></g><path d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z" fill="currentColor"/><path fill="none" d="M0 0h141.732v141.732H0z"/></svg>
                                </li>
                                <li className={`bank-account__item ${bankAccount === 'mastercard' && "active"}`}
                                    onClick={() => setBankAccount('mastercard')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.407 108">
                                        <rect x="60.4117" y="25.6968" width="31.5" height="56.6064" fill="currentColor"/>
                                        <path d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z" transform="translate(-319.79649 -252)" fill="currentColor"/>
                                        <path d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z" transform="translate(-319.79649 -252)" fill="currentColor"/>
                                        <path d="M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z" transform="translate(-319.79649 -252)" fill="currentColor"/>
                                    </svg>
                                </li>
                                <li className={`bank-account__item ${bankAccount === 'verve' && "active"}`}
                                    onClick={() => setBankAccount('verve')}
                                >
                                    <svg viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="verve" fillRule="nonzero">
                                                <circle id="Oval" fill="currentColor" cx="156.26347" cy="215.5" r="115.26347"></circle>
                                                <path d="M156.26347,264.87251 C130.48369,206.43174 111.57857,151.84021 111.57857,151.84021 L72.05384,151.84021 C72.05384,151.84021 96.11071,221.91184 140.79561,309.54065 L171.73134,309.54065 C216.41624,221.91184 240.47311,151.84021 240.47311,151.84021 L200.94837,151.84021 C200.94837,151.84021 182.04325,206.43174 156.26347,264.87251 Z" id="Shape" fill="none"></path>
                                                <path d="M708.04515,257.60566 L630.71641,257.60566 C630.71641,257.60566 632.43441,283.3869 666.80307,283.3869 C683.98685,283.3869 701.17192,278.22677 701.17192,278.22677 L704.60925,305.72097 C704.60925,305.72097 687.42418,312.59491 663.36588,312.59491 C628.99845,312.59491 598.06688,295.41041 598.06688,247.29525 C598.06688,209.48978 622.12375,185.4322 656.4926,185.4322 C708.04515,185.4322 711.48248,236.98469 708.04515,257.60566 Z M654.77471,209.48978 C632.43436,209.48978 630.71641,233.54736 630.71641,233.54736 L678.83158,233.54736 C678.83158,233.54736 677.11363,209.48978 654.77471,209.48978 Z" id="Shape" fill="currentColor"></path>
                                                <path d="M442.3337,216.74823 L447.48884,189.25332 C447.48884,189.25332 407.67636,177.17202 375.31538,199.56388 L375.31538,309.54067 L409.68552,309.54067 L409.68281,220.18485 C423.42925,209.87443 442.3337,216.74823 442.3337,216.74823 Z" id="Shape" fill="currentColor"></path>
                                                <path d="M348.41613,257.60566 L271.08739,257.60566 C271.08739,257.60566 272.80539,283.3869 307.17405,283.3869 C324.35783,283.3869 341.54148,278.22677 341.54148,278.22677 L344.97881,305.72097 C344.97881,305.72097 327.79517,312.59491 303.73687,312.59491 C269.36802,312.59491 238.43649,295.41041 238.43649,247.29525 C238.43649,209.48978 262.49479,185.4322 296.86364,185.4322 C348.41613,185.4322 351.852,236.98469 348.41613,257.60566 Z M295.14426,209.48978 C272.80534,209.48978 271.08739,233.54736 271.08739,233.54736 L319.20256,233.54736 C319.20256,233.54736 317.4846,209.48978 295.14426,209.48978 Z" id="Shape" fill="currentColor"></path>
                                                <path d="M525.80355,268.32373 C515.12048,242.341853 506.501709,215.55843 500.02729,188.22223 L465.66129,188.22677 C465.66129,188.22677 482.845,254.57171 512.05993,309.5462 L539.54717,309.5462 C568.76212,254.57171 585.94581,188.239 585.94581,188.239 L551.57981,188.239 C545.103957,215.569341 536.48521,242.34708 525.80355,268.32373 Z" id="Shape" fill="currentColor"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="form-control">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input 
                                type="text" 
                                // maxLength={16}
                                // value={cardNumber}
                                ref={txtCardNumber}
                                onChange={() => maskInputCardNumber()}
                            />
                        </div>
                        <div className="row little-inputs">
                            <div className="two-col__item form-control">
                                <label htmlFor="year">Expiry Date</label>
                                <div className="date__input">
                                    <input 
                                        type="text" 
                                        id="year" 
                                        maxLength={2} 
                                        value={yearDate}
                                        onChange={(e) => storeOnlyNumber(e, setYearDate.bind(this))}
                                    />
                                    <span>/</span>
                                    <input 
                                        type="text" 
                                        id="month" 
                                        maxLength={2} 
                                        value={monthDate}
                                        onChange={(e) => storeOnlyNumber(e, setMonthDate.bind(this))}
                                    />
                                    <span>/</span>
                                    <input 
                                        type="text" 
                                        id="day" 
                                        maxLength={2} 
                                        value={dayDate}
                                        onChange={(e) => storeOnlyNumber(e, setDayDate.bind(this))}
                                    />
                                </div>
                            </div>
                            <div className="two-col__item form-control">
                                <label htmlFor="cvv" >CVV</label>
                                <input 
                                    type="text" 
                                    id="cvv" 
                                    maxLength={3} 
                                    value={cvv2Number}
                                    onChange={(e) => storeOnlyNumber(e, setCvv2Number.bind(this))}
                                />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className="payment__button">Checkout</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentSection;
