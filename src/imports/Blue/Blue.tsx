function Swatch1() {
  return <div className="absolute bg-[#e8f1fb] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">18.41 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function TextColor1() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.14 `}</p>
    </div>
  );
}

function Swatch() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-50</p>
      <DarkRatio />
      <WhiteRatio />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#e8f1fb</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(232, 241, 251)</p>
    </div>
  );
}

function Swatch3() {
  return <div className="absolute bg-[#b8d5f1] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor2() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">13.83 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function TextColor3() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.52 `}</p>
    </div>
  );
}

function Swatch2() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch3 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-100</p>
      <DarkRatio1 />
      <WhiteRatio1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#b8d5f1</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(184, 213, 241)</p>
    </div>
  );
}

function Swatch5() {
  return <div className="absolute bg-[#95c0ea] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor4() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">11.01 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function TextColor5() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.91 `}</p>
    </div>
  );
}

function Swatch4() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch5 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-200</p>
      <DarkRatio2 />
      <WhiteRatio2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#95c0ea</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(149, 192, 234)</p>
    </div>
  );
}

function Swatch7() {
  return <div className="absolute bg-[#65a3e1] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor6() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">7.88 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function TextColor7() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.67 `}</p>
    </div>
  );
}

function Swatch6() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch7 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-300</p>
      <DarkRatio3 />
      <WhiteRatio3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#65a3e1</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(101, 163, 225)</p>
    </div>
  );
}

function Swatch9() {
  return <div className="absolute bg-[#4791db] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor8() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">6.34 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
    </div>
  );
}

function TextColor9() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">3.31 AA</p>
    </div>
  );
}

function Swatch8() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch9 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-400</p>
      <DarkRatio4 />
      <WhiteRatio4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#4791db</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(71, 145, 219)</p>
    </div>
  );
}

function Swatch11() {
  return <div className="absolute bg-[#1976d2] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor10() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">4.56 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
    </div>
  );
}

function TextColor11() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">4.60 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
    </div>
  );
}

function Swatch10() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch11 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-500</p>
      <DarkRatio5 />
      <WhiteRatio5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#1976d2</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(25, 118, 210)</p>
    </div>
  );
}

function Swatch13() {
  return <div className="absolute bg-[#176bbf] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor12() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor12 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">3.89 AA</p>
    </div>
  );
}

function TextColor13() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor13 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">5.40 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AA</p>
    </div>
  );
}

function Swatch12() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch13 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-600</p>
      <DarkRatio6 />
      <WhiteRatio6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#176bbf</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(23, 107, 191)</p>
    </div>
  );
}

function Swatch15() {
  return <div className="absolute bg-[#125495] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor14() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.73 `}</p>
    </div>
  );
}

function TextColor15() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">7.70 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function Swatch14() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch15 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-700</p>
      <DarkRatio7 />
      <WhiteRatio7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#125495</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(18, 84, 149)</p>
    </div>
  );
}

function Swatch17() {
  return <div className="absolute bg-[#0e4174] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor16() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`2.03 `}</p>
    </div>
  );
}

function TextColor17() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">10.36 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function Swatch16() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch17 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-800</p>
      <DarkRatio8 />
      <WhiteRatio8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#0e4174</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(14, 65, 116)</p>
    </div>
  );
}

function Swatch19() {
  return <div className="absolute bg-[#0b3258] border border-[#e9ebf8] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[160px]" data-name="Swatch" />;
}

function TextColor18() {
  return (
    <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DarkRatio9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[8px]" data-name="Dark Ratio">
      <TextColor18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">{`1.61 `}</p>
    </div>
  );
}

function TextColor19() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[10px]" data-name="Text Color">
      <div aria-hidden="true" className="absolute border border-[#e9ebf8] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WhiteRatio9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[14px] items-start left-[8px] overflow-clip px-[4px] py-[2px] rounded-[7px] top-[26px]" data-name="White Ratio">
      <TextColor19 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap">13.03 AAA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] not-italic relative shrink-0 text-[6px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function Swatch18() {
  return (
    <div className="bg-white h-[56px] overflow-clip relative shrink-0 w-[300px]" data-name="Swatch">
      <Swatch19 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[176px] not-italic text-[14px] text-black top-[2px] whitespace-nowrap">blue-900</p>
      <DarkRatio9 />
      <WhiteRatio9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[22px] whitespace-nowrap">#0b3258</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[176px] not-italic text-[#8e98a8] text-[10px] top-[38px] whitespace-nowrap">rgb(11, 50, 88)</p>
    </div>
  );
}

function Swatches() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Swatches">
      <Swatch />
      <Swatch2 />
      <Swatch4 />
      <Swatch6 />
      <Swatch8 />
      <Swatch10 />
      <Swatch12 />
      <Swatch14 />
      <Swatch16 />
      <Swatch18 />
    </div>
  );
}

export default function Blue() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[32px] relative rounded-[12px] size-full" data-name="Blue">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Blue</p>
      <Swatches />
    </div>
  );
}