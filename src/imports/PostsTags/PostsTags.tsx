import svgPaths from "./svg-6sksv0hc14";

function Icon() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p33f6b680} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p33f6b680} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            <path d={svgPaths.p33f6b680} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            <path d={svgPaths.p33f6b680} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
          </g>
          <g id="Vector_2">
            <path d="M15.8333 10H4.16667" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M15.8333 10H4.16667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            <path d="M15.8333 10H4.16667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            <path d="M15.8333 10H4.16667" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TagsPage() {
  return (
    <div className="h-[40px] relative rounded-[16px] shrink-0 w-full" data-name="TagsPage">
      <Icon />
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <TagsPage />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#10151c] text-[30px] top-[-2px] whitespace-nowrap">Tags</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-2px] whitespace-nowrap">Kelola tags artikel</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pr-[850.563px] relative size-full">
          <Link />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8054)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8054">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.2),0px_4px_6px_0px_rgba(99,102,241,0.2)] shrink-0 size-[44px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.8) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#10151c] text-[20px] whitespace-nowrap">Tambah Tag Baru</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[44px] relative shrink-0 w-[215.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function UiCardHeader() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="UICardHeader">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[25px] pr-[46.313px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#10151c] text-[14px]">Nama Tag</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8fafc] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">React, JavaScript, SEO...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">Tekan Enter untuk menambahkan</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[79.94px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function UiButton() {
  return (
    <div className="bg-[#1976d2] h-[40px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.25),0px_4px_6px_0px_rgba(99,102,241,0.25)] shrink-0 w-full" data-name="UIButton">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[143.94px] not-italic text-[14px] text-center text-white top-[9px] whitespace-nowrap">Tambah Tag</p>
    </div>
  );
}

function TagsPage1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[152px] items-start relative shrink-0 w-full" data-name="TagsPage">
      <Container8 />
      <UiButton />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[309px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <UiCardHeader />
        <TagsPage1 />
      </div>
    </div>
  );
}

function UiCard() {
  return (
    <div className="bg-white h-[311px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px] text-center">Total Tags</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[131.02px] not-italic text-[#10151c] text-[48px] text-center top-[-3px] whitespace-nowrap">6</p>
    </div>
  );
}

function TagsPage2() {
  return (
    <div className="h-[188px] relative shrink-0 w-full" data-name="TagsPage">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[32px] pt-[56px] px-[32px] relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function UiCard1() {
  return (
    <div className="bg-white h-[190px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <TagsPage2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[525px] items-start left-0 top-0 w-[327.656px]" data-name="Container">
      <UiCard />
      <UiCard1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8054)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8054">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.2),0px_4px_6px_0px_rgba(99,102,241,0.2)] shrink-0 size-[44px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.8) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#10151c] text-[20px] whitespace-nowrap">Daftar Tags</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[162.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] whitespace-nowrap">138 total penggunaan</p>
    </div>
  );
}

function TagsPage3() {
  return (
    <div className="bg-gradient-to-r from-[rgba(99,102,241,0.1)] h-[42px] relative rounded-[33554400px] shrink-0 to-[rgba(173,70,255,0.1)] w-[179.359px]" data-name="TagsPage">
      <div aria-hidden="true" className="absolute border border-[rgba(99,102,241,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[12px] px-[17px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function UiCardHeader1() {
  return (
    <div className="content-stretch flex h-[69px] items-start justify-between pb-[25px] relative shrink-0 w-full" data-name="UICardHeader">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Container11 />
      <TagsPage3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8121)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #6366F1)" id="Vector_2" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8121">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(99,102,241,0.08)] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#10151c] text-[16px] top-[-2px] whitespace-nowrap">WordPress</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">24 artikel</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[180.672_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[40px] relative shrink-0 w-[232.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch flex h-[76px] items-center justify-between left-0 pl-[18px] pr-[50px] py-[18px] rounded-[16px] top-0 w-[300.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container15 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8203)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #8B5CF6)" id="Vector_2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8203">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(139,92,246,0.08)] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#10151c] text-[16px] top-[-2px] whitespace-nowrap">JavaScript</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">18 artikel</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[180.672_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[40px] relative shrink-0 w-[232.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white content-stretch flex h-[76px] items-center justify-between left-[312.67px] pl-[18px] pr-[50px] py-[18px] rounded-[16px] top-0 w-[300.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container19 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8050)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, #06B6D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #06B6D4)" id="Vector_2" stroke="var(--stroke-0, #06B6D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8050">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(6,182,212,0.08)] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#10151c] text-[16px] top-[-2px] whitespace-nowrap">React</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">15 artikel</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[180.672_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[40px] relative shrink-0 w-[232.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white content-stretch flex h-[76px] items-center justify-between left-0 pl-[18px] pr-[50px] py-[18px] rounded-[16px] top-[88px] w-[300.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container23 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8046)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #10B981)" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8046">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(16,185,129,0.08)] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#10151c] text-[16px] top-[-2px] whitespace-nowrap">SEO</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">32 artikel</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[180.672_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[40px] relative shrink-0 w-[232.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white content-stretch flex h-[76px] items-center justify-between left-[312.67px] pl-[18px] pr-[50px] py-[18px] rounded-[16px] top-[88px] w-[300.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container27 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8042)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #F59E0B)" id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8042">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(245,158,11,0.08)] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#10151c] text-[16px] top-[-2px] whitespace-nowrap">Tutorial</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">28 artikel</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[180.672_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[40px] relative shrink-0 w-[232.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white content-stretch flex h-[76px] items-center justify-between left-0 pl-[18px] pr-[50px] py-[18px] rounded-[16px] top-[176px] w-[300.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container31 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8279)" id="Icon">
          <path d={svgPaths.p2f0db680} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #EF4444)" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8279">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(239,68,68,0.08)] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#10151c] text-[16px] top-[-2px] whitespace-nowrap">Tips</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">21 artikel</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[180.672_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[40px] relative shrink-0 w-[232.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white content-stretch flex h-[76px] items-center justify-between left-[312.67px] pl-[18px] pr-[50px] py-[18px] rounded-[16px] top-[176px] w-[300.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container35 />
    </div>
  );
}

function TagsPage4() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="TagsPage">
      <Container14 />
      <Container18 />
      <Container22 />
      <Container26 />
      <Container30 />
      <Container34 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[409px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <UiCardHeader1 />
        <TagsPage4 />
      </div>
    </div>
  );
}

function UiCard2() {
  return (
    <div className="bg-white h-[411px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[525px] items-start left-[351.66px] top-0 w-[679.344px]" data-name="Container">
      <UiCard2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[525px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container9 />
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="h-[750px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(150.963deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 50%, rgba(241, 245, 249, 0.3) 100%)" }} data-name="DashboardLayout">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pl-[288px] pr-[32px] pt-[105px] relative size-full">
        <Container />
        <Container2 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[752px] items-start left-0 top-0 w-[1351px]" data-name="Body">
      <DashboardLayout />
    </div>
  );
}

