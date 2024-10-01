import ChangePageButton from "../../components/ChangPageButton/ChangePagButton"
import NavBar from "../../components/NavBar/NavBar"
import PageType, { SetPageType } from "../../types/PageType"

const LoginPage = ({setPage, currentPage}: PageType) => {

    return <div>
        <NavBar setPage={setPage} currentPage={currentPage} />
        <ChangePageButton pageName="Home" setPage={setPage} />
    </div>
}

export default LoginPage