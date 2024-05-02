import clsx from "clsx";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Icon } from "../../../Icons";


import Draggable from 'react-draggable';


function DateFilter({ filters, setFilters }) {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeDateFilter, setActiveDateFilter] = useState('Tarihler')

  useEffect(() => {
    if (startDate && endDate) {
      setFilters({
        ...filters,
        startDate: moment(startDate).format('YYYY-MM-DD'),
        endDate: moment(endDate).format('YYYY-MM-DD')
      })
    }
  }, [startDate, endDate])

  const handleDrop =
    (e) => {
      e.preventDefault(); // default davranışı önler
      const data = e.dataTransfer.getData('text/plain');
      e.target.innerHTML = data + ' bırakıldı!';
    }






    const [value, setValue] = useState(50); // Başlangıç değeri

    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    const radius = 100; // Dairenin yarıçapı
    const circumference = 2 * Math.PI * radius; // Dairenin çevresi
    const progress = value / 100;
    const dashOffset = circumference * (1 - progress);

  return (
    <div className="absolute grid place-content-center place-items-center z-10 top-20 left-0 right-0 py-8 bg-white border rounded-3xl shadow-xl">

      <div className="w-[303px] grid grid-flow-col grid-cols-3 text-sm space-x-1 bg-[#ebebeb] p-1 rounded-full">
        <button type="radio" onClick={() => setActiveDateFilter("Tarihler")} className={clsx("py-2 rounded-full", {
          "bg-white hover:bg-white": activeDateFilter === "Tarihler",
          "hover:bg-[#dddddd]": activeDateFilter !== "Tarihler"
        })}>
          Tarihler
        </button>
        <button type="radio" onClick={() => setActiveDateFilter("Aylar")} className={clsx("py-2 rounded-full", {
          "bg-white": activeDateFilter === "Aylar",
          "hover:bg-[#dddddd]": activeDateFilter !== "Aylar"
        })}>
          Aylar
        </button>
        <button type="radio" onClick={() => setActiveDateFilter("Esnek")} className={clsx("py-2 rounded-full ", {
          "bg-white": activeDateFilter === "Esnek",
          "hover:bg-[#dddddd]": activeDateFilter !== "Esnek"
        })}>
          Esnek
        </button>
      </div>

      {activeDateFilter === "Tarihler" && (
        <div>

          <DateRangePicker
            monthDisplayFormat="MMMM yyyy"
            months={2}
            minDate={moment().toDate()}
            rangeColors={['transparent']} // bu kısımı değiştirerek arka plan rengini değiştirebilirsiniz
            color="transparent" // bu kısımı değiştirerek yazı rengini değiştirebilirsiniz
            direction="horizontal"
            ranges={
              [
                {
                  startDate: filters.startDate ? moment(filters.startDate).toDate() : null,
                  endDate: filters.endDate ? moment(filters.endDate).toDate() : null,
                  key: 'selection',
                }
              ]
            }
            onChange={ranges => {
              setStartDate(ranges.selection.startDate)
              setEndDate(ranges.selection.endDate)
            }}
          />

          <div className="flex items-center justify-start space-x-3 text-xs min-h-8 mt-4 mb-2 mx-7">
            <button className="flex items-center py-1 px-3.5 border border-[#ebebeb] hover:border-[#222222] rounded-full">
              Tam tarihler
            </button>
            <button className="flex items-center py-1 px-3.5 border border-[#ebebeb] hover:border-[#222222] rounded-full">
              <Icon name="plusMınus" size={12} /> 1 gün
            </button>
            <button className="flex items-center py-1 px-3.5 border border-[#ebebeb] hover:border-[#222222] rounded-full">
              <Icon name="plusMınus" size={12} /> 1 gün
            </button>
            <button className="flex items-center py-1 px-3.5 border border-[#ebebeb] hover:border-[#222222] rounded-full">
              <Icon name="plusMınus" size={12} /> 1 gün
            </button>
            <button className="flex items-center py-1 px-3.5 border border-[#ebebeb] hover:border-[#222222] rounded-full">
              <Icon name="plusMınus" size={12} /> 1 gün
            </button>
            <button className="flex items-center py-1 px-3.5 border border-[#ebebeb] hover:border-[#222222] rounded-full">
              <Icon name="plusMınus" size={12} /> 1 gün
            </button>
          </div>

        </div>
      )}

      {activeDateFilter === "Aylar" && (
        <div>
          <h1>Seyahatiniz ne zaman?</h1>
          <div className="w-72 h-72 bg-gray-100 rounded-full flex justify-center drop-shadow-2xl items-center">
            <div className="min-w-44 max-w-44 min-h-44 max-h-44 relative flex flex-col items-center justify-center bg-white shadow-2xl rounded-full">
              <div className="text-[96px] leading-[80px] font-bold">1</div>
              <div className="text-lg  font-bold">ay</div>
            </div>
            <div>
              <div className="circle-container">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  className={clsx("range-input", {
                    "rotate-45": value < 30,
                    "rotate-70": value >= 30 && value < 70,
                    "rotate-90": value >= 70
                  })}
                />
                <div className="range-value">{value}</div>
                <svg className="circle">
                  <circle
                    r={radius}
                    cx="50%"
                    cy="50%"
                    stroke="lightblue"
                    strokeWidth="10"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={dashOffset}
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>

          </div>
        </div >
      )
      }

      {
        activeDateFilter === "Esnek" && (
          <div>
            <h1>Ne kadar kalmak istersiniz?</h1>
          </div>
        )
      }

    </div >
  )
}

export default DateFilter