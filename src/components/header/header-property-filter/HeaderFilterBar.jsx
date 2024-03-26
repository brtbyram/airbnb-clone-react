import clsx from "clsx"
import PropTypes from "prop-types"
import { Icon } from "../../../Icons"
import useScrollPosition from "../../../hooks/useScrollPosition"
import { useEffect } from "react"

function HeaderFilterBar({ activeTab, setActiveTab }) {

  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setTimeout(() => {
      setActiveTab(null)
    }, 100)
  }, [scrollPosition])


  return (
      <div className={clsx("mx-auto sticky max-w-max", {
        "max-w-full w-[848px]": scrollPosition == 0 || activeTab
      })}>
        <div className={clsx("flex relative items-center border border-[#dddddd] rounded-[32px] text-[#717171] text-[0.875rem] shadow-lg", {
          "bg-[#ebebeb]": activeTab
        })}>

          {scrollPosition == 0 || activeTab ? (
            <button onClick={() => setActiveTab('locationType')} className={clsx("text-start px-3 py-3 pl-7 w-[248px] rounded-full hover:bg-[#ebebeb]", {
              "!bg-white shadow-lg": activeTab === 'locationType',
              "hover:bg-[#DDDDDD]": activeTab,
              "max-w-max": scrollPosition > 0,
            })}>
              <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Yer</div>
              <input type="text" className="outline-none bg-transparent" placeholder="Gidilecek yerleri arayın" />
            </button>
          ) : (
            <>
              <button onClick={() => setActiveTab('locationType')} className="text-start px-4 py-3 pl-5">
                <div className="text-sm leading-[22px] text-[#222222] font-semibold pb-0.5">Herhangi bir yer</div>
              </button>
              <span className="h-6 w-0.5 bg-[#dddddd]"></span>
            </>
          )
          }


          {scrollPosition == 0 || activeTab ? (
            <>
              <button onClick={() => setActiveTab('startDateType')} className={clsx("text-start px-6 py-3 hover:bg-[#ebebeb] hover:border-none rounded-full", {
                "!bg-white shadow-lg": activeTab === 'startDateType',
                "hover:bg-[#DDDDDD]": activeTab
              })}>
                <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Giriş</div>
                <div>Tarih ekleyin</div>
              </button>

              <button onClick={() => setActiveTab('endDateType')} className={clsx("text-start px-6 py-3 hover:bg-[#ebebeb] hover:border-none rounded-full", {
                "!bg-white shadow-lg": activeTab === 'endDateType',
                "hover:bg-[#DDDDDD]": activeTab
              })}>
                <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Çıkış</div>
                <div>Tarih ekleyin</div>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setActiveTab('startDateType')} className={clsx("text-start px-4 py-3")}>
                <div className="text-sm leading-[22px] text-[#222222] font-[550] pb-0.5">Herhangi hafta</div>
              </button>
              <span className="h-6 w-0.5 bg-[#dddddd]"></span>
            </>
          )}



          {scrollPosition == 0 || activeTab ? (
            <button onClick={() => setActiveTab('peopleNumberFilter')} className={clsx("flex flex-col text-start flex-1 py-3  pl-6 pr-2 hover:bg-[#ebebeb] rounded-full justify-between", {
              "!bg-white shadow-lg": activeTab === 'peopleNumberFilter',
              "hover:bg-[#DDDDDD]": activeTab,
            })}>
              <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Kişiler</div>
              <div>Misafir ekleyin</div>
            </button>
          ) : (
            <>
              <button onClick={() => setActiveTab('peopleNumberFilter')} className="text-start flex-1 py-3 px-4">
                <div className="text-sm leading-[22px] text-[#222222] pb-0.5">Misafir ekleyin</div>
              </button>
            </>
          )}

          <button className={clsx("rounded-full flex items-center absolute right-1 hover:bg-[#E00B41] justify-center p-4 h-12 bg-[#ff385c]", {
            "relative h-8 !px-2.5": scrollPosition > 0 && !activeTab
          })}>
            <Icon name="search" size={scrollPosition > 0 ? 11 : 16} />
            {activeTab && <span className="text-white font-semibold text-base pl-2 pr-1">Arama</span>}
          </button>

        </div>
      </div>
  )
}

export default HeaderFilterBar

HeaderFilterBar.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func
}
