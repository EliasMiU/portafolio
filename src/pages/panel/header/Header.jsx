import React, { Component } from "react";

class Header extends Component {
    render(){
        return(<>

        <section className="sect-header">
            <div className="content-item">
                <div>Logo</div>
                <nav>
                    <ul>
                        <li>Config.</li>
                        <li>Avatar</li>
                        <li>...</li>
                    </ul>
                </nav>
            </div>
        </section>
        
        </>)
    }
}

export default Header;