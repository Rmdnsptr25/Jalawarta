export default function BackgroundColor({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[16px] h-[816px] items-start overflow-clip p-[32px] relative rounded-[12px] w-[364px]"} data-name="Background Color">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Blue</p>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Swatches">
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#f2fbff] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Light</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">20.02 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.05 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#f2fbff</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(242, 251, 255)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#ecf9fe] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Light :hover</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">19.55 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.07 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#ecf9fe</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(236, 249, 254)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#d8f2fd] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Light :active</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">18.04 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.16 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#d8f2fd</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(216, 242, 253)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#81d4fa] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Normal</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">12.73 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.65 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#81d4fa</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(129, 212, 250)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#74bfe1] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Normal :hover</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">10.28 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.04 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#74bfe1</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(116, 191, 225)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#67aac8] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Normal :active</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">8.16 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.57 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#67aac8</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(103, 170, 200)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#619fbc] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Dark</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">7.19 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.92 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#619fbc</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(97, 159, 188)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#4d7f96] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Dark :hover</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">4.79 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">4.38 AA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#4d7f96</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(77, 127, 150)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#3a5f70] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Dark :active</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`3.05 `}</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">6.88 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#3a5f70</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(58, 95, 112)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#2d4a58] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Darker</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.23 `}</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">9.41 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#2d4a58</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(45, 74, 88)</p>
        </div>
      </div>
    </div>
  );
}