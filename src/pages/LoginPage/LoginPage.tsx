import ChangePageButton from "../../components/ChangPageButton/ChangePagButton"
import PageType from "../../types/PageType"

type LoginPageType = {
    setPage: PageType
}

const LoginPage = ({setPage}: LoginPageType) => {

    return <div>
        <ChangePageButton pageName="Home" setPage={setPage} />
    </div>
}

export default LoginPage