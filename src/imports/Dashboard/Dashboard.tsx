import svgPaths from "./svg-db9hycvlxp";

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-[transparent] top-[-2px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(30, 41, 59) 0%, rgb(30, 41, 59) 100%), linear-gradient(90deg, rgb(30, 41, 59) 0%, rgba(30, 41, 59, 0.7) 100%)" }}>
        Dashboard Utama
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#64748b] text-[18px] top-[-1px] whitespace-nowrap">Ringkasan aktivitas dan statistik platform Anda</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">Artikel Berita</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#1e293b] text-[36px] top-[-2px] whitespace-nowrap">0</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[80px] relative shrink-0 w-[117.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(97, 95, 255) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function UiStatCard() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="UIStatCard">
      <div className="content-stretch flex items-start justify-between p-[32px] relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function UiCard() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[146px] items-start left-0 p-px rounded-[16px] top-0 w-[239.75px]" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <UiStatCard />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">Halaman Statis</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#1e293b] text-[36px] top-[-2px] whitespace-nowrap">0</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[80px] relative shrink-0 w-[117.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function UiStatCard1() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="UIStatCard">
      <div className="content-stretch flex items-start justify-between p-[32px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function UiCard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[146px] items-start left-[263.75px] p-px rounded-[16px] top-0 w-[239.75px]" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <UiStatCard1 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">Komentar Baru</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#1e293b] text-[36px] top-[-2px] whitespace-nowrap">0</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[80px] relative shrink-0 w-[117.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3c61fe80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 184, 219) 0%, rgb(43, 127, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function UiStatCard2() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="UIStatCard">
      <div className="content-stretch flex items-start justify-between p-[32px] relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function UiCard2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[146px] items-start left-[527.5px] p-px rounded-[16px] top-0 w-[239.75px]" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <UiStatCard2 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">File Media</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#1e293b] text-[36px] top-[-2px] whitespace-nowrap">0</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[80px] relative shrink-0 w-[117.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b53d300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1c7c380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function UiStatCard3() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="UIStatCard">
      <div className="content-stretch flex items-start justify-between p-[32px] relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function UiCard3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[146px] items-start left-[791.25px] p-px rounded-[16px] top-0 w-[239.75px]" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <UiStatCard3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[146px] relative shrink-0 w-full" data-name="Container">
      <UiCard />
      <UiCard1 />
      <UiCard2 />
      <UiCard3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.2),0px_4px_6px_0px_rgba(99,102,241,0.2)] shrink-0 size-[44px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.8) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#1e293b] text-[20px] whitespace-nowrap">Quick Actions</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[184.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function UiCardHeader() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="UICardHeader">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[25px] pr-[780.063px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[51.73%_10.06%_10.06%_51.73%]" data-name="Vector">
        <div className="absolute inset-[-10.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.30964 9.30964">
            <path d={svgPaths.p359fc280} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0002 15.0002">
            <path d={svgPaths.p2ac58700} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.58%_60.06%_60.06%_9.58%]" data-name="Vector">
        <div className="absolute inset-[-13.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73833 7.73833">
            <path d={svgPaths.p1b1fa498} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_45.83%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-px relative rounded-[16px] w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[88.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[44.5px] not-italic text-[#1e293b] text-[18px] text-center top-[-1px] whitespace-nowrap">Tulis Berita</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96px] items-center relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Text />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[164px] items-start left-0 pb-[2px] pt-[34px] px-[34px] rounded-[16px] top-0 w-[305.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container14 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 6.66667">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_29.17%_66.67%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.83333">
            <path d={svgPaths.pbedad00} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 11.6667">
            <path d="M0.833333 0.833333V10.8333" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-px relative rounded-[16px] w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[58px] not-italic text-[#1e293b] text-[18px] text-center top-[-1px] whitespace-nowrap">Upload Media</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Text1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#faf5ff] content-stretch flex flex-col h-[164px] items-start left-[329.66px] pb-[2px] pt-[34px] px-[34px] rounded-[16px] top-0 w-[305.672px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container16 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3333">
            <path d={svgPaths.p26091d00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p1d33bb00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_37.5%_37.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.66667">
            <path d="M0.833333 0.833333H5.83333" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 5.83333V0.833333" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-px relative rounded-[16px] w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[114.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[57.5px] not-italic text-[#1e293b] text-[18px] text-center top-[-1px] whitespace-nowrap">Buat Halaman</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Text2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col h-[164px] items-start left-[659.33px] pb-[2px] pt-[34px] px-[34px] rounded-[16px] top-0 w-[305.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container18 />
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="DashboardPage">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[321px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <UiCardHeader />
        <DashboardPage />
      </div>
    </div>
  );
}

function UiCard4() {
  return (
    <div className="bg-white h-[323px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#1e293b] text-[20px] whitespace-nowrap">Aktivitas Terbaru</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Belum ada aktivitas tercatat</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[54px] relative shrink-0 w-[169.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Heading2 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function UiCardHeader1() {
  return (
    <div className="h-[79px] relative shrink-0 w-full" data-name="UICardHeader">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[25px] pr-[795.031px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3d885880} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p108df500} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M16.6667 15H13.3333" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 21.6667H13.3333" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 28.3333H13.3333" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[442.5px] px-[20px] rounded-[16px] size-[80px] top-[64px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(241, 245, 249) 0%, rgba(241, 245, 249, 0.5) 100%)" }} data-name="Container">
      <Icon8 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[28px] left-0 top-[168px] w-[965px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[482.23px] not-italic text-[#64748b] text-[18px] text-center top-[-1px] whitespace-nowrap">Belum ada aktivitas tercatat</p>
    </div>
  );
}

function UiButton() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-center left-[386.36px] px-[30px] py-[12px] rounded-[33554400px] top-[220px] w-[192.266px]" data-name="UIButton">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] text-center whitespace-nowrap">Lihat Log Lengkap →</p>
    </div>
  );
}

function DashboardPage1() {
  return (
    <div className="h-[328px] relative shrink-0 w-full" data-name="DashboardPage">
      <Container22 />
      <Paragraph10 />
      <UiButton />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[495px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <UiCardHeader1 />
        <DashboardPage1 />
      </div>
    </div>
  );
}

function UiCard5() {
  return (
    <div className="bg-white h-[497px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p36afa200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p33545600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M20 18H16" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 26H16" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 34H16" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[434.5px] px-[24px] rounded-[24px] shadow-[0px_25px_50px_0px_rgba(99,102,241,0.4)] size-[96px] top-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <Icon9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[36px] left-0 top-[168px] w-[965px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-[482.19px] not-italic text-[30px] text-[transparent] text-center top-[-2px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(99, 102, 241) 0%, rgb(152, 16, 250) 100%)" }}>
        Jalawarta Pro v1.2
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[58.5px] left-[146.5px] top-[216px] w-[672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[336px] not-italic text-[#64748b] text-[18px] text-center top-[-1px] w-[672px]">Platform CMS Multi-Tenant Anda sudah optimal. Gunakan Blur AI Assistant di halaman editor untuk bantuan penulisan berita profesional.</p>
    </div>
  );
}

function UiButton1() {
  return (
    <div className="absolute bg-gradient-to-r from-[#6366f1] h-[52px] left-[339.25px] rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.25),0px_4px_6px_0px_rgba(99,102,241,0.25)] to-[rgba(99,102,241,0.9)] top-[306.5px] w-[286.484px]" data-name="UIButton">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[143.5px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap">Konfigurasi Domain Utama →</p>
    </div>
  );
}

function DashboardPage2() {
  return (
    <div className="h-[406.5px] relative shrink-0 w-full" data-name="DashboardPage">
      <Container24 />
      <Heading3 />
      <Paragraph11 />
      <UiButton1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[470.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
        <DashboardPage2 />
      </div>
    </div>
  );
}

function UiCard6() {
  return (
    <div className="h-[472.5px] relative rounded-[16px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(155.378deg, rgb(255, 255, 255) 0%, rgba(238, 242, 255, 0.3) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="h-[1779.5px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(127.206deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 50%, rgba(241, 245, 249, 0.3) 100%)" }} data-name="DashboardLayout">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pl-[288px] pr-[32px] pt-[105px] relative size-full">
        <Container />
        <Container1 />
        <UiCard4 />
        <UiCard5 />
        <UiCard6 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1780px] items-start left-0 top-0 w-[1351px]" data-name="Body">
      <DashboardLayout />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[295.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">{`Selamat datang kembali, `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#6366f1] text-[14px]">Admin Jala Warta</span>
          <span className="leading-[20px] text-[14px]">{` 👋`}</span>
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#00c950] left-[16px] opacity-51 rounded-[33554400px] size-[8px] top-[12px]" data-name="Text" />;
}

function Container27() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] h-[32px] relative rounded-[33554400px] shrink-0 w-[155.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[32px] not-italic text-[#64748b] text-[12px] top-[8px] whitespace-nowrap">Kamis, 16 April 2026</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function DashboardLayout1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[73px] items-start left-[256px] pb-px pt-[20px] px-[32px] top-0 w-[1095px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container25 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[-0.1px] not-italic text-[16px] text-white top-[-2px] whitespace-nowrap">JW</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.492px] pr-[8.508px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[0.1px] not-italic text-[#f8fafc] text-[18px] top-[-1px] whitespace-nowrap">Jala Warta</p>
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

function Container31() {
  return (
    <div className="h-[44px] relative shrink-0 w-[124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[11.898px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DashboardLayout3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#6366f1] gap-[11.984px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] to-[rgba(99,102,241,0.9)] top-[16px] w-[208px]" data-name="Link">
      <Icon10 />
      <DashboardLayout3 />
    </div>
  );
}

function Icon11() {
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

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] text-center whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.102px] items-center pl-[-0.102px] relative size-full">
        <Icon11 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-[16px] pl-[16.102px] pr-[16px] py-[12px] rounded-[16px] top-[66px] w-[208px]" data-name="Button">
      <Container32 />
      <Icon12 />
    </div>
  );
}

function Icon13() {
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

function DashboardLayout4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Insights</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[116px] w-[208px]" data-name="Link">
      <Icon13 />
      <DashboardLayout4 />
    </div>
  );
}

function Icon14() {
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

function DashboardLayout5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Pages</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[166px] w-[208px]" data-name="Link">
      <Icon14 />
      <DashboardLayout5 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p38772900} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p27fa8ca0} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DashboardLayout6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Media Library</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex gap-[11.961px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[216px] w-[208px]" data-name="Link">
      <Icon15 />
      <DashboardLayout6 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p794da00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DashboardLayout7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Tools</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex gap-[11.891px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[266px] w-[208px]" data-name="Link">
      <Icon16 />
      <DashboardLayout7 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DashboardLayout8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Users</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[316px] w-[208px]" data-name="Link">
      <Icon17 />
      <DashboardLayout8 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_172)" id="Icon">
          <path d={svgPaths.p1a618f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_172">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DashboardLayout9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Add-Ons</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex gap-[11.844px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[366px] w-[208px]" data-name="Link">
      <Icon18 />
      <DashboardLayout9 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex items-start px-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.5)] tracking-[0.6px] uppercase">System</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DashboardLayout10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12.242px] items-center px-[16px] py-[12px] relative size-full">
          <Icon19 />
          <DashboardLayout10 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col h-[101px] items-start left-[16px] pt-[25px] top-[434px] w-[208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph13 />
      <Link7 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[386_0_0] min-h-px relative w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link />
        <Button3 />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Container33 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AJ</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">Admin Jala Warta</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.6)]">admin@jw.com</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Icon20() {
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
        <Icon20 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container36 />
          <Container37 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[97px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function DashboardLayout2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1780px] items-start left-0 pr-px top-0 w-[256px]" style={{ backgroundImage: "linear-gradient(rgb(30, 41, 59) 0%, rgb(30, 41, 59) 50%, rgb(33, 44, 63) 57.143%, rgb(36, 48, 66) 64.286%, rgb(39, 51, 70) 71.429%, rgb(42, 55, 74) 78.571%, rgb(45, 58, 77) 85.714%, rgb(48, 61, 81) 92.857%, rgb(51, 65, 85) 100%)" }} data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.5)] border-r border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <Container28 />
      <Navigation />
      <Container34 />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] relative size-full to-[#f1f5f9]" data-name="dashboard">
      <Body />
      <DashboardLayout1 />
      <DashboardLayout2 />
    </div>
  );
}