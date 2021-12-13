import React from 'react'

const SubtotalContext = React.createContext({
    subtotal: 0,
    setSubtotal: () => {}
});

export default SubtotalContext;
