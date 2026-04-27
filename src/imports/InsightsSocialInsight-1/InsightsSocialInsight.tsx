import svgPaths from "./svg-aoj7t85q4v";
import imgDropdown from "./694f5271726447db5e7764d0df1152babe77d37a.png";

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#10151c] text-[30px] top-[-2px] whitespace-nowrap">AI Insights</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-2px] whitespace-nowrap">Riset artikel trending dan scrape konten kompetitor otomatis.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[46px] relative shrink-0 w-[139.281px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#10151c] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[14px] pt-[12px] px-[24px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Saved Insights</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[46px] relative shrink-0 w-[130.25px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#10151c] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[14px] pt-[12px] px-[24px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">News Insight</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[46px] relative shrink-0 w-[132.625px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#6366f1] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[14px] pt-[12px] px-[24px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6366f1] text-[14px] whitespace-nowrap">Social Insight</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[46px] items-center pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(173, 70, 255, 0.1) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[162.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#10151c] text-[18px] top-[-1px] whitespace-nowrap">Social Media Trends</p>
      </div>
    </div>
  );
}

function SocialTrendsPage() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[32px] top-[32px] w-[965px]" data-name="SocialTrendsPage">
      <Container3 />
      <Container4 />
    </div>
  );
}

function SocialTrendsPage1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[32px] top-[96px] w-[965px]" data-name="SocialTrendsPage">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">{`Mencari konten viral dan trending dari TikTok & Social Media lainnya via RapidAPI.`}</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f8fafc] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(100,116,139,0.6)] whitespace-nowrap">Kata kunci viral (contoh: Lebaran 2024)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 top-0 w-[557.906px]" data-name="Container">
      <TextInput />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f8fafc] inset-0 rounded-[16px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img alt="" className="absolute h-[41.67%] left-[85.34%] max-w-none top-[28.88%] w-[8.61%]" src={imgDropdown} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[20.09px] not-italic text-[#10151c] text-[16px] top-[14px] whitespace-nowrap">Tik Tok</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-[569.91px] top-0 w-[232.25px]" data-name="Container">
      <Dropdown />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8.906px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.90625 16">
        <g clipPath="url(#clip0_2_7999)" id="Icon">
          <path d={svgPaths.p175beb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.742188" />
          <path d={svgPaths.p26830680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.742188" />
        </g>
        <defs>
          <clipPath id="clip0_2_7999">
            <rect fill="white" height="16" width="8.90625" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[11px] items-center left-[16px] top-[11px]">
      <Icon1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-center text-white w-[101px]">Search Trend</p>
    </div>
  );
}

function UiButton() {
  return (
    <div className="absolute bg-[#1976d2] h-[46px] left-[814px] rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.25),0px_4px_6px_0px_rgba(99,102,241,0.25)] top-0 w-[151px]" data-name="UIButton">
      <Frame />
    </div>
  );
}

function SocialTrendsPage2() {
  return (
    <div className="absolute h-[76px] left-[32px] top-[140px] w-[965px]" data-name="SocialTrendsPage">
      <Container5 />
      <Container6 />
      <UiButton />
    </div>
  );
}

function SocialTrendsPage3() {
  return <div className="absolute border-[rgba(226,232,240,0.5)] border-solid border-t h-px left-[32px] top-[248px] w-[965px]" data-name="SocialTrendsPage" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p26c56780} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
          <path d={svgPaths.p18cb7e80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[160px] px-[16px] rounded-[16px] size-[64px] top-0" style={{ backgroundImage: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(173, 70, 255, 0.1) 100%)" }} data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-0 top-[80px] w-[384px]" data-name="Heading 4">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[192.47px] not-italic text-[#10151c] text-[16px] text-center top-[-2px] whitespace-nowrap">Mulai Pelacakan</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[40px] left-0 top-[112px] w-[384px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[192px] not-italic text-[#64748b] text-[0px] text-center top-[-1px] w-[384px]">
        <span className="leading-[20px] text-[14px]">{`Masukkan kata kunci viral dan klik tombol `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#6366f1] text-[14px]">Search Trend</span>
        <span className="leading-[20px] text-[14px]">{` untuk melacak konten trending.`}</span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[152px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function SocialTrendsPage4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[252px] items-start left-[32px] pb-[2px] pt-[50px] px-[290.5px] rounded-[16px] top-[281px] w-[965px]" style={{ backgroundImage: "linear-gradient(165.365deg, rgba(241, 245, 249, 0.2) 0%, rgba(241, 245, 249, 0.3) 100%)" }} data-name="SocialTrendsPage">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(226,232,240,0.5)] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <Container7 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[565px] relative shrink-0 w-full" data-name="Container">
      <SocialTrendsPage />
      <SocialTrendsPage1 />
      <SocialTrendsPage2 />
      <SocialTrendsPage3 />
      <SocialTrendsPage4 />
    </div>
  );
}

function UiCard() {
  return (
    <div className="bg-white h-[567px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="h-[862px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(147.46deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 50%, rgba(241, 245, 249, 0.3) 100%)" }} data-name="DashboardLayout">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pl-[288px] pr-[32px] pt-[105px] relative size-full">
        <Container />
        <Container1 />
        <UiCard />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[584px] items-start left-0 top-0 w-[1351px]" data-name="Body">
      <DashboardLayout />
    </div>
  );
}

function Container10() {
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

function Text() {
  return <div className="absolute bg-[#00c950] left-[16px] opacity-51 rounded-[33554400px] size-[8px] top-[12px]" data-name="Text" />;
}

function Container11() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] h-[32px] relative rounded-[33554400px] shrink-0 w-[154.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[32px] not-italic text-[#64748b] text-[12px] top-[8px] whitespace-nowrap">Sabtu, 18 April 2026</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function DashboardLayout1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[73px] items-start left-[256px] pb-px pt-[20px] px-[32px] top-0 w-[1095px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container9 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[-0.1px] not-italic text-[16px] text-white top-[-2px] whitespace-nowrap">JW</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.492px] pr-[8.508px] relative size-full">
        <Text1 />
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

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,250,252,0.6)] whitespace-nowrap">Premium CMS Platform</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[44px] relative shrink-0 w-[124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[11.898px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Icon3() {
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

function Link3() {
  return (
    <div className="absolute content-stretch flex gap-[11.984px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[16px] w-[208px]" data-name="Link">
      <Icon3 />
      <DashboardLayout3 />
    </div>
  );
}

function Icon4() {
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

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] text-center whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.102px] items-center pl-[-0.102px] relative size-full">
        <Icon4 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-[16px] pl-[16.102px] pr-[16px] py-[12px] rounded-[16px] top-[66px] w-[208px]" data-name="Button">
      <Container16 />
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Insights</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[20px] items-center left-[15.81px] pl-[0.188px] top-[12px] w-[82px]" data-name="Container">
      <Icon6 />
      <Text3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1976d2] h-[44px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 w-full" data-name="Button">
      <Container18 />
      <div className="absolute flex items-center justify-center left-[176px] size-[16px] top-[14px]">
        <div className="flex-none rotate-180">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(248,250,252,0.6)]">Saved Insights</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(248,250,252,0.6)]">News Insight</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#6f7071] h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#f8fafc] text-[14px]">Social Insight</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[116px] items-start relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[16px] pt-[4px] relative size-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[164px] items-start left-[16px] top-[116px] w-[208px]" data-name="Container">
      <Button1 />
      <Container19 />
    </div>
  );
}

