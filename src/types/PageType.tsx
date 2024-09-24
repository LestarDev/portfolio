type PageType = React.Dispatch<React.SetStateAction<number>>

export type pagePossibleNames = "Home" | "Login";

const pages: pagePossibleNames[] = ["Home", "Login"]

export const getPages = (pageName: pagePossibleNames) => pages.indexOf(pageName) ?? 0

export default PageType