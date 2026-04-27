import svgPaths from "./svg-k67xi9pl0d";

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#1e293b] text-[30px] top-[-2px] whitespace-nowrap">Daftar Berita</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-2px] whitespace-nowrap">0 artikel tersimpan di database</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[216.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function UiButton() {
  return (
    <div className="bg-gradient-to-r from-[#6366f1] h-[52px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.25),0px_4px_6px_0px_rgba(99,102,241,0.25)] shrink-0 to-[rgba(99,102,241,0.9)] w-full" data-name="UIButton">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[124.5px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap">Tulis Berita Baru</p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[52px] relative shrink-0 w-[218.641px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <UiButton />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[64px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Link />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">Filter:</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[82.938px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[20px] py-[8px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] text-center whitespace-nowrap">Semua</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-w-px relative rounded-[33554400px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[20px] py-[8px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">Published</p>
      </div>
    </div>
  );
}

function UiToggleButton() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[33554400px]" data-name="UIToggleButton">
      <div aria-hidden="true" className="absolute bg-[#f1f5f9] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[4px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-[464px] top-[2px] w-[241px]" data-name="Container">
      <Text />
      <UiToggleButton />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f8fafc] h-[48px] left-0 rounded-[16px] top-0 w-[448px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Cari artikel...</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[448px]" data-name="Container">
      <Input />
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[852.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] whitespace-nowrap">5 artikel</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-gradient-to-r from-[rgba(99,102,241,0.1)] h-[46px] relative rounded-[33554400px] shrink-0 to-[rgba(173,70,255,0.1)] w-[96.047px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(99,102,241,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[14px] px-[21px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function AllPostsPage() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="AllPostsPage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[32px] relative size-full">
          <Container2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function UiCard() {
  return (
    <div className="bg-white h-[114px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <AllPostsPage />
      </div>
    </div>
  );
}

function Icon2() {
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

function Container8() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.2),0px_4px_6px_0px_rgba(99,102,241,0.2)] shrink-0 size-[44px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.8) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#1e293b] text-[20px] whitespace-nowrap">Semua Artikel</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[186.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function UiCardHeader() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="UICardHeader">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[25px] pr-[778.297px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gradient-to-r border-[rgba(226,232,240,0.5)] border-b border-solid font-['Inter:Semi_Bold',sans-serif] font-semibold from-[rgba(241,245,249,0.5)] h-[52.5px] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] to-[rgba(241,245,249,0.3)] top-0 w-[963px]" data-name="Table Row">
      <p className="absolute left-[24px] top-[16px] w-[417.094px]">Judul Artikel</p>
      <p className="absolute left-[489.09px] top-[16px] w-[87.281px]">Status</p>
      <p className="absolute left-[624.38px] top-[16px] w-[92px]">Tanggal</p>
      <p className="absolute left-[764.38px] top-[16px] w-[54.625px]">Views</p>
      <p className="-translate-x-full absolute left-[939px] text-right top-[16px] w-[72px]">Aksi</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#1e293b] text-[14px]">Panduan Lengkap Menggunakan Jalawarta CMS</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">oleh Admin</p>
      </div>
    </div>
  );
}

function Text2() {
  return <div className="bg-[#64748b] rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Tutorial</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Text2 />
      <Paragraph3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[24px] top-[16.5px] w-[417.094px]" data-name="Container">
      <Paragraph1 />
      <Container12 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(0,201,80,0.1)] h-[30px] items-start left-[489.09px] px-[17px] py-[7px] rounded-[33554400px] to-[rgba(0,188,125,0.1)] top-[22.5px] w-[87.281px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] whitespace-nowrap">Published</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[75px] left-[600.38px] top-0 w-[140px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[26.5px] whitespace-nowrap">15/4/2026</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">1,234</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center justify-center left-[764.38px] top-[27.5px] w-[54.625px]" data-name="Container">
      <Icon3 />
      <Text4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6669 10.6669">
            <path d={svgPaths.p3a217000} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12">
            <path d={svgPaths.p2bb3ce80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 4">
            <path d={svgPaths.pd604100} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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
        <Icon5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[867px] top-[21.5px] w-[72px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-white border-[rgba(226,232,240,0.3)] border-b border-solid h-[75px] left-0 top-0 w-[963px]" data-name="Table Row">
      <Container11 />
      <Text3 />
      <TableCell />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#1e293b] text-[14px]">Tips Menulis Artikel SEO-Friendly</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">oleh Admin</p>
      </div>
    </div>
  );
}

