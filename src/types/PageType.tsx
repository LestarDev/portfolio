type PageType = React.Dispatch<React.SetStateAction<number>>

export type pagePossibleNames = "Home" | "Login" | "About" | "Contact";

export const pages: pagePossibleNames[] = ["Home", "Login", "About", "Contact"]

export const getPages = (pageName: pagePossibleNames) => pages.indexOf(pageName) ?? 0

export default PageType