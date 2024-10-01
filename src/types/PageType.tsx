export type SetPageType = React.Dispatch<React.SetStateAction<number>>

type PageType = {setPage: SetPageType, currentPage: number};

export type pagePossibleNames = "Home" | "Login" | "About" | "Contact";

export const pages: pagePossibleNames[] = ["Home", "Login", "About", "Contact"];

export const getPages = (pageName: pagePossibleNames) => pages.indexOf(pageName) ?? 0

export default PageType