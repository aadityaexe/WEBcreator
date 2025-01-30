import { createContext, useState, useContext } from 'react';

// Create context
const ContentContext = createContext();

// Create provider component
export const ContentProvider = ({ children }) => {
    // Add your state values here
    const [content, setContent] = useState({});

    const run = (newData) => {
        setContent((prevContent) => ({
            ...prevContent, // ✅ Keep previous data
            ...newData, // ✅ Update with new data
        }));
        // console.log("Updated Content:", newData); 
    };
    
    // Values to be provided
    const values = {
        content,
        setContent,
        run
    };

    return (
        <ContentContext.Provider value={values}>
            {children}
        </ContentContext.Provider>
    );
};

// Custom hook for using the context
export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};