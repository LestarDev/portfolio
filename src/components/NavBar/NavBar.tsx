import PageType, { getPages, pages, SetPageType } from "../../types/PageType"
import ChangePageButton from "../ChangPageButton/ChangePagButton"
import "./NavBar.css"

const NavBar = ({setPage, currentPage}:PageType) => {

    return <nav>
        <ul>
            <div>
                {
                    pages.filter((el)=>getPages(el)!=currentPage&&el!="Home").map((el)=><li key={"navbar"+getPages(el)} >
                        <ChangePageButton pageName={el} setPage={setPage} />
                    </li>)
                }
            </div>
            <li>
                <ChangePageButton pageName="Home" setPage={setPage} isPrimary={true} />
                <input type="checkbox" name="menuCheckBox" id="menuCheckBox" value={"false"} />
                <label htmlFor="menuCheckBox">
                    <span style={{"--menu-position": "1"} as React.CSSProperties}></span>
                    <span className="middle" style={{"--menu-position": "0"} as React.CSSProperties}></span>
                    <span style={{"--menu-position": "-1"} as React.CSSProperties}></span>
                </label>
            </li>
                
            
           
        </ul>
    </nav>
}

export default NavBar