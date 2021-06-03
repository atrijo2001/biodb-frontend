import React, { useContext, useEffect, useRef } from 'react'
import DetailsContext from "../../context/DetailsContext/DetailsContext"



const DetailsFilter = () => {
    const detailsContext = useContext(DetailsContext);
    const {filtered, filterDetails, clearFilter} = detailsContext
    const text = useRef('');
    useEffect(()=>{
        if (filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
          filterDetails(e.target.value);
          console.log(filtered)
        } else {
          clearFilter();
        }
      };
    return (
    <form>
            <input
                style={{width: '100%',
                padding: '12px 20px',
                margin: '8px 0',
                borderRadius: '12px'}}
                ref={text}
                type='text'
                placeholder='Filter States...'
                onChange={onChange}
            />
    </form>
    )
}

export default DetailsFilter
