import clsx from "clsx"
import { Icon } from "../../../Icons"
import useScrollPosition from "../../../hooks/useScrollPosition"
import { useEffect } from "react"
import { useContext } from "react"
import { Context } from "../../../context/ModalContext"

function HeaderFilterBar() {

  const {activeModal, setActiveModal } = useContext(Context)

  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setTimeout(() => {
      setActiveModal(null)
    }, 100)
  }, [scrollPosition])


  return (
      <div className={clsx("mx-auto sticky min-w-max", {
        " w-[848px]": scrollPosition == 0 || activeModal
      })}>
        <div className={clsx("flex relative items-center border border-[#dddddd] rounded-[32px] text-[#717171] text-[0.875rem] shadow-lg", {
          "bg-[#ebebeb]": activeModal
        })}>

          {scrollPosition == 0 || activeModal ? (
            <button onClick={() => setActiveModal('locationType')} className={clsx("text-start px-3 py-3 pl-7 w-[248px] rounded-full hover:bg-[#ebebeb]", {
              "!bg-white shadow-lg": activeModal === 'locationType',
              "hover:bg-[#DDDDDD]": activeModal,
              "max-w-max": scrollPosition > 0,
            })}>
              <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Yer</div>
              <input type="text" className="outline-none bg-transparent" placeholder="Gidilecek yerleri arayın" />
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
              <button onClick={() => setActiveModal('startDateType')} className={clsx("text-start px-6 py-3 hover:bg-[#ebebeb] hover:border-none rounded-full", {
                "!bg-white shadow-lg": activeModal === 'startDateType',
                "hover:bg-[#DDDDDD]": activeModal
              })}>
                <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Giriş</div>
                <div>Tarih ekleyin</div>
              </button>

              <button onClick={() => setActiveModal('endDateType')} className={clsx("text-start px-6 py-3 hover:bg-[#ebebeb] hover:border-none rounded-full", {
                "!bg-white shadow-lg": activeModal === 'endDateType',
                "hover:bg-[#DDDDDD]": activeModal
              })}>
                <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Çıkış</div>
                <div>Tarih ekleyin</div>
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
            <button onClick={() => setActiveModal('peopleNumberFilter')} className={clsx("flex flex-col text-start flex-1 py-3  pl-6 pr-2 hover:bg-[#ebebeb] rounded-full justify-between", {
              "!bg-white shadow-lg": activeModal === 'peopleNumberFilter',
              "hover:bg-[#DDDDDD]": activeModal,
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
            <Icon name="search" size={scrollPosition > 0 ? 11 : 16} />
            {activeModal && <span className="text-white font-semibold text-base pl-2 pr-1">Arama</span>}
          </button>

        </div>
      </div>
  )
}

export default HeaderFilterBar
