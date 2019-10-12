import React, { createContext, useState, useEffect } from "react"

const defaultValues = {
  pageTitle: ""
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("")

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        pageTitle,
        setPageTitle
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}