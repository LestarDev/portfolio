import ChangePageButton from "../../components/ChangPageButton/ChangePagButton"
import NavBar from "../../components/NavBar/NavBar"
import PageType from "../../types/PageType"

type LoginPageType = {
    setPage: PageType,
    currentPage: number
}

const LoginPage = ({setPage, currentPage}: LoginPageType) => {

    return <div>
        <NavBar setPage={setPage} currentPage={currentPage} />
        <ChangePageButton pageName="Home" setPage={setPage} />
    </div>
}

export default LoginPage