function Container39() {
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

function Text1() {
  return <div className="absolute bg-[#00c950] left-[16px] opacity-53 rounded-[33554400px] size-[8px] top-[12px]" data-name="Text" />;
}

function Container40() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] h-[32px] relative rounded-[33554400px] shrink-0 w-[155.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[32px] not-italic text-[#64748b] text-[12px] top-[8px] whitespace-nowrap">Kamis, 16 April 2026</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function DashboardLayout1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[73px] items-start left-[256px] pb-px pt-[20px] px-[32px] top-0 w-[1095px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container38 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[-0.1px] not-italic text-[16px] text-white top-[-2px] whitespace-nowrap">JW</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.492px] pr-[8.508px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[0.1px] not-italic text-[#f8fafc] text-[18px] top-[-1px] whitespace-nowrap">Jala Warta</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,250,252,0.6)] whitespace-nowrap">Premium CMS Platform</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[44px] relative shrink-0 w-[124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[11.898px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DashboardLayout3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex gap-[11.984px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[16px] w-[208px]" data-name="Link">
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
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.102px] items-center pl-[-0.102px] relative size-full">
        <Icon11 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1976d2] content-stretch flex h-[44px] items-center justify-between left-0 pl-[16.102px] pr-[16px] py-[12px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] top-0 w-[208px]" data-name="Button">
      <Container46 />
      <Icon12 />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(248,250,252,0.6)]">All Posts</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(248,250,252,0.6)]">Create New</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(248,250,252,0.6)]">Categories</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#6f7071] h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#f8fafc] text-[14px]">Tags</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[156px] items-start left-[16px] top-[48px] w-[192px]" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[204px] left-[16px] top-[66px] w-[208px]" data-name="Container">
      <Button />
      <Container47 />
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

function Link6() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[276px] w-[208px]" data-name="Link">
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

function Link7() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[326px] w-[208px]" data-name="Link">
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

function Link8() {
  return (
    <div className="absolute content-stretch flex gap-[11.961px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[376px] w-[208px]" data-name="Link">
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

function Link9() {
  return (
    <div className="absolute content-stretch flex gap-[11.891px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[426px] w-[208px]" data-name="Link">
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

function Link10() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[476px] w-[208px]" data-name="Link">
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

function Link11() {
  return (
    <div className="absolute content-stretch flex gap-[11.844px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[526px] w-[208px]" data-name="Link">
      <Icon18 />
      <DashboardLayout9 />
    </div>
  );
}

function Paragraph17() {
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

function Link12() {
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

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[101px] items-start left-[16px] pt-[25px] top-[594px] w-[208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph17 />
      <Link12 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[386_0_0] min-h-px relative w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link1 />
        <Container45 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Container48 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AJ</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">Admin Jala Warta</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.6)]">admin@jw.com</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
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

function Button1() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container51 />
          <Container52 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[97px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function DashboardLayout2() {
  return (
    <div className="absolute bg-[#0b3258] content-stretch flex flex-col h-[752px] items-start left-0 pr-px top-0 w-[256px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.5)] border-r border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <Container41 />
      <Navigation />
      <Container49 />
    </div>
  );
}

export default function PostsTags() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] relative size-full to-[#f1f5f9]" data-name="posts/tags">
      <Body />
      <DashboardLayout1 />
      <DashboardLayout2 />
    </div>
  );
}