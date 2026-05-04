export default function PrimaryColor({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[16px] h-[816px] items-start overflow-clip p-[32px] relative rounded-[12px] w-[364px]"} data-name="Primary color">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Blue</p>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Swatches">
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#eaf2fd] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Light</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">18.62 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.13 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#eaf2fd</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(234, 242, 253)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#e0ecfc] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Light :hover</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">17.57 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.19 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#e0ecfc</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(224, 236, 252)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#bfd8f9] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Light :active</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">14.41 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.46 `}</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#bfd8f9</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(191, 216, 249)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#2f80ed] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Normal</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">5.43 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">3.87 AA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#2f80ed</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(47, 128, 237)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#2a73d5] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Normal :hover</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">4.51 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">4.65 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#2a73d5</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(42, 115, 213)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#2666be] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Normal :active</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">3.73 AA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">5.64 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#2666be</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(38, 102, 190)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#2360b2] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Dark</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">3.39 AA</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">6.20 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#2360b2</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(35, 96, 178)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#1c4d8e] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Dark :hover</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.50 `}</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">8.39 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#1c4d8e</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(28, 77, 142)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#153a6b] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Dark :active</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.85 `}</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">11.35 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#153a6b</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(21, 58, 107)</p>
        </div>
        <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
          <div className="absolute bg-[#102d53] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">Darker</p>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
            <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.52 `}</p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
            <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
              <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">13.79 AAA</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#102d53</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(16, 45, 83)</p>
        </div>
      </div>
    </div>
  );
}