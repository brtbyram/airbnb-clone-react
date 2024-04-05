import CategoryModal from './CategoryModal'
import NationalSettingsModal from './NationalSettingsModal'
import { useContext } from 'react'
import { Context } from '../../context/ModalContext'

function ActiveModal() {

    const {activeModal} = useContext(Context)

    switch (activeModal) {
        case "category":
            return <CategoryModal />
        case "nationalSettings":
            return <NationalSettingsModal />
        default:
            return null
    }
    
}

export default ActiveModal