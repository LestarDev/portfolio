import PageType, { getPages, pagePossibleNames, SetPageType } from "../../types/PageType"

type ChangeButtonType = {
    setPage: SetPageType,
    pageName: pagePossibleNames,
    isPrimary?: boolean
}

const ChangePageButton = ({setPage, pageName, isPrimary = false}: ChangeButtonType) => {

    return <button className={isPrimary ? `primary ${pageName}` : ''} onClick={()=>{setPage(getPages(pageName))}}>
        {pageName}
    </button>
}

export default ChangePageButton