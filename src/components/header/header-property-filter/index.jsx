import HeaderFilterBar from './HeaderFilterBar'
import LocationFilter from './LocationFilter'
import DateFilter from './DateFilter'
import PeoplesFilter from './PeoplesFilter'
import { useContext, useState } from 'react'
import { Context } from '../../../context/ModalContext'

function HeaderFilter() {

    const { activeModal } = useContext(Context)

    const [filters, setFilters] = useState({
        location: "",
        startDate: "",
        endDate: "",
        peopleNumber: 0
      })

    const renderActiveTab = () => {
        switch (activeModal) {
            case 'locationType':
                return <LocationFilter filters={filters} setFilters={setFilters}/>
            case 'startDateType':
                return <DateFilter filters={filters} setFilters={setFilters}/>
            case 'endDateType':
                return <DateFilter filters={filters} setFilters={setFilters}/>
            case 'peopleNumberFilter':
                return <PeoplesFilter filters={filters} setFilters={setFilters}/>
            default:
                return null
        }
    }


    return (
        <div className="relative">
            <HeaderFilterBar filters={filters} setFilters={setFilters} />
            {renderActiveTab()}
        </div>
    )
}

export default HeaderFilter