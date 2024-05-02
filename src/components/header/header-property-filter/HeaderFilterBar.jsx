import clsx from "clsx"
import { Icon } from "../../../Icons"
import useScrollPosition from "../../../hooks/useScrollPosition"
import { useEffect } from "react"
import { useContext } from "react"
import { Context } from "../../../context/ModalContext"
import moment from "moment"

function HeaderFilterBar({ filters, setFilters }) {

  const { activeModal, setActiveModal } = useContext(Context)

  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setTimeout(() => {
      setActiveModal(null)
    }, 100)
  }, [scrollPosition])

  useEffect(() => {
    if (activeModal === 'locationType' && location) {
      setActiveModal('startDateType')
    } else if (activeModal === 'startDateType' && startDate) {
      setActiveModal('endDateType')
    }
  }, [filters])


  const { startDate, endDate, location } = filters


  return (
    <div className={clsx("mx-auto sticky min-w-max", {
      " w-[848px]": scrollPosition == 0 || activeModal
    })}>
      <div className={clsx("flex relative items-center border border-[#dddddd] rounded-[32px] text-[#717171] text-[0.875rem] shadow-sm hover:shadow-md transition-shadow", {
        "bg-[#ebebeb] hover:shadow-sm !shadow-sm": activeModal,
        "!shadow-md": scrollPosition == 0,
      })}>

        {scrollPosition == 0 || activeModal ? (
          <button onClick={() => setActiveModal('locationType')} className={clsx("text-start px-3 py-3 pl-7 w-[248px] rounded-full", {
            "bg-white shadow-lg": activeModal === 'locationType',
            "hover:bg-[#DDDDDD]": activeModal && activeModal !== 'locationType',
            "hover:bg-[#ebebeb]": !activeModal,
            "max-w-max": scrollPosition > 0,
          })}>
            <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Yer</div>
            <input type="text" className="outline-none bg-transparent" placeholder={location ? location : "Gidilecek yerleri arayın"} />
          </button>
        ) : (
          <>
            <button onClick={() => setActiveModal('locationType')} className="text-start px-4 py-3 pl-5">
              <div className="text-sm leading-[22px] text-[#222222] font-semibold pb-0.5">Herhangi bir yer</div>
            </button>
            <span className="h-6 w-0.5 bg-[#dddddd]"></span>
          </>
        )
        }


        {scrollPosition == 0 || activeModal ? (
          <>
            <button onClick={() => setActiveModal('startDateType')} className={clsx("min-w-[140px] flex items-center text-start px-6 py-3 hover:border-none rounded-full", {
              "bg-white shadow-lg z-10": activeModal === 'startDateType',
              "hover:bg-[#DDDDDD]": activeModal && activeModal !== 'startDateType',
              "hover:bg-[#ebebeb]": !activeModal,
            })}>
              <div className="flex-1">
                <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Giriş</div>
                <div>{startDate ? moment(startDate).format("MMM D") : "Tarih ekleyin"}</div>
              </div>
              {startDate && activeModal === "startDateType" && <button onClick={() => setFilters({ ...filters, startDate: "", endDate: "" })}>X</button>}
            </button>

            <button onClick={() => setActiveModal('endDateType')} className={clsx("min-w-[140px] flex items-center space-x-6 text-start px-6 py-3  hover:border-none rounded-full", {
              "bg-white shadow-lg z-10": activeModal === 'endDateType',
              "hover:bg-[#DDDDDD]": activeModal && activeModal !== 'endDateType',
              "hover:bg-[#ebebeb]": !activeModal,
            })}>
              <div className="flex-1">
                <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Çıkış</div>
                <div>{endDate ? moment(endDate).format("MMM D") : "Tarih ekleyin"}</div>
              </div>
              {endDate && activeModal === "endDateType" && <button onClick={() => {
                setFilters({ ...filters, startDate:"", endDate: "" })
              }}>X</button>
              }
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setActiveModal('startDateType')} className={clsx("text-start px-4 py-3")}>
              <div className="text-sm leading-[22px] text-[#222222] font-[550] pb-0.5">Herhangi hafta</div>
            </button>
            <span className="h-6 w-0.5 bg-[#dddddd]"></span>
          </>
        )}



        {scrollPosition == 0 || activeModal ? (
          <button onClick={() => setActiveModal('peopleNumberFilter')} className={clsx("flex flex-col text-start flex-1 py-3  pl-6 pr-2 rounded-full justify-between relative", {
            "bg-white shadow-lg": activeModal === 'peopleNumberFilter',
            "hover:before:bg-[#DDDDDD] before:top-0 before:-left-6 hover:before:absolute before:w-12 before:h-full before:-z-2": activeModal === 'endDateType',
            "hover:bg-[#DDDDDD]": activeModal && activeModal !== 'peopleNumberFilter',
            "hover:bg-[#ebebeb]": !activeModal,
          })}>
            <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Kişiler</div>
            <div>Misafir ekleyin</div>
          </button>
        ) : (
          <>
            <button onClick={() => setActiveModal('peopleNumberFilter')} className="text-start flex-1 py-3 px-4">
              <div className="text-sm leading-[22px] text-[#222222] pb-0.5">Misafir ekleyin</div>
            </button>
          </>
        )}

        <button className={clsx("rounded-full flex items-center absolute right-1 hover:bg-[#E00B41] justify-center p-4 h-12 bg-[#ff385c]", {
          "relative h-8 !px-2.5": scrollPosition > 0 && !activeModal
        })}>
          <Icon name="search" size={scrollPosition > 0 && !activeModal ? 11 : 16} />
          {activeModal && <span className="text-white font-semibold text-base pl-2 pr-1">Arama</span>}
        </button>

      </div>
    </div>
  )
}

export default HeaderFilterBar
