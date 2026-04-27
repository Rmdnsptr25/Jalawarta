import svgPaths from "./svg-g75fqohqlu";

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[229.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#10151c] text-[30px] top-[-2px] whitespace-nowrap">Tulis Berita Baru</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[801.109px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">Judul</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8fafc] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Masukkan judul yang menarik...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">Permalink</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">domain.com/</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[487.156_0_0] h-[20px] min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(30,41,59,0.5)] whitespace-nowrap">url-artikel-anda</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(241,245,249,0.3)] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[18px] py-[14px] relative size-full">
          <Text />
          <TextInput />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container6 />
    </div>
  );
}

function CreatePostPage() {
  return (
    <div className="h-[244px] relative shrink-0 w-full" data-name="CreatePostPage">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function UiCard() {
  return (
    <div className="bg-white h-[246px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <CreatePostPage />
      </div>
    </div>
  );
}

function Icon() {
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

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] rounded-[12px] size-[32px] top-[2px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Icon1() {
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

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-[2px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
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

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-[2px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#e2e8f0] h-[24px] left-[124px] top-[6px] w-px" data-name="Container" />;
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[137px] px-[12px] py-[8px] rounded-[12px] top-0 w-[42.078px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6366f1] text-[14px] text-center whitespace-nowrap">H2</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[187.08px] px-[12px] py-[8px] rounded-[12px] top-0 w-[42.078px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#10151c] text-[14px] text-center whitespace-nowrap">H3</p>
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#e2e8f0] h-[24px] left-[241.16px] top-[6px] w-px" data-name="Container" />;
}

function Icon3() {
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

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[254.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-[2px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
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

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[294.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-[2px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Icon5() {
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

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[334.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-[2px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Icon6() {
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

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[374.16px] pt-[8px] px-[8px] rounded-[12px] size-[32px] top-[2px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#e2e8f0] h-[24px] left-[418.16px] top-[6px] w-px" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_8110)" id="Icon">
          <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_8110">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[36px] left-[431.16px] rounded-[12px] to-[#9810fa] top-0 w-[91.047px]" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[58.5px] not-italic text-[14px] text-center text-white top-[7px] whitespace-nowrap">AI Fix</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_8095)" id="Icon">
          <path d={svgPaths.pb3f4d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2bdb5600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 4V6.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 9.33333V12" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 1.33333V2.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 5.33333H2" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 10.6667H11.3333" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M7.33333 2H6" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_8095">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[36px] left-0 rounded-[12px] to-[#9810fa] top-[46px] w-[119.781px]" data-name="Button">
      <Icon8 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[72px] not-italic text-[14px] text-center text-white top-[7px] whitespace-nowrap">AI Expand</p>
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#e2e8f0] h-[24px] left-[131.78px] top-[52px] w-px" data-name="Container" />;
}

function Icon9() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
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

function Button11() {
  return (
    <div className="absolute border-2 border-[#e2e8f0] border-solid h-[40px] left-[144.78px] rounded-[12px] top-[44px] w-[124.531px]" data-name="Button">
      <Icon9 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[72px] not-italic text-[#10151c] text-[14px] text-center top-[7px] whitespace-nowrap">Add Block</p>
    </div>
  );
}

function CreatePostPage1() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="CreatePostPage">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
      <Button2 />
      <Container8 />
      <Button3 />
      <Button4 />
      <Container9 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Container10 />
      <Button9 />
      <Button10 />
      <Container11 />
      <Button11 />
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex h-[400px] items-start overflow-clip relative shrink-0 w-full" data-name="Text Area">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">Mulai menulis...</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] min-w-px relative text-[#64748b] text-[14px]">Gunakan toolbar di atas untuk memformat teks.</p>
    </div>
  );
}

function CreatePostPage2() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] h-[442px] items-start relative shrink-0 w-full" data-name="CreatePostPage">
      <TextArea />
      <Paragraph />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[623px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] px-[32px] relative size-full">
        <CreatePostPage1 />
        <CreatePostPage2 />
      </div>
    </div>
  );
}

function UiCard1() {
  return (
    <div className="bg-white h-[625px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#6366f1] h-[2px] left-0 top-[42px] w-[73.453px]" data-name="Container" />;
}

function Button12() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start left-[73.45px] px-[24px] py-[12px] top-0 w-[95.234px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">SOCIAL</p>
    </div>
  );
}

function CreatePostPage3() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="CreatePostPage">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[37.5px] not-italic text-[#6366f1] text-[14px] text-center top-[11px] whitespace-nowrap">SEO</p>
      <Container13 />
      <Button12 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[109.906px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Focus Keyphrase</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2_8194)" id="Icon">
          <path d={svgPaths.pecd8080} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 1.5V3.5" id="Vector_2" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 2.5H9" id="Vector_3" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 8.5V9.5" id="Vector_4" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 9H1.5" id="Vector_5" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2_8194">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[54px] not-italic text-[#6366f1] text-[12px] text-center top-0 whitespace-nowrap">Suggest by AI</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Button13 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f8fafc] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Masukkan kata kunci utama...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Input1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[104.344px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Google Preview</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
            <path d={svgPaths.p4611e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_33.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
            <path d={svgPaths.p26970a80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[28px] relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container19 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JW</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.297px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28px] left-0 overflow-clip top-[18px] w-[525.328px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#6366f1] text-[18px] top-[-1px] whitespace-nowrap">Judul Halaman</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 overflow-clip top-[50px] w-[525.328px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">Mulai menulis... Gunakan toolbar di atas untuk memformat teks.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[525.328_0_0] h-[70px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-0 w-[525.328px]">jalawarta.com</p>
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(241,245,249,0.2)] h-[106px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[146px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container20 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">SEO Title Override</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f8fafc] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Judul Berita</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Input2 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114.453px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Meta Description</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">0/160</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Text2 />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="bg-[#f8fafc] h-[100px] relative rounded-[16px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">Mulai menulis... Gunakan toolbar di atas untuk memformat teks.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[134px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <TextArea1 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">SEO Analysis</p>
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[#00c950] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-0 w-[593.328px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#10151c] text-[14px]">Focus Keyword telah ditemukan</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Paragraph2 />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-[#ff6900] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-0 w-[593.328px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#10151c] text-[14px]">Meta description mengandung default (443 word pertama)</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Paragraph3 />
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[#00c950] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-0 w-[593.328px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#10151c] text-[14px]">Belum ada link external/internal dalam konten</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Paragraph4 />
    </div>
  );
}

function Container36() {
  return <div className="absolute bg-[#ff6900] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-0 w-[593.328px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#10151c] text-[14px]">Konten terlalu pendek (9 kata). Target: ~ 280 kata</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Paragraph5 />
    </div>
  );
}

function Container38() {
  return <div className="absolute bg-[#00c950] left-0 rounded-[33554400px] size-[8px] top-[6px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-0 w-[593.328px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#10151c] text-[14px]">Belum ada link external/internal dalam konten</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Paragraph6 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
      <Container37 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[180px] items-start relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Container28 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[724px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
      <Container24 />
      <Container25 />
      <Container27 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[833px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
        <CreatePostPage3 />
        <Container14 />
      </div>
    </div>
  );
}

function UiCard2() {
  return (
    <div className="bg-white h-[835px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1754px] items-start left-0 top-0 w-[679.328px]" data-name="Container">
      <UiCard />
      <UiCard1 />
      <UiCard2 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">Aksi</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[72.53px] size-[16px] top-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c401780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56b0600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17caa400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function UiButton() {
  return (
    <div className="bg-[#1976d2] h-[52px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.25),0px_4px_6px_0px_rgba(99,102,241,0.25)] shrink-0 w-full" data-name="UIButton">
      <Icon13 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[143.53px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap">Publikasikan</p>
    </div>
  );
}

function UiButton1() {
  return (
    <div className="bg-[#f1f5f9] h-[40px] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="UIButton">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[28px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#10151c] text-[14px] text-center">Simpan Draft</p>
        </div>
      </div>
    </div>
  );
}

function CreatePostPage4() {
  return (
    <div className="h-[196px] relative shrink-0 w-full" data-name="CreatePostPage">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Label7 />
        <UiButton />
        <UiButton1 />
      </div>
    </div>
  );
}

function UiCard3() {
  return (
    <div className="bg-white h-[198px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <CreatePostPage4 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">Gambar Utama</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1efeac80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa1e400} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa89080} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(241, 245, 249) 0%, rgba(241, 245, 249, 0.5) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">Pilih Gambar</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[rgba(241,245,249,0.3)] content-stretch flex flex-col gap-[12px] h-[147.188px] items-center justify-center px-[2px] py-[25.594px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <Container40 />
      <Paragraph7 />
    </div>
  );
}

function CreatePostPage5() {
  return (
    <div className="h-[239.188px] relative shrink-0 w-full" data-name="CreatePostPage">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Label8 />
        <Button16 />
      </div>
    </div>
  );
}

function UiCard4() {
  return (
    <div className="bg-white h-[241.188px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <CreatePostPage5 />
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">Kategori</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[#f8fafc] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#64748b] text-[12px] top-0 w-[261.672px]">
        <span className="leading-[16px]">{`Belum ada kategori "`}</span>
        <span className="leading-[16px] text-[#6366f1]">Tambahkan →</span>
        <span className="leading-[16px]">{`"`}</span>
      </p>
    </div>
  );
}

function CreatePostPage6() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="CreatePostPage">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Label9 />
        <Dropdown />
        <Link />
      </div>
    </div>
  );
}

function UiCard5() {
  return (
    <div className="bg-white h-[166px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <CreatePostPage6 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.3px] uppercase">Tag</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f8fafc] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Tambahkan tag baru...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#64748b] text-[12px]">Pisahkan dengan koma (,) atau tekan Enter.</p>
    </div>
  );
}

function CreatePostPage7() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="CreatePostPage">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Label10 />
        <Input3 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function UiCard6() {
  return (
    <div className="bg-white h-[166px] relative rounded-[16px] shrink-0 w-full" data-name="UICard">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <CreatePostPage7 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1754px] items-start left-[703.33px] top-0 w-[327.672px]" data-name="Container">
      <UiCard3 />
      <UiCard4 />
      <UiCard5 />
      <UiCard6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[1754px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container39 />
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="h-[1951px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(124.701deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 50%, rgba(241, 245, 249, 0.3) 100%)" }} data-name="DashboardLayout">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pl-[288px] pr-[32px] pt-[105px] relative size-full">
        <Container />
        <Container2 />
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

function Container42() {
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
  return <div className="absolute bg-[#00c950] left-[16px] opacity-50 rounded-[33554400px] size-[8px] top-[12px]" data-name="Text" />;
}

function Container43() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] h-[32px] relative rounded-[33554400px] shrink-0 w-[155.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[32px] not-italic text-[#64748b] text-[12px] top-[8px] whitespace-nowrap">Kamis, 16 April 2026</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function DashboardLayout1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[73px] items-start left-[256px] pb-px pt-[20px] px-[32px] top-0 w-[1095px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container41 />
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

function Container46() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.492px] pr-[8.508px] relative size-full">
        <Text4 />
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

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,250,252,0.6)] whitespace-nowrap">Premium CMS Platform</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[44px] relative shrink-0 w-[124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[11.898px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function Icon15() {
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
      <Icon15 />
      <DashboardLayout3 />
    </div>
  );
}

function Icon16() {
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

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.102px] items-center pl-[-0.102px] relative size-full">
        <Icon16 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon17() {
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

function Button17() {
  return (
    <div className="absolute bg-[#1976d2] content-stretch flex h-[44px] items-center justify-between left-0 pl-[16.102px] pr-[16px] py-[12px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(99,102,241,0.3),0px_4px_6px_0px_rgba(99,102,241,0.3)] top-0 w-[208px]" data-name="Button">
      <Container49 />
      <Icon17 />
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
    <div className="bg-[#334155] h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex items-start pl-[32px] pr-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#f8fafc] text-[14px]">Create New</p>
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

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[156px] items-start left-[16px] top-[48px] w-[192px]" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[204px] left-[16px] top-[66px] w-[208px]" data-name="Container">
      <Button17 />
      <Container50 />
    </div>
  );
}

function Icon18() {
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
      <Icon18 />
      <DashboardLayout4 />
    </div>
  );
}

function Icon19() {
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
      <Icon19 />
      <DashboardLayout5 />
    </div>
  );
}

function Icon20() {
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
      <Icon20 />
      <DashboardLayout6 />
    </div>
  );
}

function Icon21() {
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
      <Icon21 />
      <DashboardLayout7 />
    </div>
  );
}

function Icon22() {
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
      <Icon22 />
      <DashboardLayout8 />
    </div>
  );
}

function Icon23() {
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
      <Icon23 />
      <DashboardLayout9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex items-start px-[16px] py-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.5)] tracking-[0.6px] uppercase">System</p>
      </div>
    </div>
  );
}

function Icon24() {
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
          <Icon24 />
          <DashboardLayout10 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[101px] items-start left-[16px] pt-[25px] top-[594px] w-[208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph10 />
      <Link12 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[386_0_0] min-h-px relative w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link1 />
        <Container48 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Container51 />
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

function Container54() {
  return (
    <div className="relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(173, 70, 255) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.5px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">Admin Jala Warta</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(248,250,252,0.6)]">admin@jw.com</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[103_0_0] h-[36px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Icon25() {
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

function Button18() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[rgba(51,65,85,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container54 />
          <Container55 />
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[97px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function DashboardLayout2() {
  return (
    <div className="absolute bg-[#0b3258] content-stretch flex flex-col h-[1951px] items-start left-0 pr-px top-0 w-[256px]" data-name="DashboardLayout">
      <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.5)] border-r border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <Container44 />
      <Navigation />
      <Container52 />
    </div>
  );
}

export default function CreateNew() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] relative size-full to-[#f1f5f9]" data-name="create new">
      <Body />
      <DashboardLayout1 />
      <DashboardLayout2 />
    </div>
  );
}