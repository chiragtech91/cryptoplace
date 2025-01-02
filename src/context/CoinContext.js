const { createContext, useState, useEffect } = require("react");

export const CoinContext = createContext();

const CoinContextProvider = (props)=> {
    const [allCoin, setAllCoin] = useState([])
    const [currency, setCurrency] = useState({
        name : 'usd',
        symbol : '$'
    })

    const fetchAllCoin = async ()=> {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-wPcwn9so6ybsTcKj5dLN2KFi'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    }

    useEffect(()=> {
        fetchAllCoin();
    }, [currency])
    
    const contextValue = {
        allCoin, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;
