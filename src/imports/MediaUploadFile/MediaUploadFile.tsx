import svgPaths from "./svg-1rs9bkhcyl";

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 13.3333">
            <g id="Vector">
              <path d={svgPaths.p37c3e100} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p37c3e100} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d={svgPaths.p37c3e100} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d={svgPaths.p37c3e100} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <g id="Vector">
              <path d="M12.5 0.833333H0.833333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M12.5 0.833333H0.833333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d="M12.5 0.833333H0.833333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d="M12.5 0.833333H0.833333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[272.875px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#10151c] text-[30px] top-[-2px] whitespace-nowrap">Buat Halaman Baru</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Heading1 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[39.109px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">JUDUL</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f8fafc] h-[48px] left-0 rounded-[16px] top-[24px] w-[613.328px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(100,116,139,0.5)] whitespace-nowrap">Masukkan judul yang menarik...</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[71.156px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">PERMALINK</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-2px] whitespace-nowrap">domain.com/</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return <div className="flex-[479.422_0_0] h-[24px] min-w-px" data-name="Text Input" />;
}

function Container6() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex gap-[4px] h-[48px] items-center left-0 px-[18px] py-[2px] rounded-[16px] top-[24px] w-[613.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text />
      <TextInput1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[234px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[16.67%] left-1/4 right-[20.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <g id="Vector">
              <path d={svgPaths.p36e30a00} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p36e30a00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p36e30a00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p36e30a00} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] rounded-[12px] size-[32px] top-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_20.83%_83.33%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 1.33333">
            <g id="Vector">
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_41.67%_16.67%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 1.33333">
            <g id="Vector">
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M6.66667 0.666667H0.666667" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33369 12.0004">
            <g id="Vector">
              <path d={svgPaths.p2cdaf460} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p2cdaf460} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p2cdaf460} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p2cdaf460} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_33.33%_66.67%_24.99%]" data-name="Vector">
        <div className="absolute inset-[-25%_-10%_-25.01%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00105 4.00018">
            <g id="Vector">
              <path d={svgPaths.p386d0e80} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p386d0e80} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p386d0e80} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p386d0e80} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-1/4 right-1/4 top-1/2" data-name="Vector">
        <div className="absolute inset-[-12.5%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 6.66667">
            <g id="Vector">
              <path d={svgPaths.p31516400} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p31516400} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p31516400} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p31516400} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H11.3333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H11.3333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H11.3333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H11.3333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[rgba(226,232,240,0.5)] h-[24px] left-[124px] top-[4px] w-px" data-name="Container" />;
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(99,102,241,0.1)] content-stretch flex h-[32px] items-start left-[137px] px-[12px] py-[6px] rounded-[12px] top-0 w-[42.078px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6366f1] text-[14px] text-center whitespace-nowrap">H2</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[187.08px] px-[12px] py-[6px] rounded-[12px] top-0 w-[42.078px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] text-center whitespace-nowrap">H3</p>
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[rgba(226,232,240,0.5)] h-[24px] left-[241.16px] top-[4px] w-px" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[12.5%] right-[87.46%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[87.46%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[87.46%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H0.673333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[33.33%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[33.33%] right-[12.5%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H9.33333" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[254.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[41.67%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[41.67%] right-[12.5%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[41.67%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H8" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-[16.67%] right-3/4 top-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
            <g id="Vector">
              <path d="M0.666667 0.666667H2" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H2" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H2" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d="M0.666667 0.666667H2" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-[16.67%] right-[79.17%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-25%_-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <g id="Vector">
              <path d={svgPaths.p39273870} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p39273870} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p39273870} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p39273870} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[16.67%] right-3/4 top-[57.52%]" data-name="Vector">
        <div className="absolute inset-[-23.83%_-50%_-23.83%_-50.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66681 4.13083">
            <g id="Vector">
              <path d={svgPaths.p2cce7ad0} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p2cce7ad0} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p2cce7ad0} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p2cce7ad0} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[294.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-0" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_12.5%_12.5%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 13.3333">
            <g id="Vector">
              <path d={svgPaths.p14559600} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p14559600} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p14559600} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p14559600} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_58.33%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 13.3333">
            <g id="Vector">
              <path d={svgPaths.p123c9a00} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p123c9a00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p123c9a00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p123c9a00} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[334.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-0" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[66.67%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <g id="Vector">
              <path d={svgPaths.p3ec8f700} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p3ec8f700} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p3ec8f700} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p3ec8f700} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-[66.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <g id="Vector">
              <path d={svgPaths.p69910e0} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p69910e0} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p69910e0} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
              <path d={svgPaths.p69910e0} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[374.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-0" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[rgba(226,232,240,0.5)] h-[24px] left-[418.16px] top-[4px] w-px" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2_7977)" id="Icon">
          <path d={svgPaths.p115b3700} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_2_7977">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[32px] left-[431.16px] rounded-[12px] top-0 w-[79.047px]" data-name="Button">
      <Icon8 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[50.5px] not-italic text-[#e60076] text-[14px] text-center top-[5px] whitespace-nowrap">AI Fix</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2_8146)" id="Icon">
          <path d={svgPaths.p115b3700} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8146">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute h-[32px] left-0 rounded-[12px] top-[40px] w-[107.781px]" data-name="Button">
      <Icon9 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[64px] not-italic text-[#9810fa] text-[14px] text-center top-[5px] whitespace-nowrap">AI Expand</p>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[rgba(226,232,240,0.5)] h-[24px] left-[119.78px] top-[44px] w-px" data-name="Container" />;
}

function Icon10() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="Vector">
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M3.33333 8H12.6667" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
          <g id="Vector_2">
            <path d="M8 3.33333V12.6667" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 3.33333V12.6667" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8 3.33333V12.6667" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
            <path d="M8 3.33333V12.6667" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute h-[32px] left-[132.78px] rounded-[12px] top-[40px] w-[110.531px]" data-name="Button">
      <Icon10 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[66px] not-italic text-[#10151c] text-[14px] text-center top-[5px] whitespace-nowrap">Add Block</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
      <Container9 />
      <Button4 />
      <Button5 />
      <Container10 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Container11 />
      <Button10 />
      <Button11 />
      <Container12 />
      <Button12 />
    </div>
  );
}