function Icon8() {
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

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] text-center whitespace-nowrap">Pages</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon8 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
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
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-[16px] px-[16px] py-[12px] rounded-[16px] top-[286px] w-[208px]" data-name="Button">
      <Container21 />
      <Icon9 />
    </div>
  );
}

function Icon10() {
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

function DashboardLayout4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Media Library</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex gap-[11.961px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[336px] w-[208px]" data-name="Link">
      <Icon10 />
      <DashboardLayout4 />
    </div>
  );
}

function Icon11() {
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

function DashboardLayout5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Tools</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex gap-[11.891px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[386px] w-[208px]" data-name="Link">
      <Icon11 />
      <DashboardLayout5 />
    </div>
  );
}

function Icon12() {
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

function DashboardLayout6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Users</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[436px] w-[208px]" data-name="Link">
      <Icon12 />
      <DashboardLayout6 />
    </div>
  );
}

function Icon13() {
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

function DashboardLayout7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Add-Ons</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex gap-[11.844px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[486px] w-[208px]" data-name="Link">
      <Icon13 />
      <DashboardLayout7 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex items-start px-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.5)] tracking-[0.6px] uppercase">System</p>
      </div>
    </div>
  );
}

function Icon14() {
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

function DashboardLayout8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51px]" data-name="DashboardLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12.242px] items-center px-[16px] py-[12px] relative size-full">
          <Icon14 />
          <DashboardLayout8 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[101px] items-start left-[16px] pt-[25px] top-[554px] w-[208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph3 />
      <Link11 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[386_0_0] min-h-px relative w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link3 />
        <Button />
        <Container17 />
        <Button2 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Container22 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AJ</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">Admin Jala Warta</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.6)]">admin@jw.com</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon15() {
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

function Button3() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container25 />
          <Container26 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[97px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function DashboardLayout2() {
  return (
    <div className="absolute bg-[#0b3258] content-stretch flex flex-col h-[862px] items-start left-0 pr-px top-0 w-[256px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.5)] border-r border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <Container12 />
      <Navigation />
      <Container23 />
    </div>
  );
}

export default function InsightsSocialInsight() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] relative size-full to-[#f1f5f9]" data-name="insights/social insight">
      <Body />
      <DashboardLayout1 />
      <DashboardLayout2 />
    </div>
  );
}