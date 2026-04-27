import svgPaths from "./svg-eimsga4g4s";

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[455.172px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#10151c] text-[36px] top-0 whitespace-nowrap">Anggota Tim</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-[455.172px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#64748b] text-[18px] top-0 whitespace-nowrap">Kelola akses dan peran anggota di portal berita Anda.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[76px] relative shrink-0 w-[455.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3b82f6] h-[48px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(59,130,246,0.3)] shrink-0 w-[204.891px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[116.5px] text-[16px] text-center text-white top-[12px] whitespace-nowrap">Tambah Anggota</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[76px] relative shrink-0 w-[1031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container1 />
        <Button />
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#f8fafc] border-[rgba(226,232,240,0.5)] border-b border-solid font-['Arimo:Bold',sans-serif] font-bold h-[52.5px] leading-[20px] left-0 text-[#64748b] text-[12px] top-0 tracking-[0.6px] uppercase w-[1029px] whitespace-nowrap" data-name="Table Header">
      <p className="absolute left-[24px] top-[16px]">USER</p>
      <p className="absolute left-[165.48px] top-[16px]">USERNAME</p>
      <p className="absolute left-[370.72px] top-[16px]">ROLE</p>
      <p className="absolute left-[512.17px] top-[16px]">STATUS</p>
      <p className="absolute left-[677.44px] top-[16px]">JOINED AT</p>
      <p className="absolute left-[873.53px] top-[16px]">ACTIONS</p>
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[152.5px] left-0 top-[52.5px] w-[1029px]" data-name="Table Body">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[514.55px] not-italic text-[#94a3b8] text-[14px] text-center top-[64.5px] whitespace-nowrap">Belum ada anggota lain di tim Anda.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[205px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[16px] w-[1031px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function UsersPage() {
  return (
    <div className="h-[511px] relative shrink-0 w-full" data-name="UsersPage">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[164px] pt-[32px] px-[32px] relative size-full">
        <Container />
        <Container2 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[682px] items-start left-0 pl-[256px] top-[73px] w-[1351px]" style={{ backgroundImage: "linear-gradient(rgb(248, 250, 252) 0%, rgb(246, 248, 251) 33.333%, rgb(243, 247, 250) 66.667%, rgb(241, 245, 249) 100%)" }} data-name="App">
      <UsersPage />
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

function Link() {
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

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[19px] not-italic text-[14px] text-[rgba(248,250,252,0.7)] text-center top-0 whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[12.094px] h-[20px] items-center left-[16px] top-[12px] w-[69.469px]" data-name="Container">
      <Icon1 />
      <Paragraph1 />
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
      <Container4 />
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

function Paragraph2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[26.5px] not-italic text-[14px] text-[rgba(248,250,252,0.7)] text-center top-0 whitespace-nowrap">Insights</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[20px] items-center left-[16px] top-[12px] w-[84.594px]" data-name="Container">
      <Icon3 />
      <Paragraph2 />
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
      <Container5 />
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

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[21px] not-italic text-[14px] text-[rgba(248,250,252,0.7)] text-center top-0 whitespace-nowrap">Pages</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] top-[12px] w-[73.219px]" data-name="Container">
      <Icon5 />
      <Paragraph3 />
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
      <Container6 />
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

function Link1() {
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
          <path d={svgPaths.p794da00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35.859px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-[rgba(248,250,252,0.7)] top-0 whitespace-nowrap">Tools</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex gap-[11.891px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[266px] w-[208px]" data-name="Link">
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
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.938px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">Users</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#1976d2] content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[316px] w-[208px]" data-name="Link">
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

function Link4() {
  return (
    <div className="absolute content-stretch flex gap-[11.844px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[366px] w-[208px]" data-name="Link">
      <Sidebar9 />
      <Sidebar10 />
    </div>
  );
}

function Paragraph4() {
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

function Link5() {
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

function Link6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 px-[16px] py-[12px] rounded-[16px] top-[107px] w-[208px]" data-name="Link">
      <Sidebar13 />
      <Sidebar14 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t h-[152px] left-[16px] top-[435px] w-[208px]" data-name="Container">
      <Paragraph4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[398px] left-0 top-[80px] w-[255px]" data-name="Navigation">
      <Link />
      <Button1 />
      <Button2 />
      <Button3 />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return <div className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid h-[101px] left-0 top-0 w-[255px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#f8fafc] text-[18px] top-0 whitespace-nowrap">Jala Warta</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,250,252,0.6)] whitespace-nowrap">Premium CMS Platform</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[75.89px] top-[24px] w-[131.063px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25.703px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">JW</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] pl-[7.141px] pr-[7.156px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] size-[40px] top-[26px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <Paragraph7 />
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

function Container13() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">Admin Jala Warta</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.6)]">admin@jw.com</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
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

function Container12() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container13 />
          <Container14 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[97px] items-start left-px pt-[17px] px-[16px] top-[656px] w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container12 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#0b3258] h-[755px] left-0 overflow-clip top-0 w-[256px]" data-name="Sidebar">
      <Navigation />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[rgba(226,232,240,0.5)] border-b border-solid h-[73px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[1095px]" data-name="Container" />;
}

function Container16() {
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

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-0 pl-[32px] pr-[16px] py-[8px] top-0 w-[160.953px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Senin, 21 April 2026</p>
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[#00c950] left-[16px] opacity-51 rounded-[33554400px] size-[8px] top-[12px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(241,245,249,0.5)] h-[32px] left-[902.05px] rounded-[33554400px] top-[20px] w-[160.953px]" data-name="Container">
      <Paragraph10 />
      <Container18 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[73px] left-[256px] top-0 w-[1095px]" data-name="TopBar">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

export default function Users() {
  return (
    <div className="bg-white relative size-full" data-name="users">
      <App />
      <Sidebar />
      <TopBar />
    </div>
  );
}