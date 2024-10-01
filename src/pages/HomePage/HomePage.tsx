import ChangePageButton from "../../components/ChangPageButton/ChangePagButton"
import NavBar from "../../components/NavBar/NavBar"
import PageType, { SetPageType } from "../../types/PageType"

const MainPage = ({setPage, currentPage}:PageType) => {

    return <>
        <NavBar setPage={setPage} currentPage={currentPage} />
        <ChangePageButton setPage={setPage} pageName="Login" />
    </>
}

export default MainPage