function TextArea() {
  return <div className="h-[300px] shrink-0 w-full" data-name="Text Area" />;
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-w-px not-italic relative text-[#10151c] text-[20px] text-center">Mulai menulis...</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px] text-center">Gunakan toolbar di atas untuk memformat teks.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[184px] items-start pt-[64px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[490px] items-start relative shrink-0 w-full" data-name="Container">
      <TextArea />
      <Container14 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[661px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <Container8 />
        <Container13 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="flex-[338.656_0_0] h-[54px] min-w-px relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#6366f1] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[18px] pt-[16px] px-[24px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#6366f1] text-[14px] text-center">SEO</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="flex-[338.672_0_0] h-[52px] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[24px] py-[16px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px] text-center">SOCIAL</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[55px] items-center pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114.406px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">FOCUS KEYPHRASE</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2_7970)" id="Icon">
          <path d={svgPaths.pecd8080} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 1.5V3.5" id="Vector_2" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 2.5H9" id="Vector_3" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 8.5V9.5" id="Vector_4" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 9H1.5" id="Vector_5" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2_7970">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon11 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[54.5px] not-italic text-[#e60076] text-[12px] text-center top-0 whitespace-nowrap">Suggest by AI</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Button15 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f8fafc] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(100,116,139,0.5)] whitespace-nowrap">Masukkan kata kunci utama...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <TextInput2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[108.547px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">GOOGLE PREVIEW</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 14.6667">
            <path d={svgPaths.p3d24c340} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[rgba(99,102,241,0.1)] relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
            <path d={svgPaths.pb5eef70} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[87.5%_33.33%_12.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
            <path d="M0.666667 0.666667H6" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[28px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button16 />
        <Button17 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container22 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2_8358)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p21d23a70} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.16667 7H12.8333" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8358">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[72.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">jalawarta.com</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(100,116,139,0.7)]">post › permalink</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#6366f1] text-[16px] top-[-2px] whitespace-nowrap">Judul Halaman</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">Mulai menulis... Gunakan toolbar di atas untuk memformat teks.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container26 />
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[124px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[124.281px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">SEO TITLE OVERRIDE</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute bg-[#f8fafc] h-[48px] left-0 rounded-[16px] top-[24px] w-[613.328px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(100,116,139,0.5)] whitespace-nowrap">Judul Berita</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <TextInput3 />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[119.25px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">META DESCRIPTION</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="absolute bg-[#f8fafc] h-[100px] left-0 rounded-[16px] top-[24px] w-[613.328px]" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(100,116,139,0.5)] whitespace-nowrap">Mulai menulis... Gunakan toolbar di atas untuk memformat teks.</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[138px] w-[613.328px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">0/160</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[154px] relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <TextArea1 />
      <Container29 />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[86.063px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">SEO ANALYSIS</p>
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[#90a1b9] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-0 w-[205.563px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Focus Keyword belum ditentukan</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Text1 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[#ff6900] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-0 w-[374px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] whitespace-nowrap">Meta description menggunakan default (145 huruf pertama).</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Text2 />
    </div>
  );
}

function Container37() {
  return <div className="absolute bg-[#ff6900] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-0 w-[179.063px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] whitespace-nowrap">Belum ada gambar unggulan</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Text3 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[#ff6900] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-0 w-[302.781px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] whitespace-nowrap">Konten terlalu pendek (9 kata). Target: ~300 kata.</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Text4 />
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[#ff6900] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-0 w-[293.828px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] whitespace-nowrap">Belum ada link internal/eksternal dalam konten.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Text5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[132px] items-start left-0 top-[24px] w-[613.328px]" data-name="Container">
      <Container32 />
      <Container34 />
      <Container36 />
      <Container38 />
      <Container40 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Container31 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[738px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <Container18 />
        <Container20 />
        <Container27 />
        <Container28 />
        <Container30 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[795px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1738px] items-start left-0 top-0 w-[679.328px]" data-name="Container">
      <Container3 />
      <Container7 />
      <Container15 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.6px] uppercase">AKSI</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[86.19px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function UiButton() {
  return (
    <div className="bg-[#1976d2] h-[40px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.25),0px_4px_6px_0px_rgba(99,102,241,0.25)] shrink-0 w-full" data-name="UIButton">
      <Icon15 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[152.19px] not-italic text-[14px] text-center text-white top-[9px] whitespace-nowrap">Publikasikan</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Button">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#6366f1] text-[14px] text-center">Simpan Draft</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <UiButton />
      <Button18 />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white h-[158px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading4 />
        <Container44 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.6px] uppercase">GAMBAR UTAMA</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1efeac80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa1e400} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa89080} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">PILIH GAMBAR</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[rgba(241,245,249,0.2)] content-stretch flex flex-col gap-[8px] h-[156.188px] items-center justify-center px-[2px] py-[48.094px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(226,232,240,0.5)] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <Icon16 />
      <Text6 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[238.188px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading5 />
        <Button19 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1738px] items-start left-[703.33px] top-0 w-[327.672px]" data-name="Container">
      <Container43 />
      <Container45 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1738px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container42 />
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="h-[1959px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(124.592deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 50%, rgba(241, 245, 249, 0.3) 100%)" }} data-name="DashboardLayout">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[56px] pl-[288px] pr-[32px] pt-[105px] relative size-full">
        <Container />
        <Container1 />
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

function Container47() {
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

function Text7() {
  return <div className="absolute bg-[#00c950] left-[16px] opacity-74 rounded-[33554400px] size-[8px] top-[12px]" data-name="Text" />;
}

function Container48() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] h-[32px] relative rounded-[33554400px] shrink-0 w-[165.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text7 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[32px] not-italic text-[#64748b] text-[12px] top-[8px] whitespace-nowrap">Minggu, 19 April 2026</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function DashboardLayout1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[73px] items-start left-[256px] pb-px pt-[20px] px-[32px] top-0 w-[1095px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container46 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[-0.1px] not-italic text-[16px] text-white top-[-2px] whitespace-nowrap">JW</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.492px] pr-[8.508px] relative size-full">
        <Text8 />
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

function Container52() {
  return (
    <div className="h-[44px] relative shrink-0 w-[124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[11.898px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function Icon17() {
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

function Link() {
  return (
    <div className="absolute content-stretch flex gap-[11.984px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[16px] w-[208px]" data-name="Link">
      <Icon17 />
      <DashboardLayout3 />
    </div>
  );
}

function Icon18() {
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

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] text-center whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.102px] items-center pl-[-0.102px] relative size-full">
        <Icon18 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon19() {
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

function Button20() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-[16px] pl-[16.102px] pr-[16px] py-[12px] rounded-[16px] top-[66px] w-[208px]" data-name="Button">
      <Container53 />
      <Icon19 />
    </div>
  );
}

function Icon20() {
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

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] text-center whitespace-nowrap">Insights</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.813px] items-center pl-[0.188px] relative size-full">
        <Icon20 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon21() {
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

function Button21() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-[16px] pl-[15.813px] pr-[16px] py-[12px] rounded-[16px] top-[116px] w-[208px]" data-name="Button">
      <Container54 />
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Pages</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] top-[12px] w-[69px]" data-name="Container">
      <Icon22 />
      <Text11 />
    </div>
  );
}

function Icon23() {
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

function Button22() {
  return (
    <div className="bg-[#1976d2] h-[44px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 w-full" data-name="Button">
      <Container56 />
      <div className="absolute flex items-center justify-center left-[176px] size-[16px] top-[14px]">
        <div className="flex-none rotate-180">
          <Icon23 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(248,250,252,0.6)]">All Pages</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#6f7071] h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#f8fafc] text-[14px]">Create New</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[16px] pt-[4px] relative size-full">
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[124px] items-start left-[16px] top-[166px] w-[208px]" data-name="Container">
      <Button22 />
      <Container57 />
    </div>
  );
}

function Icon24() {
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

function Link3() {
  return (
    <div className="absolute content-stretch flex gap-[11.961px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[296px] w-[208px]" data-name="Link">
      <Icon24 />
      <DashboardLayout4 />
    </div>
  );
}

function Icon25() {
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

function Link4() {
  return (
    <div className="absolute content-stretch flex gap-[11.891px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[346px] w-[208px]" data-name="Link">
      <Icon25 />
      <DashboardLayout5 />
    </div>
  );
}

function Icon26() {
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

function Link5() {
  return (
    <div className="absolute content-stretch flex gap-[11.813px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[396px] w-[208px]" data-name="Link">
      <Icon26 />
      <DashboardLayout6 />
    </div>
  );
}

function Icon27() {
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

function Link6() {
  return (
    <div className="absolute content-stretch flex gap-[11.844px] h-[44px] items-center left-[16px] px-[16px] py-[12px] rounded-[16px] top-[446px] w-[208px]" data-name="Link">
      <Icon27 />
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

function Icon28() {
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

function Link7() {
  return (
    <div className="h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12.242px] items-center px-[16px] py-[12px] relative size-full">
          <Icon28 />
          <DashboardLayout8 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[101px] items-start left-[16px] pt-[25px] top-[514px] w-[208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph3 />
      <Link7 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[386_0_0] min-h-px relative w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link />
        <Button20 />
        <Button21 />
        <Container55 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Container59 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AJ</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 123, 229) 0%, rgb(124, 43, 218) 85%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text12 />
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

function Container63() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon29() {
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

function Button23() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container62 />
          <Container63 />
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[97px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function DashboardLayout2() {
  return (
    <div className="absolute bg-[#0b3258] content-stretch flex flex-col h-[1959px] items-start left-0 pr-px top-0 w-[256px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.5)] border-r border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <Container49 />
      <Navigation />
      <Container60 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[130.859px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#10151c] text-[20px] whitespace-nowrap">Media Library</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <g id="Vector">
              <path d={svgPaths.p354ab980} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p354ab980} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d={svgPaths.p354ab980} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d={svgPaths.p354ab980} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <g id="Vector">
              <path d={svgPaths.p2a4db200} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p2a4db200} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d={svgPaths.p2a4db200} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
              <path d={svgPaths.p2a4db200} stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[85px] relative shrink-0 w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
        <Heading6 />
        <Button24 />
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[46px] relative shrink-0 w-[103.516px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#6366f1] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[14px] pt-[12px] px-[16px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6366f1] text-[14px] text-center whitespace-nowrap">Upload File</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[44px] relative shrink-0 w-[112.641px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[12px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">Galeri Media</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[47px] relative shrink-0 w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px px-[24px] relative size-full">
        <Button25 />
        <Button26 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[336px] size-[48px] top-[50px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p38375ec0} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M34 16L24 6L14 16" id="Vector_2" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 6V30" id="Vector_3" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24px] left-[50px] top-[114px] w-[620px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[309.97px] not-italic text-[#10151c] text-[16px] text-center top-[-2px] whitespace-nowrap">Klik atau Seret Gambar ke Sini</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[50px] top-[142px] w-[620px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px] text-center">Mendukung JPG, PNG, WEBP • Maksimal 5MB</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[212px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(226,232,240,0.5)] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <Icon31 />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[260_0_0] min-h-px relative w-[768px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[392px] items-start left-[292px] rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[784px] w-[768px]" data-name="Container">
      <Container65 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function CreatePagePage() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] h-[1960px] left-0 top-0 w-[1351px]" data-name="CreatePagePage">
      <Container64 />
    </div>
  );
}

export default function MediaUploadFile() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] relative size-full to-[#f1f5f9]" data-name="media/upload file">
      <Body />
      <DashboardLayout1 />
      <DashboardLayout2 />
      <CreatePagePage />
    </div>
  );
}