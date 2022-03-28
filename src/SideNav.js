import './SideNav.css'

function SideNav(){
    return(
        <div className="App">
            <div className="h1-responsive">
                <ul className="d-flex flex-column">
                    <li className="red p-3">Home</li>
                    <li className="blue p-3">about</li>
                    <li className="green p-3">contact</li>
                    <li className="brown p-3">USer</li>
                    <li className="black p-3">store</li>
                </ul>

            </div>
        </div>
    );
}

export default SideNav;