import ChangePageButton from "../../components/ChangPageButton/ChangePagButton"
import NavBar from "../../components/NavBar/NavBar"
import PageType from "../../types/PageType"

const MainPage = ({setPage, currentPage}:{setPage: PageType, currentPage: number}) => {

    return <>
        <NavBar setPage={setPage} currentPage={currentPage} />
        <ChangePageButton setPage={setPage} pageName="Login" />
    </>
}

export default MainPage