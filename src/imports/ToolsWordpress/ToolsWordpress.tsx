import svgPaths from "./svg-ugyd1sfrnk";

function ToolsPage() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ToolsPage">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ToolsPage">
          <g id="Vector">
            <path d="M19 12H5" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M19 12H5" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M19 12H5" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M19 12H5" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          </g>
          <g id="Vector_2">
            <path d="M12 19L5 12L12 5" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M12 19L5 12L12 5" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M12 19L5 12L12 5" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M12 19L5 12L12 5" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <ToolsPage />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[479.313px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#10151c] text-[36px] top-0 whitespace-nowrap">Import WordPress</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-[479.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#64748b] text-[18px] top-0 whitespace-nowrap">Unggah file XML WXR Anda untuk memindahkan konten.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[68px] items-center relative shrink-0 w-[535.313px]" data-name="Container">
      <Link />
      <Container2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3a358180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p15151560} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M20 5V25" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[80px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.8) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[151px] not-italic text-[#10151c] text-[20px] text-center top-0 whitespace-nowrap">Pilih file XML WordPress (WXR)</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[151.2px] not-italic text-[#64748b] text-[14px] text-center top-0 whitespace-nowrap">Hanya file berformat .xml yang didukung.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[301.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[48px] relative rounded-[33554400px] shrink-0 w-[118.938px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[14px] px-[32px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] w-[55px]">Pilih File</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[364px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[66px] relative size-full">
          <Container5 />
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e2e8f0] h-[56px] relative rounded-[33554400px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[466.56px] not-italic text-[16px] text-center text-white top-[15px] whitespace-nowrap">Mulai Impor Sekarang</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[16px] w-[1031px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container4 />
        <Button />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#10151c] text-[20px] top-0 whitespace-nowrap">Panduan Import:</p>
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#6366f1] left-0 rounded-[33554400px] size-[6px] top-[9px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[479.672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#64748b] text-[15px] top-[-1px] whitespace-nowrap">
        <span className="leading-[24px]">{`Gunakan menu `}</span>
        <span className="leading-[24px] text-[#10151c]">Tools → Export</span>
        <span className="leading-[24px]">{` di dashboard WordPress lama Anda.`}</span>
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container9 />
      <Paragraph3 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#6366f1] left-0 rounded-[33554400px] size-[6px] top-[9px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[367.703px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#64748b] text-[15px] top-[-1px] whitespace-nowrap">
        <span className="leading-[24px]">{`Pilih `}</span>
        <span className="leading-[24px] text-[#10151c]">{`"All Content"`}</span>
        <span className="leading-[24px]">{` saat mengekspor dari WordPress.`}</span>
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container10 />
      <Paragraph4 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#6366f1] left-0 rounded-[33554400px] size-[6px] top-[9px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[657.406px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[15px] top-[-1px] whitespace-nowrap">Pastikan situs lama Anda masih aktif agar sistem dapat mengunduh gambar secara otomatis.</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container11 />
      <Paragraph5 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#6366f1] left-0 rounded-[33554400px] size-[6px] top-[9px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[552.094px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[15px] top-[-1px] whitespace-nowrap">Impor media dalam jumlah besar mungkin memerlukan waktu beberapa menit.</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container12 />
      <Paragraph6 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[144px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-[262px] items-start pb-px pt-[33px] px-[33px] relative rounded-[16px] shrink-0 w-[1031px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <Heading1 />
      <List />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1008px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <Container1 />
        <Container3 />
        <Container8 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[584px] items-start left-0 pl-[256px] top-[73px] w-[1351px]" style={{ backgroundImage: "linear-gradient(rgb(248, 250, 252) 0%, rgb(246, 248, 251) 33.333%, rgb(243, 247, 250) 66.667%, rgb(241, 245, 249) 100%)" }} data-name="App">
      <Container />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.031px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-[rgba(248,250,252,0.7)] top-0 whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex gap-[11.969px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[16px] w-[208px]" data-name="Link">
      <Sidebar1 />
      <Sidebar2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[19px] not-italic text-[14px] text-[rgba(248,250,252,0.7)] text-center top-0 whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[12.094px] h-[20px] items-center left-[16px] top-[12px] w-[69.469px]" data-name="Container">
      <Icon1 />
      <Paragraph7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[44px] left-[16px] rounded-[16px] top-[66px] w-[208px]" data-name="Button">
      <Container13 />
      <div className="absolute flex items-center justify-center left-[176px] size-[16px] top-[14px]">
        <div className="flex-none rotate-180">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[26.5px] not-italic text-[14px] text-[rgba(248,250,252,0.7)] text-center top-0 whitespace-nowrap">Insights</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[20px] items-center left-[16px] top-[12px] w-[84.594px]" data-name="Container">
      <Icon3 />
      <Paragraph8 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[44px] left-[16px] rounded-[16px] top-[116px] w-[208px]" data-name="Button">
      <Container14 />
      <div className="absolute flex items-center justify-center left-[176px] size-[16px] top-[14px]">
        <div className="flex-none rotate-180">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[21px] not-italic text-[14px] text-[rgba(248,250,252,0.7)] text-center top-0 whitespace-nowrap">Pages</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] top-[12px] w-[73.219px]" data-name="Container">
      <Icon5 />
      <Paragraph9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[44px] left-[16px] rounded-[16px] top-[166px] w-[208px]" data-name="Button">
      <Container15 />
      <div className="absolute flex items-center justify-center left-[176px] size-[16px] top-[14px]">
        <div className="flex-none rotate-180">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Sidebar3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p38772900} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p27fa8ca0} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.688px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-[rgba(248,250,252,0.7)] top-0 whitespace-nowrap">Media Library</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex gap-[11.953px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[216px] w-[208px]" data-name="Link">
      <Sidebar3 />
      <Sidebar4 />
    </div>
  );
}

