import { useState } from 'react'
import HeaderFilterBar from './HeaderFilterBar'
import LocationFilter from './LocationFilter'
import DateFilter from './DateFilter'
import PeoplesFilter from './PeoplesFilter'


function HeaderFilter() {

    const [activeTab, setActiveTab] = useState(null)

    const renderActiveTab = () => {
        switch (activeTab) {
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
            <HeaderFilterBar activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderActiveTab()}
        </div>
    )
}

export default HeaderFilter