function Text5() {
  return <div className="bg-[#64748b] rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">SEO</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Text5 />
      <Paragraph6 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[24px] top-[16.5px] w-[417.094px]" data-name="Container">
      <Paragraph4 />
      <Container16 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(240,177,0,0.1)] h-[30px] items-start left-[489.09px] px-[17px] py-[7px] rounded-[33554400px] to-[rgba(255,105,0,0.1)] top-[22.5px] w-[62.016px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff085] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px] whitespace-nowrap">Draft</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[75px] left-[600.38px] top-0 w-[140px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[26.5px] whitespace-nowrap">14/4/2026</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[23.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">856</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center justify-center left-[764.38px] pl-[4.625px] pr-[4.641px] top-[27.5px] w-[54.625px]" data-name="Container">
      <Icon6 />
      <Text7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6669 10.6669">
            <path d={svgPaths.p3a217000} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12">
            <path d={svgPaths.p2bb3ce80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 4">
            <path d={svgPaths.pd604100} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[867px] top-[21.5px] w-[72px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute bg-white border-[rgba(226,232,240,0.3)] border-b border-solid h-[75px] left-0 top-[75px] w-[963px]" data-name="Table Row">
      <Container15 />
      <Text6 />
      <TableCell1 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#1e293b] text-[14px]">Cara Mengoptimalkan Kecepatan Website</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[57.609px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">oleh Editor</p>
      </div>
    </div>
  );
}

function Text8() {
  return <div className="bg-[#64748b] rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Paragraph9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[66.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Performance</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Text8 />
      <Paragraph9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[24px] top-[16.5px] w-[417.094px]" data-name="Container">
      <Paragraph7 />
      <Container20 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(0,201,80,0.1)] h-[30px] items-start left-[489.09px] px-[17px] py-[7px] rounded-[33554400px] to-[rgba(0,188,125,0.1)] top-[22.5px] w-[87.281px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] whitespace-nowrap">Published</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[75px] left-[600.38px] top-0 w-[140px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[26.5px] whitespace-nowrap">13/4/2026</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">2,341</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center justify-center left-[764.38px] top-[27.5px] w-[54.625px]" data-name="Container">
      <Icon9 />
      <Text10 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6669 10.6669">
            <path d={svgPaths.p3a217000} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12">
            <path d={svgPaths.p2bb3ce80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 4">
            <path d={svgPaths.pd604100} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[867px] top-[21.5px] w-[72px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute bg-white border-[rgba(226,232,240,0.3)] border-b border-solid h-[75px] left-0 top-[150px] w-[963px]" data-name="Table Row">
      <Container19 />
      <Text9 />
      <TableCell2 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#1e293b] text-[14px]">Strategi Content Marketing 2026</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[57.609px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">oleh Editor</p>
      </div>
    </div>
  );
}

function Text11() {
  return <div className="bg-[#64748b] rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Paragraph12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Marketing</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Text11 />
      <Paragraph12 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[24px] top-[16.5px] w-[417.094px]" data-name="Container">
      <Paragraph10 />
      <Container24 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(0,201,80,0.1)] h-[30px] items-start left-[489.09px] px-[17px] py-[7px] rounded-[33554400px] to-[rgba(0,188,125,0.1)] top-[22.5px] w-[87.281px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] whitespace-nowrap">Published</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[75px] left-[600.38px] top-0 w-[140px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[26.5px] whitespace-nowrap">12/4/2026</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">1,876</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center justify-center left-[764.38px] pl-[0.25px] pr-[0.266px] top-[27.5px] w-[54.625px]" data-name="Container">
      <Icon12 />
      <Text13 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6669 10.6669">
            <path d={svgPaths.p3a217000} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12">
            <path d={svgPaths.p2bb3ce80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 4">
            <path d={svgPaths.pd604100} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[867px] top-[21.5px] w-[72px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute bg-white border-[rgba(226,232,240,0.3)] border-b border-solid h-[75px] left-0 top-[225px] w-[963px]" data-name="Table Row">
      <Container23 />
      <Text12 />
      <TableCell3 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#1e293b] text-[14px]">Mengenal Fitur-Fitur Jalawarta Pro</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">oleh Admin</p>
      </div>
    </div>
  );
}

function Text14() {
  return <div className="bg-[#64748b] rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Paragraph15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Tutorial</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Text14 />
      <Paragraph15 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[24px] top-[16.5px] w-[417.094px]" data-name="Container">
      <Paragraph13 />
      <Container28 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(240,177,0,0.1)] h-[30px] items-start left-[489.09px] px-[17px] py-[7px] rounded-[33554400px] to-[rgba(255,105,0,0.1)] top-[22.5px] w-[62.016px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff085] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px] whitespace-nowrap">Draft</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[74.5px] left-[600.38px] top-0 w-[140px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#64748b] text-[14px] top-[26.5px] whitespace-nowrap">11/4/2026</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[23.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">543</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center justify-center left-[764.38px] px-[4.5px] top-[27.5px] w-[54.625px]" data-name="Container">
      <Icon15 />
      <Text16 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6669 10.6669">
            <path d={svgPaths.p3a217000} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12">
            <path d={svgPaths.p2bb3ce80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 4">
            <path d={svgPaths.pd604100} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[867px] top-[21.5px] w-[72px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute bg-white h-[74.5px] left-0 top-[300px] w-[963px]" data-name="Table Row">
      <Container27 />
      <Text15 />
      <TableCell4 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[374.5px] left-0 top-[52.5px] w-[963px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[427px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <TableRow />
      <TableBody />
    </div>
  );
}

function UiTable() {
  return (
    <div className="bg-white h-[429px] relative rounded-[16px] shrink-0 w-full" data-name="UITable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[586px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <UiCardHeader />
        <UiTable />
      </div>
    </div>
  );
}

function UiCard1() {
  return (
    <div className="bg-white h-[588px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="h-[951px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(144.857deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 50%, rgba(241, 245, 249, 0.3) 100%)" }} data-name="DashboardLayout">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pl-[288px] pr-[32px] pt-[105px] relative size-full">
        <Container />
        <UiCard />
        <UiCard1 />
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

function Container32() {
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

function Text17() {
  return <div className="absolute bg-[#00c950] left-[16px] opacity-51 rounded-[33554400px] size-[8px] top-[12px]" data-name="Text" />;
}

function Container33() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] h-[32px] relative rounded-[33554400px] shrink-0 w-[155.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text17 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[32px] not-italic text-[#64748b] text-[12px] top-[8px] whitespace-nowrap">Kamis, 16 April 2026</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function DashboardLayout1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[73px] items-start left-[256px] pb-px pt-[20px] px-[32px] top-0 w-[1095px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container31 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[-0.1px] not-italic text-[16px] text-white top-[-2px] whitespace-nowrap">JW</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.492px] pr-[8.508px] relative size-full">
        <Text18 />
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

function Container37() {
  return (
    <div className="h-[44px] relative shrink-0 w-[124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[11.898px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Icon18() {
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
      <Icon18 />
      <DashboardLayout3 />
    </div>
  );
}

function Icon19() {
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

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.102px] items-center pl-[-0.102px] relative size-full">
        <Icon19 />
        <Text19 />
      </div>
    </div>
  );
}

function Icon20() {
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

function Button12() {
  return (
    <div className="absolute bg-[#1976d2] content-stretch flex h-[44px] items-center justify-between left-0 pl-[16.102px] pr-[16px] py-[12px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] top-0 w-[208px]" data-name="Button">
      <Container39 />
      <Icon20 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#334155] h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#f8fafc] text-[14px]">All Posts</p>
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
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(248,250,252,0.6)]">Tags</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[156px] items-start left-[16px] top-[48px] w-[192px]" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[204px] left-[16px] top-[66px] w-[208px]" data-name="Container">
      <Button12 />
      <Container40 />
    </div>
  );
}

function Icon21() {
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
      <Icon21 />
      <DashboardLayout4 />
    </div>
  );
}

function Icon22() {
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
      <Icon22 />
      <DashboardLayout5 />
    </div>
  );
}

function Icon23() {
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
      <Icon23 />
      <DashboardLayout6 />
    </div>
  );
}

function Icon24() {
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
      <Icon24 />
      <DashboardLayout7 />
    </div>
  );
}

function Icon25() {
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
      <Icon25 />
      <DashboardLayout8 />
    </div>
  );
}

function Icon26() {
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
      <Icon26 />
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

function Icon27() {
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
          <Icon27 />
          <DashboardLayout10 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
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
        <Container38 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Container41 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AJ</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text20 />
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

function Container45() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Icon28() {
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

function Button13() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container44 />
          <Container45 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[97px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function DashboardLayout2() {
  return (
    <div className="absolute bg-[#0b3258] content-stretch flex flex-col h-[951px] items-start left-0 pr-px top-0 w-[256px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.5)] border-r border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <Container34 />
      <Navigation />
      <Container42 />
    </div>
  );
}

export default function PostsAllPostsSemua() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] relative size-full to-[#f1f5f9]" data-name="posts/all posts/semua">
      <Body />
      <DashboardLayout1 />
      <DashboardLayout2 />
    </div>
  );
}