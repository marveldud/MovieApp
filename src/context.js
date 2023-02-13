import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;


// CREATE CONTEXT

const AppContext = React.createContext();
// WE NEED TO CREATE PROVIDER FUNCTION

const AppProvider = ({children}) => {

    const [isLoading, setIsLoadng] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show : "false" , msg : ""});

   const getMovies = async (url) =>{
         try {

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            
            if(data.Response === "true"){
                setIsLoadng(false);
                setMovie(data.Search);
            }else{
                setIsError({
                    show : true,
                    msg : data.error,
                });
            }

         } catch (error) {
            console.log(error)
            
         }
   }
 




    useEffect (() =>{
        getMovies(API_URL);
    },[])

    return <AppContext.Provider value={{movie, isLoading , isError}}>
        {children}
        </AppContext.Provider>;
};

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext ,AppProvider, useGlobalContext};