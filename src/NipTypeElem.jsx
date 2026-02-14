import curveImg from './assets/curve3.png';

export function TheatersElem() {
    return (
        <div className='theatersWrapper'>
            <div className="theatersRedCircle">
                <h2>THEATERS</h2>
                <span>The four traditional theaters from Japan - nogaku, kyogen, kabuki and bunraku.</span>
                <h1>劇場</h1>
            </div>
            <img src={curveImg} className="theatersCurveImg"></img>
        
        </div>

    )
}