function Sidebar5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.p794da00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35.859px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">Tools</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#1976d2] content-stretch flex gap-[11.891px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] top-[266px] w-[208px]" data-name="Link">
      <Sidebar5 />
      <Sidebar6 />
    </div>
  );
}

function Sidebar7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.938px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-[rgba(248,250,252,0.7)] top-0 whitespace-nowrap">Users</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[316px] w-[208px]" data-name="Link">
      <Sidebar7 />
      <Sidebar8 />
    </div>
  );
}

function Sidebar9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_7875)" id="Sidebar">
          <path d={svgPaths.p1a618f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_7875">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sidebar10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.313px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-[rgba(248,250,252,0.7)] top-0 whitespace-nowrap">Add-Ons</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex gap-[11.844px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[366px] w-[208px]" data-name="Link">
      <Sidebar9 />
      <Sidebar10 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-0 px-[16px] py-[8px] top-[25px] w-[208px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.5)] tracking-[0.6px] uppercase">System</p>
    </div>
  );
}

function Sidebar11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.641px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-[rgba(248,250,252,0.7)] top-0 whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex gap-[12.234px] h-[44px] items-center left-0 px-[16px] py-[12px] rounded-[16px] top-[57px] w-[208px]" data-name="Link">
      <Sidebar11 />
      <Sidebar12 />
    </div>
  );
}

function Sidebar13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.p358c0f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M13.75 11.25H15.625" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M9.375 11.25H11.25" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M1.25 8.125H18.75" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar14() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-[rgba(248,250,252,0.7)] top-0 w-[144px]">{`Tagihan & Pembayaran`}</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 px-[16px] py-[12px] rounded-[16px] top-[107px] w-[208px]" data-name="Link">
      <Sidebar13 />
      <Sidebar14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t h-[152px] left-[16px] top-[435px] w-[208px]" data-name="Container">
      <Paragraph10 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[310px] left-0 top-[101px] w-[240px]" data-name="Navigation">
      <Link1 />
      <Button1 />
      <Button2 />
      <Button3 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return <div className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid h-[101px] left-0 top-0 w-[255px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#f8fafc] text-[18px] top-0 whitespace-nowrap">Jala Warta</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,250,252,0.6)] whitespace-nowrap">Premium CMS Platform</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[75.89px] top-[24px] w-[131.063px]" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25.703px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">JW</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] pl-[7.141px] pr-[7.156px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] size-[40px] top-[26px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#0b3258] h-[1081px] left-0 overflow-clip top-0 w-[256px]" data-name="Sidebar">
      <Navigation />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[rgba(226,232,240,0.5)] border-b border-solid h-[73px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[1095px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[26px] w-[309.547px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#64748b] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">{`Selamat datang kembali, `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#6366f1] text-[14px]">Admin Jala Warta</span>
        <span className="leading-[20px] text-[14px]">{` 👋`}</span>
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-0 pl-[32px] pr-[16px] py-[8px] top-0 w-[160.953px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Senin, 21 April 2026</p>
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[#00c950] left-[16px] opacity-51 rounded-[33554400px] size-[8px] top-[12px]" data-name="Container" />;
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(241,245,249,0.5)] h-[32px] left-[902.05px] rounded-[33554400px] top-[20px] w-[160.953px]" data-name="Container">
      <Paragraph14 />
      <Container23 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[73px] left-[256px] top-0 w-[1095px]" data-name="TopBar">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AJ</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">Admin Jala Warta</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.6)]">admin@jw.com</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 13.3333">
            <path d={svgPaths.pfe4e500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8">
            <path d={svgPaths.p1e2f6dbe} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 1.33333">
            <path d="M8.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container26 />
          <Container27 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[97px] items-start left-px pt-[17px] px-[16px] top-[981px] w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container25 />
    </div>
  );
}

export default function ToolsWordpress() {
  return (
    <div className="bg-white relative size-full" data-name="tools/wordpress">
      <App />
      <Sidebar />
      <TopBar />
      <Container24 />
    </div>
  );
}