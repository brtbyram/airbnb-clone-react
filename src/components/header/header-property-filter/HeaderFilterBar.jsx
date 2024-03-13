import clsx from "clsx"
import PropTypes from "prop-types"

function HeaderFilterBar({ activeTab, setActiveTab }) {

  return (
    <div className="w-[848px] mx-auto">
      <div className="flex relative items-center border border-[#dddddd] rounded-[32px] text-[#717171] text-[0.875rem] shadow-lg">

        <button onClick={() => setActiveTab('locationType')} value="locationType" className="text-start px-3 py-3 pl-7 w-[248px] hover:bg-[#ebebeb] hover:rounded-full focus:bg-white">
          <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Yer</div>
          <input type="text" className="outline-none bg-transparent" placeholder="Gidilecek yerleri arayın" />
        </button>


        <button onClick={() => setActiveTab('startDateType')} className="text-start px-6 py-3 hover:bg-[#ebebeb] hover:border-none hover:rounded-full">
          <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Giriş</div>
          <div>Tarih ekleyin</div>
        </button>


        <button onClick={() => setActiveTab('endDateType')} className="text-start px-6 py-3 hover:bg-[#ebebeb] hover:border-none hover:rounded-full focus:bg-red-500">
          <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Çıkış</div>
          <div>Tarih ekleyin</div>
        </button>

        <button onClick={() => setActiveTab('peopleNumberFilter')} className={clsx("flex flex-col text-start flex-1 py-3  pl-3 pr-2 hover:bg-[#ebebeb] rounded-full justify-between", {
          "border-none": activeTab === 'peopleNumberFilter'
        })}>
          <div className="text-[0.750rem] text-[#222222] font-semibold pb-0.5">Kişiler</div>
          <div>Misafir ekleyin</div>
        </button>

        <button className="rounded-full flex items-center absolute right-1 hover:bg-[#E00B41] justify-center w-12 h-12 bg-[#ff385c]">
          fds
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
