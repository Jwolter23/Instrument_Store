import Github from "./githublogo.png"
export default function Footer (){
    return(
        <div className="footer-container">
            <div className="footer">
                <a href="https://github.com/Jwolter23/Instrument_Store" target="_blank" className="footer-item githublogo">
                    <p className="color1">Repo</p> 
                <img className="githublogo" src={Github}></img>
                </a>
                <a href="https://github.com/Gohmul" target="_blank" className="footer-item githublogo">
                    <p className="color2">Ryan</p>
                <img className="githublogo" src={Github}></img>
                </a>
                <a href="https://github.com/Jwolter23" target="_blank" className="footer-item githublogo">
                    <p className="color3">Jordan</p>
                <img className="githublogo" src={Github}></img>
                </a>
                <a href="https://github.com/swanmac" target="_blank" className="footer-item githublogo">
                    <p className="color4">Greg</p> 
                <img className="githublogo" src={Github}></img>
                </a>
                <a href="https://github.com/imdadhossain1" target="_blank" className="footer-item githublogo">
                    <p className="color5">Imdad</p> 
                <img className="githublogo" src={Github}></img>
                </a>
            </div>
        </div>
    )
}