import { useState } from 'react'
import HeaderFilterBar from './HeaderFilterBar'
import LocationFilter from './LocationFilter'
import DateFilter from './DateFilter'
import PeoplesFilter from './PeoplesFilter'
import { useContext } from 'react'
import { Context } from '../../../context/ModalContext'

function HeaderFilter() {

    const { activeModal } = useContext(Context)

    const renderActiveTab = () => {
        switch (activeModal) {
            case 'locationType':
                return <LocationFilter />
            case 'startDateType':
                return <DateFilter />
            case 'endDateType':
                return <DateFilter />
            case 'peopleNumberFilter':
                return <PeoplesFilter />
            default:
                return null
        }
    }


    return (
        <div className="relative">
            <HeaderFilterBar  />
            {renderActiveTab()}
        </div>
    )
}

export default HeaderFilter