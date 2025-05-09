"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import CustomCalendarIcon from "./CustomCalendarIcon";
import CustomArrowIcon from "./CustomArrowIcon";

export default function DateSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState({});
  const [tempRange, setTempRange] = useState({});

  const handleApply = () => {
    setRange(tempRange);
    setIsOpen(false);
  };

  const handleReset = () => {
    setTempRange({});
  };

  return (
    <div className="relative w-full sm:w-auto min-w-[200px]">
      {/* Selector Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center min-w-[50px] bg-white text-black px-4 py-2 text-md cursor-pointer"
        role="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="mr-2" aria-hidden="true">
          <CustomCalendarIcon className="w-5 h-5 text-blue-700" />
        </span>
        <span className="truncate">
          {range.from
            ? `${format(range.from, "MM/dd/yyyy")}${
                range.to ? ` - ${format(range.to, "MM/dd/yyyy")}` : ""
              }`
            : "All Dates"}
        </span>
        <span className="flex items-center ml-auto">
          <CustomArrowIcon
            className={`w-5 h-5 text-blue-700 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </div>

      {isOpen && (
        <>
          {/* Overlay - shown on mobile/tablet (below lg breakpoint) */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Calendar container - full screen on mobile/tablet, dropdown on desktop */}
          <div
            className={`
              fixed inset-0 z-50 bg-white p-4 pb-20 overflow-y-auto
              lg:absolute lg:inset-auto lg:top-full lg:right-0 lg:mt-2 
              lg:rounded-md lg:w-[700px] lg:max-h-[80vh] lg:shadow-lg
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cancel button - only on mobile/tablet */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden absolute top-4 right-4 px-3 py-1  text-blue-700 bg-white rounded hover:bg-blue-700 hover:text-white hover:border-blue-700"
            >
              Cancel
            </button>

            {/* Date fields - ALWAYS IN A ROW (flex-row at all breakpoints) */}
            <div className="flex flex-row gap-4 mt-8 lg:mt-0">
              <div className="w-full lg:w-auto">
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <input
                  type="text"
                  className="border px-2 py-1 w-full"
                  placeholder="MM/DD/YYYY"
                  value={
                    tempRange.from ? format(tempRange.from, "MM/dd/yyyy") : ""
                  }
                  readOnly
                />
              </div>
              <div className="w-full lg:w-auto">
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <input
                  type="text"
                  className="border px-2 py-1 w-full"
                  placeholder="MM/DD/YYYY"
                  value={tempRange.to ? format(tempRange.to, "MM/dd/yyyy") : ""}
                  readOnly
                />
              </div>
            </div>

            {/* Date Picker */}
            <DayPicker
              mode="range"
              selected={tempRange}
              onSelect={setTempRange}
              numberOfMonths={2}
              pagedNavigation
              className="mt-4 flex flex-col lg:flex-row gap-4"
            />

            {/* Action Buttons - Desktop Only */}
            <div className="hidden lg:flex justify-between mt-4">
              <button
                onClick={handleReset}
                className="text-blue-700 font-semibold hover:underline"
              >
                Reset
              </button>
              <div className="space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 border border-blue-700 text-blue-700 bg-white rounded hover:bg-blue-700 hover:text-white hover:border-blue-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApply}
                  className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Action Bar - Mobile/Tablet Only */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-4 py-3 flex justify-end z-50">
              <button
                onClick={handleReset}
                className="text-blue-700 font-semibold hover:underline mr-4"
              >
                Reset
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}