import ChangePageButton from "../../components/ChangPageButton/ChangePagButton"
import PageType from "../../types/PageType"

const MainPage = ({setPage}:{setPage: PageType}) => {

    return <div>
        <ChangePageButton setPage={setPage} pageName="Login" />
    </div>
}

export default MainPage