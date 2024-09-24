import PageType, { getPages, pagePossibleNames } from "../../types/PageType"

type ChangeButtonType = {
    setPage: PageType,
    pageName: pagePossibleNames,
    isPrimary?: boolean
}

const ChangePageButton = ({setPage, pageName, isPrimary = false}: ChangeButtonType) => {

    return <button className={isPrimary ? `primary ${pageName}` : ''} onClick={()=>{setPage(getPages(pageName))}}>
        {pageName}
    </button>
}

export default ChangePageButton